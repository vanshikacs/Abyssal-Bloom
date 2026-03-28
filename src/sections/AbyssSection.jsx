import { useEffect, useRef } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';
import ParticleField from '../components/ParticleField';
import s from './AbyssSection.module.css';

export default function AbyssSection({ onVisible }) {
  const sectionRef = useRef(null);
  const revealRef  = useRevealAll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('abyss'); },
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="abyss"
      ref={(el) => { sectionRef.current = el; revealRef.current = el; }}
      className={s.section}
      aria-label="The Abyss — Silence Below"
    >
      {/* Extremely sparse, slow particles */}
      <ParticleField count={25} />

      {/* Cold sparse glows */}
      <div className={s.glows} aria-hidden="true">
        <div className={s.glow1} />
        <div className={s.glow2} />
        <div className={s.glow3} />
      </div>

      {/* Angler fish silhouette */}
      <div className={s.anglerWrap} aria-hidden="true">
        <svg width="200" height="130" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="88" cy="72" rx="68" ry="38" fill="rgba(0,80,160,0.18)" />
          <ellipse cx="152" cy="78" rx="24" ry="14" fill="rgba(0,80,160,0.12)" />
          <path d="M22 72 L4 52" stroke="rgba(0,229,255,0.45)" strokeWidth="2"/>
          <circle cx="4" cy="52" r="5" fill="rgba(0,229,255,0.7)"/>
          <circle cx="4" cy="52" r="2" fill="rgba(255,255,255,0.9)"/>
          <path d="M22 78 L0 92 L22 88" fill="rgba(0,60,140,0.22)"/>
          <path d="M148 65 L180 54 L170 72 L180 90 L148 80" fill="rgba(0,60,140,0.18)"/>
          {/* Spine spikes */}
          {[60,72,84,96,108].map((x, i) => (
            <line key={i} x1={x} y1={38} x2={x+3} y2={52} stroke="rgba(0,150,200,0.25)" strokeWidth="1"/>
          ))}
        </svg>
      </div>

      <div className={s.inner}>
        <p className={`reveal d1 ${s.depthLabel}`}>
          — 4,000 metres · abyssal plain —
        </p>

        <blockquote className={`reveal-blur d2 ${s.mainQuote}`}>
          "Below the last reach of sunlight,<br />
          life begins to glow<br />
          <em>for itself.</em>"
        </blockquote>

        <p className={`reveal d4 ${s.subText}`}>
          Here, in lightless plains covering half our planet's surface,
          creatures drift in silence measured in centuries.
          No current. No season. Only pressure, and patience,
          and the cold democracy of dark.
        </p>

        {/* Sparse depth metrics */}
        <div className={`${s.metrics} reveal d5`}>
          {[
            { value: '4,000 m', label: 'Abyssal Zone depth' },
            { value: '-2°C',    label: 'Water temperature' },
            { value: '400 atm', label: 'Crushing pressure' },
            { value: '0 lux',   label: 'Available light' },
          ].map((m, i) => (
            <div key={i} className={s.metric}>
              <span className={s.metricValue}>{m.value}</span>
              <span className={s.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.fadeDown} aria-hidden="true" />
    </section>
  );
}