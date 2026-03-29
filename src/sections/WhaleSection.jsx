import { useEffect, useRef } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';
import Whaleglowscene from '../components/Whaleglowscene.jsx';
import GlowOrbLayer from '../components/GlowOrbLayer';
import ParticleField from '../components/ParticleField';
import s from './WhaleSection.module.css';

const WHALE_ORBS = [
  { x: '50%', y: '50%', w: 800, color: 'rgba(0,180,220,0.07)',  dur: 24, delay: 0,  blur: 120 },
  { x: '20%', y: '25%', w: 400, color: 'rgba(124,77,255,0.08)', dur: 20, delay: 5,  blur: 90  },
  { x: '80%', y: '70%', w: 350, color: 'rgba(0,229,255,0.07)',  dur: 18, delay: 2,  blur: 80  },
  { x: '10%', y: '70%', w: 300, color: 'rgba(105,255,218,0.06)',dur: 22, delay: 8,  blur: 80  },
  { x: '88%', y: '25%', w: 280, color: 'rgba(61,90,254,0.07)',  dur: 26, delay: 3,  blur: 80  },
];

export default function WhaleSection({ onVisible }) {
  const sectionRef = useRef(null);
  const revealRef  = useRevealAll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('whale'); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="whale"
      ref={(el) => { sectionRef.current = el; revealRef.current = el; }}
      className={s.section}
      aria-label="Whale Dream — Cathedral of Living Light"
    >
      <GlowOrbLayer orbs={WHALE_ORBS} />
      <ParticleField count={55} />

      {/* Deep current ripples */}
      <div className={s.ripples} aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={s.rippleEllipse} style={{ '--i': i }} />
        ))}
      </div>

      <div className={s.inner}>
        {/* Header */}
        <div className={s.header}>
          <p className="eyebrow reveal d1">Zone IV — 3,000 metres</p>
          <h2 className={`section-title reveal d2 ${s.title}`}>
            Cathedral of<br /><em>Living Light</em>
          </h2>
          <p className={`section-lead reveal d3 ${s.lead}`}>
            In the lightless cathedral of the deep,
            a creature the size of a city block
            carries stars across its skin.
          </p>
        </div>

        {/* Whale scene — centrepiece */}
        <div className={`reveal d4 ${s.whaleWrap}`}>
          <Whaleglowscene />
        </div>

        {/* Quote */}
        <div className={`${s.quoteWrap} reveal d5`}>
          <blockquote className={s.quote}>
            "It does not need an audience.<br />
            It has always been luminous."
          </blockquote>
        </div>

        {/* Trio of ambient facts */}
        <div className={s.trioGrid}>
          {[
            { num: '30 m',  label: 'Length of a blue whale',         note: 'The largest animal ever to live'     },
            { num: '52 Hz', label: 'The loneliest whale\'s frequency', note: 'Too high for others to hear'         },
            { num: '200 yr',label: 'Bowhead whale lifespan',          note: 'Older than most nations'              },
          ].map((item, i) => (
            <div key={i} className={`${s.trioCard} reveal`} style={{ transitionDelay: `${0.15 + i * 0.12}s` }}>
              <span className={s.trioNum}>{item.num}</span>
              <span className={s.trioLabel}>{item.label}</span>
              <span className={s.trioNote}>{item.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={s.fadeDown} aria-hidden="true" />
    </section>
  );
}