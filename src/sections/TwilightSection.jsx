
import { useEffect, useRef, useState } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';
import InteractiveHotspot from '../components/InteractiveHotspot';
import GlowOrbLayer from '../components/GlowOrbLayer';
import ParticleField from '../components/ParticleField';
import { twilightCreatures, twilightSteps } from '../data/content';
import s from './TwilightSection.module.css';

const TWILIGHT_ORBS = [
  { x: '5%',  y: '20%', w: 380, color: 'rgba(55,90,254,0.11)',  dur: 20, delay: 0 },
  { x: '85%', y: '10%', w: 320, color: 'rgba(112,64,255,0.11)', dur: 24, delay: 4 },
  { x: '50%', y: '60%', w: 280, color: 'rgba(0,188,212,0.08)',  dur: 18, delay: 2 },
  { x: '20%', y: '75%', w: 260, color: 'rgba(179,128,255,0.08)',dur: 22, delay: 6 },
];

export default function TwilightSection({ onVisible }) {
  const sectionRef = useRef(null);
  const revealRef  = useRevealAll();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('twilight'); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = (-rect.top) / (section.offsetHeight - window.innerHeight);
      const step = Math.min(twilightSteps.length - 1, Math.max(0, Math.floor(progress * twilightSteps.length)));
      setActiveStep(step);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="twilight"
      ref={(el) => { sectionRef.current = el; revealRef.current = el; }}
      className={s.section}
      aria-label="Twilight Zone — Where Shapes Become Ghosts"
    >
      <GlowOrbLayer orbs={TWILIGHT_ORBS} />
      <ParticleField count={45} />

      {/* Sacred portal rings — CSS art */}
      <div className={s.portalWrap} aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={s.portalRing} style={{ '--i': i }} />
        ))}
        <div className={s.portalGlow} />
      </div>

      {/* Ghost silhouettes drifting */}
      <div className={s.ghosts} aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={s.ghost} style={{ '--i': i }} />
        ))}
      </div>

      <div className={s.inner}>
        <div className={s.topHeader}>
          <p className="eyebrow reveal d1">Zone II — 200 to 1,000 metres</p>
          <h2 className={`section-title reveal d2 ${s.title}`}>
            Where Shapes<br /><em>Become Ghosts</em>
          </h2>
        </div>

        <div className={s.layout}>
          {/* Sticky storytelling column */}
          <div className={s.stickyCol}>
            <div className={s.stickyInner}>
              {twilightSteps.map((step, i) => (
                <div
                  key={i}
                  className={`${s.storyStep} ${activeStep === i ? s.stepActive : ''}`}
                >
                  <span className={s.stepNum}>{step.num}</span>
                  <h3 className={s.stepTitle}>{step.title}</h3>
                  <p  className={s.stepText}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creature hotspots */}
          <div className={s.creaturesCol}>
            {twilightCreatures.map((c, i) => (
              <InteractiveHotspot
                key={c.id}
                tag={c.tag}
                name={c.name}
                depth={c.depth}
                fact={c.fact}
                glowColor={c.glowColor}
                delay={0.12 + i * 0.16}
              />
            ))}
          </div>
        </div>

        {/* Lantern organism */}
        <div className={`${s.lanternOrg} reveal d4`} aria-hidden="true">
          <div className={s.lanternBody} />
          <div className={s.lanternGlow} />
          {[...Array(8)].map((_, i) => (
            <div key={i} className={s.lanternDot} style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <div className={s.fadeDown} aria-hidden="true" />
    </section>
  );
}
