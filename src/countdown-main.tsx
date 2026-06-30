import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Silk from './Silk';
import './index.css';
import CountdownDisplay from './components/CountdownDisplay';

createRoot(document.getElementById('countdown-root')!).render(
  <Silk
    speed={5}
    scale={1}
    color="#1f0295"
    noiseIntensity={1.5}
    rotation={0}>
    <StrictMode>
      <CountdownDisplay />
    </StrictMode>
  </Silk>
);