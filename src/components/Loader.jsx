import { useEffect, useRef, useState } from 'react';
import '../styles/loader.css';

const PETAL_COUNT = 70;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createPetal(id) {
  return {
    id,
    left: randomBetween(4, 96),           // % across screen
    delay: randomBetween(0, 1.6),          // s before it starts falling
    duration: randomBetween(2.2, 3.8),     // s to fall
    drift: randomBetween(-38, 38),         // px horizontal drift
    spin: randomBetween(-180, 180),        // deg rotation during fall
    scale: randomBetween(0.55, 1.1),
    startRotate: randomBetween(-40, 40),
  };
}

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState('in');   // 'in' | 'hold' | 'out'
  const petals = useRef(Array.from({ length: PETAL_COUNT }, (_, i) => createPetal(i)));

  useEffect(() => {
    // Phase timeline:
    // 0ms       — loader mounts, petals start falling, name fades in
    // 1400ms    — name fully visible, hold
    // 2200ms    — begin exit (fade out)
    // 2900ms    — exit done, call onDone to unmount

    const holdTimer = setTimeout(() => setPhase('out'), 2200);
    const doneTimer = setTimeout(() => onDone(), 2900);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`loader-root loader-root--${phase}`} aria-hidden="true">
      {/* Petal rain */}
      <div className="loader-petals">
        {petals.current.map((p) => (
          <span
            key={p.id}
            className="loader-petal"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--drift': `${p.drift}px`,
              '--spin': `${p.spin}deg`,
              '--scale': p.scale,
              '--rotate': `${p.startRotate}deg`,
            }}
          />
        ))}
      </div>

      {/* Centre wordmark */}
      <div className="loader-center">
        <p className="loader-eyebrow">Portfolio</p>
        <h1 className="loader-name">Aaryesh<br />Namdeo</h1>
        <div className="loader-line" />
        <p className="loader-tagline">Learning. Building. Improving.</p>
      </div>
    </div>
  );
}
