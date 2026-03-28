import { useEffect, useState } from 'react';
import s from './Loader.module.css';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase]       = useState('in'); // in | done | out

  useEffect(() => {
    let raf;
    let start = null;
    const duration = 2400;

    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min(100, ((ts - start) / duration) * 100);
      setProgress(Math.floor(p));
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setPhase('out');
          setTimeout(() => { setPhase('done'); onComplete?.(); }, 750);
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`${s.loader} ${phase === 'out' ? s.exit : ''}`} aria-live="polite" aria-label="Loading Abyssal Bloom">

      {/* Background particles */}
      <div className={s.bgParticles} aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className={s.bgP} style={{ '--i': i }} />
        ))}
      </div>

      {/* Jellyfish */}
      <div className={s.jellyWrap} aria-hidden="true">
        <div className={s.jellyBell}>
          <div className={s.jellyCore} />
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={s.jellyRib} style={{ '--i': i }} />
          ))}
          {/* Heart dots on bell */}
          {[{ t:'22%', l:'18%' }, { t:'28%', l:'58%' }, { t:'50%', l:'34%' }, { t:'48%', l:'64%' }].map((pos, i) => (
            <span key={i} className={s.heart} style={{ top: pos.t, left: pos.l, '--i': i }}>♥</span>
          ))}
        </div>
        <div className={s.tentacles}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={s.tentacle} style={{ '--i': i }} />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className={s.titleWrap}>
        <p className={s.eyebrow}>Frontend Odyssey</p>
        <h1 className={s.title}>Abyssal Bloom</h1>
        <p className={s.tagline}>A Descent Through the Ocean's Living Light</p>
      </div>

      {/* Progress */}
      <div className={s.progressWrap} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div className={s.progressTrack}>
          <div className={s.progressFill} style={{ width: `${progress}%` }} />
          <div className={s.progressDot}  style={{ left:  `${progress}%` }} />
        </div>
        <span className={s.progressNum}>{progress}%</span>
      </div>

    </div>
  );
}