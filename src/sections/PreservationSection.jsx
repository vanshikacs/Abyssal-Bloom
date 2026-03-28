import { useEffect, useRef } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';
import StatCard from '../components/StatCard';
import GlowOrbLayer from '../components/GlowOrbLayer';
import ParticleField from '../components/ParticleField';
import { preservationStats } from '../data/content';
import s from './PreservationSection.module.css';

const PRES_ORBS = [
  { x: '15%', y: '20%', w: 380, color: 'rgba(0,229,255,0.09)',  dur: 22, delay: 0 },
  { x: '80%', y: '15%', w: 320, color: 'rgba(124,77,255,0.09)', dur: 20, delay: 4 },
  { x: '45%', y: '70%', w: 350, color: 'rgba(105,255,218,0.07)',dur: 18, delay: 7 },
  { x: '85%', y: '65%', w: 260, color: 'rgba(0,188,212,0.07)',  dur: 24, delay: 2 },
];

export default function PreservationSection({ onVisible }) {
  const sectionRef = useRef(null);
  const revealRef  = useRevealAll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('preservation'); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="preservation"
      ref={(el) => { sectionRef.current = el; revealRef.current = el; }}
      className={s.section}
      aria-label="Preservation — Protect What We Barely Understand"
    >
      <GlowOrbLayer orbs={PRES_ORBS} />
      <ParticleField count={40} />

      <div className={s.inner}>
        {/* Header */}
        <div className={s.header}>
          <p className="eyebrow reveal d1">A Reckoning</p>
          <h2 className={`section-title reveal d2 ${s.title}`}>
            Protect What We<br /><em>Barely Understand</em>
          </h2>
          <p className={`section-lead reveal d3 ${s.lead}`}>
            We have mapped less than 20% of the ocean floor.
            We have named a fraction of its inhabitants.
            And yet the clock already runs.
          </p>
        </div>

        {/* Stats grid */}
        <div className={s.statsGrid}>
          {preservationStats.map((stat, i) => (
            <StatCard
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              note={stat.note}
              delay={0.1 + i * 0.12}
            />
          ))}
        </div>

        {/* Poetic content row */}
        <div className={s.poeticRow}>
          <div className={`${s.poeticLeft} reveal-left d3`}>
            <div className={s.glowPill} />
            <p className={s.poeticText}>
              Every species lost before it is found
              is a sentence erased from a story
              we never knew was being written.
            </p>
          </div>
          <div className={`${s.poeticRight} reveal-right d4`}>
            <div className={s.iconGrid}>
              {['🪸','🐋','🦑','🐙','🦀','🐡'].map((icon, i) => (
                <span key={i} className={s.iconItem} style={{ animationDelay: `${i * 0.3}s` }}>
                  {icon}
                </span>
              ))}
            </div>
            <p className={s.iconNote}>
              These are just the ones we've met.
            </p>
          </div>
        </div>

        {/* Final message */}
        <div className={`${s.finalMsg} reveal d5`}>
          <div className={s.msgLine} aria-hidden="true" />
          <blockquote className={s.msgQuote}>
            "The ocean is not a resource to be consumed.
            It is an intelligence older than memory,
            still composing its first word."
          </blockquote>
          <div className={s.msgLine} aria-hidden="true" />
        </div>
      </div>

      <div className={s.fadeDown} aria-hidden="true" />
    </section>
  );
}