import { useEffect, useRef } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';
import s from './SurfaceSection.module.css';

export default function SurfaceSection({ onVisible }) {
  const sectionRef = useRef(null);
  const revealRef  = useRevealAll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('surface'); },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="surface"
      ref={(el) => { sectionRef.current = el; revealRef.current = el; }}
      className={s.section}
      aria-label="Surface Crossing — Entering the Sea"
    >
      {/* Refraction grid */}
      <div className={s.refractionGrid} aria-hidden="true" />

      {/* Golden-to-cyan gradient overlay */}
      <div className={s.gradientOverlay} aria-hidden="true" />

      {/* Ripple rings */}
      <div className={s.rippleWrap} aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={s.rippleRing} style={{ '--i': i }} />
        ))}
      </div>

      {/* Water caustics */}
      <div className={s.caustics} aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={s.causticBlob} style={{ '--i': i }} />
        ))}
      </div>

      <div className={s.inner}>
        <div className={`${s.textBlock} reveal`}>
          <p className="eyebrow">Crossing</p>
          <h2 className={`section-title ${s.title}`}>
            Crossing the Skin<br /><em>of the Sea</em>
          </h2>
        </div>

        <div className={`${s.quoteBlock} reveal d3`}>
          <blockquote className={s.quote}>
            "The surface is the thinnest membrane<br />
            between two infinite worlds.<br />
            One forgets the sun. One has never known it."
          </blockquote>
        </div>

        <div className={`${s.depthIndicator} reveal d5`}>
          <div className={s.depthLine} />
          <span className={s.depthText}>10 m — entering the water column</span>
          <div className={s.depthLine} />
        </div>
      </div>

      {/* Transition fade to next section */}
      <div className={s.fadeOut} aria-hidden="true" />
    </section>
  );
}