import { useEffect, useRef } from 'react';
import { useMouseParallax } from '../hooks/useParallax';
import ParticleField from '../components/ParticleField';
import s from './HeroSection.module.css';

export default function HeroSection({ onVisible }) {
  const parallax = useMouseParallax(18);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('hero'); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={ref} className={s.hero} aria-label="Hero — The Call of the Deep">

      {/* Layered background gradients */}
      <div className={s.bgBase} />
      <div className={s.bgMid} />
      <div className={s.bgSurface} />

      {/* Light rays from above */}
      <div className={s.rays} aria-hidden="true">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={s.ray} style={{ '--i': i }} />
        ))}
      </div>

      {/* Surface shimmer at top */}
      <div className={s.surfaceShimmer} aria-hidden="true">
        <div className={s.shimmerWave} />
      </div>

      {/* Glow orbs */}
      <div className={s.orbs} aria-hidden="true">
        <div className={s.orb1} />
        <div className={s.orb2} />
        <div className={s.orb3} />
        <div className={s.orb4} />
      </div>

      {/* Particles */}
      <ParticleField count={60} />

      {/* Hero content with parallax */}
      <div
        className={s.content}
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      >
        <p className={s.eyebrow}>Frontend Odyssey — Ocean Depths</p>

        <h1 className={s.title}>
          <span className={s.titleAbyssal}>Abyssal</span>
          <span className={s.titleBloom}>Bloom</span>
        </h1>

        <p className={s.subtitle}>
          A Descent Through the Ocean's Living Light
        </p>

        <p className={s.lead}>
          Below the last memory of sunlight,<br />
          the ocean begins to write in light of its own.
        </p>

        <button
          className={s.cta}
          onClick={() => document.getElementById('surface')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Begin the descent — scroll down"
          data-interactive
        >
          <span>Scroll to descend</span>
          <span className={s.ctaArrow} aria-hidden="true">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d="M7 1v14M1 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Scroll hint chevrons */}
      <div className={s.scrollCue} aria-hidden="true">
        {[0,1,2].map(i => (
          <div key={i} className={s.chevron} style={{ animationDelay: `${i * 0.22}s` }}>
            <svg width="20" height="11" viewBox="0 0 20 11" fill="none">
              <path d="M1 1l9 9 9-9" stroke="rgba(0,229,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        ))}
      </div>

    </section>
  );
}