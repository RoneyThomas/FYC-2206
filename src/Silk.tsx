import { useEffect, useRef, type ReactNode } from 'react';

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  children?: ReactNode;
}

const VERT = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

// Domain-warped fBm → organic silk/aurora texture
const FRAG = `
  precision mediump float;

  uniform float u_time;
  uniform vec2  u_res;
  uniform float u_speed;
  uniform float u_scale;
  uniform vec3  u_color;
  uniform float u_noise;
  uniform float u_rotation;

  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash2(i),             f),
          dot(hash2(i + vec2(1,0)), f - vec2(1,0)), u.x),
      mix(dot(hash2(i + vec2(0,1)), f - vec2(0,1)),
          dot(hash2(i + vec2(1,1)), f - vec2(1,1)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 6; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / min(u_res.x, u_res.y);

    // Rotation
    float c = cos(u_rotation), s = sin(u_rotation);
    uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
    uv *= u_scale * 3.0;

    float t = u_time * u_speed * 0.04;

    // Two-level domain warp: q warps uv, r warps q — creates the silk fold effect
    vec2 q = vec2(fbm(uv + t),
                  fbm(uv + vec2(5.2, 1.3) + t * 0.8));
    vec2 r = vec2(fbm(uv + 2.5 * q + vec2(1.7, 9.2) + t * 0.15),
                  fbm(uv + 2.5 * q + vec2(8.3, 2.8) + t * 0.12));

    float f = fbm(uv + 3.0 * r + t * 0.05);
    f = 0.5 + 0.5 * f;

    float brightness = pow(clamp(f, 0.0, 1.0), 1.8) * u_noise;
    vec3 col = u_color * brightness * 0.55;

    // Subtle shimmer pass (higher-frequency noise at perpendicular drift)
    float shimmer = fbm(uv * 2.0 + vec2(t * 0.4, -t * 0.3));
    col += u_color * 0.08 * max(0.0, shimmer);

    // Navy base so empty areas stay on-brand, not pure black
    col += vec3(0.0, 0.039, 0.118);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0,2),16)/255, parseInt(h.slice(2,4),16)/255, parseInt(h.slice(4,6),16)/255];
}

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

export default function Silk({
  speed = 5,
  scale = 1,
  color = '#ffffff',
  noiseIntensity = 1.5,
  rotation = 0,
  children,
}: SilkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER,   VERT));
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Full-screen quad (two triangles via TRIANGLE_STRIP)
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime     = gl.getUniformLocation(prog, 'u_time');
    const uRes      = gl.getUniformLocation(prog, 'u_res');
    const uSpeed    = gl.getUniformLocation(prog, 'u_speed');
    const uScale    = gl.getUniformLocation(prog, 'u_scale');
    const uColor    = gl.getUniformLocation(prog, 'u_color');
    const uNoise    = gl.getUniformLocation(prog, 'u_noise');
    const uRotation = gl.getUniformLocation(prog, 'u_rotation');

    gl.uniform1f(uSpeed,    speed);
    gl.uniform1f(uScale,    scale);
    gl.uniform3f(uColor,    ...hexToRgb(color));
    gl.uniform1f(uNoise,    noiseIntensity);
    gl.uniform1f(uRotation, rotation);

    const resize = () => {
      canvas.width  = canvas.clientWidth  * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const t0 = performance.now();
    const render = () => {
      gl.uniform1f(uTime, (performance.now() - t0) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, [speed, scale, color, noiseIntensity, rotation]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
