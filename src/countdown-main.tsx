import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CountdownDisplay from './components/CountdownDisplay';

createRoot(document.getElementById('countdown-root')!).render(
  <StrictMode>
    <CountdownDisplay />
  </StrictMode>
);
