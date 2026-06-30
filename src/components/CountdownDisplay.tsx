import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { motion } from 'motion/react';
import logoImage from '../assets/logo.webp';

// ─────────────────────────────────────────────────────────
// CUSTOM SPLIT-FLAP ENGINE
// Each character position has 4 layers:
//   [back-top]    – next char's top half    (static, revealed when front falls)
//   [back-bottom] – current char's bottom   (static, shown while bottom rises)
//   [front-top]   – current char's top      (animated: falls to -90deg)
//   [front-bottom]– next char's bottom      (animated: rises from 90deg → 0)
// ─────────────────────────────────────────────────────────

const CARD_H = 21;  // vh  – total card height
const CARD_W = 13;  // vh  – card width (portrait ratio like real panels)
const FONT = 18;  // vh  – digit font size

const FLIP_MS = 230; // duration of each half-flip
const RISE_DELAY = 150; // ms offset before bottom rises
const TOTAL_MS = FLIP_MS + RISE_DELAY + 30; // settle buffer

// Keyframes injected once; not in index.css to keep this page self-contained
const KEYFRAMES = `
  @keyframes sfTopFall {
    from { transform: rotateX(0deg);   }
    to   { transform: rotateX(-90deg); }
  }
  @keyframes sfBottomRise {
    from { transform: rotateX(90deg);  }
    to   { transform: rotateX(0deg);   }
  }
`;

// ── FlapHalf ──────────────────────────────────────────────
// Renders one half of a character panel (top or bottom).
// `pos` controls which 50% of the cell is shown via overflow+absolute positioning.
// `anim` activates one of the two CSS flip animations.
function FlapHalf({
  char,
  pos,
  zIndex,
  anim,
}: {
  char: string;
  pos: 'top' | 'bottom';
  zIndex: number;
  anim?: 'fall' | 'rise';
}) {
  const isTop = pos === 'top';

  const animStyle: CSSProperties =
    anim === 'fall'
      ? { animation: `sfTopFall ${FLIP_MS}ms ease-in forwards` }
      : anim === 'rise'
        ? { animation: `sfBottomRise ${FLIP_MS}ms ease-out ${RISE_DELAY}ms both` }
        : {};

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        height: '50%',
        overflow: 'hidden',
        ...(isTop ? { top: 0 } : { bottom: 0 }),
        zIndex,
        transformOrigin: isTop ? 'bottom center' : 'top center',
        backfaceVisibility: 'hidden',
        ...animStyle,
      }}
    >
      {/*
        Inner div = full cell height (200% of this half-container).
        Top half:    anchored to top → shows upper half of char.
        Bottom half: anchored to bottom → shows lower half of char.
      */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '200%',
          ...(isTop ? { top: 0 } : { bottom: 0 }),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Noto Serif", Georgia, serif',
          fontWeight: 800,
          fontSize: `${FONT}vh`,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: '#f8f8f8',
          userSelect: 'none',
          // Subtle convex gradient: panels catch light at their centre edge
          background: isTop
            ? 'linear-gradient(180deg, #001228 0%, #002555 100%)'
            : 'linear-gradient(180deg, #002555 0%, #001228 100%)',
        }}
      >
        {char}
        {/* Glossy surface sheen */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isTop
              ? 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 60%)'
              : 'linear-gradient(0deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}

// ── SplitFlapChar ─────────────────────────────────────────
// Manages one character position with the full 4-layer stack.
function SplitFlapChar({ value }: { value: string }) {
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (value === prev || flipping) return;

    setFlipping(true);
    timerRef.current = setTimeout(() => {
      setPrev(value);
      setFlipping(false);
    }, TOTAL_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [value, prev, flipping]);

  return (
    /*
      perspective must live on the PARENT of the rotating element.
      No overflow:hidden here so the 3D rotation isn't clipped.
    */
    <div style={{ perspective: '700px', flexShrink: 0 }}>
      <div
        style={{
          position: 'relative',
          width: `${CARD_W}vh`,
          height: `${CARD_H}vh`,
          borderRadius: '3px',
          // Thin border visible at card edges
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.08), 0 8px 28px rgba(0,0,0,0.55)',
        }}
      >
        {/* Layer 1 – back-top: shows next char's top half */}
        <FlapHalf char={value} pos="top" zIndex={1} />
        {/* Layer 2 – back-bottom: shows current char's bottom half */}
        <FlapHalf char={prev} pos="bottom" zIndex={1} />

        {/* Layer 3 – front-top: current char, falls to -90deg */}
        <FlapHalf
          char={prev}
          pos="top"
          zIndex={2}
          anim={flipping ? 'fall' : undefined}
        />
        {/* Layer 4 – front-bottom: next char, rises from 90deg */}
        <FlapHalf
          char={value}
          pos="bottom"
          zIndex={2}
          anim={flipping ? 'rise' : undefined}
        />

        {/* Hinge line */}
        <div
          style={{
            position: 'absolute',
            inset: '0 0 auto 0',
            top: '50%',
            height: '2px',
            transform: 'translateY(-50%)',
            background: '#000812',
            zIndex: 30,
            boxShadow: '0 1px 3px rgba(0,0,0,0.6)',
          }}
        />
      </div>
    </div>
  );
}

// ── SplitFlapUnit ─────────────────────────────────────────
// A 2-digit panel pair with a label (DAYS / HOURS / MINS / SECS).
function SplitFlapUnit({ value, label }: { value: number; label: string }) {
  const [d1, d2] = String(value).padStart(2, '0').split('');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.4vh',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5vh' }}>
        <SplitFlapChar value={d1} />
        <SplitFlapChar value={d2} />
      </div>
      <span
        style={{
          fontFamily: '"Work Sans", ui-sans-serif, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: '1.1vh',
          color: '#ffe088',
          textTransform: 'uppercase',
          letterSpacing: '0.35em',
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// SUPPORTING COMPONENTS
// ─────────────────────────────────────────────────────────

function useCountdown(targetISO: string) {
  const target = new Date(targetISO).getTime();

  const calc = () => {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true };
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff % 86_400_000) / 3_600_000),
      minutes: Math.floor((diff % 3_600_000) / 60_000),
      seconds: Math.floor((diff % 60_000) / 1000),
      started: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

function GoldDivider({ wide = false }: { wide?: boolean }) {
  return (
    <div className="flex items-center" style={{ gap: '1.4vw' }}>
      <div
        className="bg-gradient-to-r from-transparent via-[#fed65b]/35 to-[#fed65b]/50"
        style={{ height: '1px', width: wide ? '10vw' : '5.5vw' }}
      />
      <div className="rounded-full bg-[#fed65b]/55" style={{ width: '5px', height: '5px' }} />
      <div
        className="bg-gradient-to-l from-transparent via-[#fed65b]/35 to-[#fed65b]/50"
        style={{ height: '1px', width: wide ? '10vw' : '5.5vw' }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────

export default function CountdownDisplay() {
  const { days, hours, minutes, seconds, started } = useCountdown('2026-07-02T18:30:00');

  return (
    <motion.div
      className="w-screen h-screen overflow-hidden bg-[#000a1e] text-white flex flex-col items-center justify-between select-none relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
    >
      {/* Inject flip keyframes */}
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            transform: 'translate(-50%, -50%)',
            width: '75vw',
            height: '75vh',
            background:
              'radial-gradient(ellipse at center, rgba(0,50,100,0.35) 0%, rgba(0,33,71,0.15) 50%, transparent 75%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            transform: 'translate(-50%, -48%)',
            width: '35vw',
            height: '35vh',
            background:
              'radial-gradient(ellipse at center, rgba(254,214,91,0.045) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.7) 1px, transparent 0)',
            backgroundSize: '2.8vw 2.8vw',
          }}
        />
        <div
          className="absolute inset-x-0 top-0"
          style={{ height: '22vh', background: 'linear-gradient(to bottom, rgba(0,10,30,0.7), transparent)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: '22vh', background: 'linear-gradient(to top, rgba(0,10,30,0.7), transparent)' }}
        />
      </div>

      {/* ── HEADER ── */}
      <motion.header
        className="relative z-10 flex flex-col items-center"
        style={{ paddingTop: '2.8vh', gap: '1.3vh' }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <div
          className="rounded-full overflow-hidden border border-[#fed65b]/35 shadow-2xl"
          style={{ width: '7.8vh', height: '7.8vh' }}
        >
          <img src={logoImage} alt="Diocese of Canada Logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col items-center" style={{ gap: '0.35vh' }}>
          <p
            className="font-sans font-bold text-[#ffe088] uppercase tracking-[0.36em]"
            style={{ fontSize: '1.05vh' }}
          >
            The Malankara Orthodox Syrian Church
          </p>
          <p className="font-serif font-semibold text-slate-300" style={{ fontSize: '1.9vh' }}>
            Diocese of Canada
          </p>
        </div>
      </motion.header>

      {/* ── WELCOME MESSAGE ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ gap: '1.8vh' }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
      >
        <GoldDivider wide />

        <p
          className="font-sans font-bold text-[#ffe088] uppercase tracking-[0.52em]"
          style={{ fontSize: '1.45vh' }}
        >
          Welcome to
        </p>

        <h1
          className="font-serif font-extrabold text-white leading-[1.06] tracking-tight"
          style={{ fontSize: '8.2vh' }}
        >
          Family &amp; Youth
          <br />
          <span className="text-[#ffe088]">Conference 2026</span>
        </h1>

        <div className="flex items-center" style={{ gap: '1.2vw' }}>
          <div className="bg-[#fed65b]/30" style={{ height: '1px', width: '3.5vw' }} />
          <p className="font-serif italic text-[#ffe088]/75 tracking-wide" style={{ fontSize: '2.05vh' }}>
            "Timeless Truth for a Changing World"
          </p>
          <div className="bg-[#fed65b]/30" style={{ height: '1px', width: '3.5vw' }} />
        </div>
      </motion.div>

      {/* ── SPLIT-FLAP COUNTDOWN ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        style={{ gap: '1.8vh' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
      >
        <p
          className="font-sans font-bold text-[#ffe088] uppercase tracking-[0.42em]"
          style={{ fontSize: '1.05vh' }}
        >
          {started ? 'Conference is live!' : 'Countdown to Conference'}
        </p>

        {started ? (
          <motion.p
            className="font-serif font-extrabold text-[#ffe088]"
            style={{ fontSize: '6vh' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            July 2 – 4, 2026
          </motion.p>
        ) : (
          <div style={{ display: 'flex', gap: '3vw' }}>
            <SplitFlapUnit value={days} label="Days" />
            <SplitFlapUnit value={hours} label="Hours" />
            <SplitFlapUnit value={minutes} label="Mins" />
            <SplitFlapUnit value={seconds} label="Secs" />
          </div>
        )}
      </motion.div>

      {/* ── FOOTER ── */}
      <motion.footer
        className="relative z-10 flex flex-col items-center text-center"
        style={{ paddingBottom: '2.8vh', gap: '1.4vh' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
      >
        <GoldDivider wide />

        <div className="flex items-center" style={{ gap: '1.6vw' }}>
          <span className="font-sans text-slate-300" style={{ fontSize: '1.4vh' }}>
            July 2 – 4, 2026
          </span>
          {/* <span
            className="rounded-full bg-[#fed65b]/45"
            style={{ width: '4px', height: '4px', display: 'inline-block' }}
          /> */}
          {/* <span className="font-sans text-slate-300" style={{ fontSize: '1.4vh' }}>
            Georgian College, Barrie, Ontario
          </span> */}
        </div>

        <div className="flex flex-col items-center" style={{ gap: '0.45vh' }}>
          <p className="font-serif italic text-[#fed65b]/70" style={{ fontSize: '1.4vh' }}>
            "Jesus Christ is the same yesterday and today and forever."
          </p>
          <p
            className="font-sans font-bold text-[#ffe088]/40 uppercase tracking-[0.3em]"
            style={{ fontSize: '0.95vh' }}
          >
            — Hebrews 13:8
          </p>
        </div>
      </motion.footer>
    </motion.div>
  );
}
