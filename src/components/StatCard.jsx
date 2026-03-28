import { useEffect, useRef, useState } from 'react';
import s from './StatCard.module.css';

export default function StatCard({ value, suffix, label, note, delay = 0 }) {
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted]     = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = null;
          const duration = 2200;
          const tick = (ts) => {
            if (!start) start = ts;
            const p = Math.min(1, (ts - start) / duration);
            setDisplayed(Math.floor(p * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started]);

  return (
    <div
      ref={ref}
      className={`${s.card} reveal`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={s.top}>
        <span className={s.number}>{displayed}</span>
        <span className={s.suffix}>{suffix}</span>
      </div>
      <p className={s.label}>{label}</p>
      <p className={s.note}>{note}</p>
      <div className={s.bottomLine} aria-hidden="true" />
    </div>
  );
}