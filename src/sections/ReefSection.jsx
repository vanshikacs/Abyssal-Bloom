import { useEffect, useRef } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';
import GlowCard from '../components/GlowCard';
import GlowOrbLayer from '../components/GlowOrbLayer';
import ParticleField from '../components/ParticleField';
import { reefCards } from '../data/content';
import s from './ReefSection.module.css';

const REEF_ORBS = [
  { x: '10%',  y: '20%', w: 400, color: 'rgba(255,120,60,0.12)',  dur: 18, delay: 0 },
  { x: '80%',  y: '10%', w: 350, color: 'rgba(0,229,255,0.12)',   dur: 22, delay: 3 },
  { x: '50%',  y: '70%', w: 300, color: 'rgba(255,200,80,0.10)',  dur: 20, delay: 6 },
  { x: '-5%',  y: '65%', w: 280, color: 'rgba(0,188,212,0.10)',   dur: 16, delay: 2 },
];

// CSS coral shapes data
const CORALS = [
  { x: '2%',   colors: ['#ff6e6e','#ff4081'], branches: [80,115,92,65,105], baseAngle: 0  },
  { x: '10%',  colors: ['#ff9f43','#ffd32a'], branches: [95,70,82],         baseAngle: 0  },
  { x: '20%',  colors: ['#00b894','#00cec9'], branches: [128,148,112],      baseAngle: 0  },
  { x: '32%',  colors: ['#a29bfe','#6c5ce7'], branches: [88,108,84,70],     baseAngle: 0  },
  { x: '48%',  colors: ['#fd79a8','#e84393'], branches: [155,138,120],      baseAngle: 0  },
  { x: '62%',  colors: ['#55efc4','#00b894'], branches: [98,78,90,60],      baseAngle: 0  },
  { x: '74%',  colors: ['#fdcb6e','#e17055'], branches: [118,138,100],      baseAngle: 0  },
  { x: '86%',  colors: ['#74b9ff','#0984e3'], branches: [88,68,84],         baseAngle: 0  },
  { x: '93%',  colors: ['#ff7675','#d63031'], branches: [72,95,78],         baseAngle: 0  },
];

export default function ReefSection({ onVisible }) {
  const sectionRef = useRef(null);
  const revealRef  = useRevealAll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('reef'); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reef"
      ref={(el) => { sectionRef.current = el; revealRef.current = el; }}
      className={s.section}
      aria-label="Sunlit Reef — Where Light Still Dances"
    >
      <GlowOrbLayer orbs={REEF_ORBS} />
      <ParticleField count={45} />

      {/* Fish swim layer */}
      <div className={s.fishLayer} aria-hidden="true">
        {[...Array(14)].map((_, i) => (
          <div key={i} className={s.fish} style={{ '--i': i }}>
            <svg
              width={12 + (i % 5) * 5}
              height={7  + (i % 4) * 3}
              viewBox="0 0 30 15"
              fill={['#ff9f43','#ffd32a','#ff6b6b','#48dbfb','#ff9ff3','#00cec9'][i % 6]}
              opacity="0.55"
            >
              <ellipse cx="13" cy="7.5" rx="13" ry="6"/>
              <polygon points="26,7.5 30,3 30,12"/>
            </svg>
          </div>
        ))}
      </div>

      <div className={s.inner}>
        {/* Header */}
        <div className={s.headerWrap}>
          <p className="eyebrow reveal d1">Zone I — 0 to 200 metres</p>
          <h2 className={`section-title reveal d2 ${s.title}`}>
            Where Light<br /><em>Still Dances</em>
          </h2>
          <p className={`section-lead reveal d3`}>
            The coral cathedral. A world painted in warmth, where every creature
            wears colour like a celebration, and light arrives as an answer.
          </p>
        </div>

        {/* Coral scene */}
        <div className={`${s.coralScene} reveal d3`} aria-hidden="true">
          {CORALS.map((coral, ci) => (
            <div key={ci} className={s.coralGroup} style={{ left: coral.x }}>
              {coral.branches.map((h, bi) => (
                <div
                  key={bi}
                  className={s.coralBranch}
                  style={{
                    height: h,
                    background: `linear-gradient(to top, ${coral.colors[0]}, ${coral.colors[1]})`,
                    transform: `rotate(${(bi - Math.floor(coral.branches.length/2)) * 8}deg)`,
                    animationDelay: `${(ci * 0.3 + bi * 0.15)}s`,
                    animationDuration: `${3.5 + bi * 0.4}s`,
                    boxShadow: `0 0 8px ${coral.colors[0]}55`,
                  }}
                />
              ))}
            </div>
          ))}
          {/* Sandy floor */}
          <div className={s.sandFloor} />
        </div>

        {/* Cards grid */}
        <div className={s.cardsGrid}>
          {reefCards.map((card, i) => (
            <GlowCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
              badge={card.badge}
              glowColor={card.glow}
              delay={0.1 + i * 0.12}
            />
          ))}
        </div>

        {/* Depth transition text */}
        <div className={`${s.depthNote} reveal d5`}>
          <div className={s.depthBar} />
          <span>descending past the photic zone</span>
          <div className={s.depthBar} />
        </div>
      </div>

      <div className={s.fadeDown} aria-hidden="true" />
    </section>
  );
}