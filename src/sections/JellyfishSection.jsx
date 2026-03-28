import { useEffect, useRef } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';
import Jellyfish from '../components/Jellyfish';
import GlowOrbLayer from '../components/GlowOrbLayer';
import ParticleField from '../components/ParticleField';
import { jellyfishData } from '../data/content';
import s from './JellyfishSection.module.css';

const JELLY_ORBS = [
  { x: '50%', y: '30%',  w: 600, color: 'rgba(24,255,255,0.07)',  dur: 20, delay: 0,  blur: 100 },
  { x: '20%', y: '60%',  w: 400, color: 'rgba(255,64,129,0.08)',  dur: 18, delay: 3,  blur: 80  },
  { x: '80%', y: '20%',  w: 350, color: 'rgba(124,77,255,0.09)',  dur: 22, delay: 6,  blur: 80  },
  { x: '65%', y: '75%',  w: 300, color: 'rgba(0,229,255,0.08)',   dur: 16, delay: 1,  blur: 70  },
  { x: '10%', y: '15%',  w: 260, color: 'rgba(179,136,255,0.07)', dur: 24, delay: 8,  blur: 70  },
];

export default function JellyfishSection({ onVisible }) {
  const sectionRef = useRef(null);
  const revealRef  = useRevealAll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('jellyfish'); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fact cards for the jellyfish section
  const facts = [
    { label: 'Depth',                value: '1,000 m',  unit: 'below surface'              },
    { label: 'Bioluminescent Life',  value: '76%',      unit: 'of deep sea creatures glow' },
    { label: 'Temperature',          value: '2°C',      unit: 'barely above freezing'       },
    { label: 'Pressure',             value: '100×',     unit: 'surface atmospheric pressure' },
  ];

  return (
    <section
      id="jellyfish"
      ref={(el) => { sectionRef.current = el; revealRef.current = el; }}
      className={s.section}
      aria-label="Bioluminescent Jellyfish Kingdom"
    >
      <GlowOrbLayer orbs={JELLY_ORBS} />
      <ParticleField count={70} />

      {/* Current flow streaks */}
      <div className={s.currents} aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={s.current} style={{ '--i': i }} />
        ))}
      </div>

      {/* Jellyfish field */}
      <div className={s.jellyfishField} aria-label="Interactive jellyfish — click or tap each one">
        {jellyfishData.map((j) => (
          <Jellyfish
            key={j.id}
            w={j.w}
            h={j.h}
            bellColor={j.bellColor}
            rimColor={j.rimColor}
            glowColor={j.glowColor}
            tentColor={j.tentColor}
            duration={j.duration}
            delay={j.delay}
            name={j.name}
            hearts={j.hearts}
            style={{ position: 'absolute', left: j.x, top: j.y }}
          />
        ))}
      </div>

      {/* Centred text overlay */}
      <div className={s.textOverlay}>
        <p className={`eyebrow reveal d1 ${s.overlayEyebrow}`}>Zone III — 1,000 to 4,000 metres</p>
        <h2 className={`section-title reveal d2 ${s.overlayTitle}`}>
          The Kingdom of<br /><em>Bioluminescence</em>
        </h2>
        <p className={`reveal d3 ${s.overlayPrompt}`}>
          — touch the jellyfish —
        </p>
      </div>

      {/* Bottom fact strip */}
      <div className={s.factStrip}>
        {facts.map((f, i) => (
          <div key={i} className={`${s.factCard} reveal`} style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
            <span className={s.factLabel}>{f.label}</span>
            <span className={s.factValue}>{f.value}</span>
            <span className={s.factUnit}>{f.unit}</span>
          </div>
        ))}
      </div>

      <div className={s.fadeDown} aria-hidden="true" />
    </section>
  );
}