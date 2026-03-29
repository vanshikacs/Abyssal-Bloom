import { useEffect, useRef } from 'react';
import { useMouseParallax } from '../hooks/useParallax';
import ParticleField from '../components/ParticleField';
import s from './HeroSection.module.css';

// Spirit Koi — ghostly luminous SVG fish
function SpiritKoi({ flip = false }) {
  const id = flip ? 'B' : 'A';
  return (
    <svg viewBox="0 0 160 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
      <defs>
        <radialGradient id={`kg${id}`} cx="40%" cy="28%" r="60%">
          <stop offset="0%"  stopColor="rgba(230,245,255,0.92)" />
          <stop offset="45%" stopColor="rgba(175,220,255,0.50)" />
          <stop offset="100%" stopColor="rgba(120,190,255,0.0)" />
        </radialGradient>
        <radialGradient id={`kh${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(210,235,255,0.28)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id={`kb${id}`}>
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id={`kg2${id}`}>
          <feGaussianBlur stdDeviation="6"/>
        </filter>
      </defs>
      {/* Outer halo */}
      <ellipse cx="80" cy="185" rx="65" ry="160" fill={`url(#kh${id})`} filter={`url(#kg2${id})`} opacity="0.6"/>
      {/* Body */}
      <path d="M80 18 C96 40 108 72 106 112 C104 152 90 175 86 210 C82 245 84 278 80 316 C77 338 72 358 68 372 C64 358 58 335 56 308 C54 275 60 243 58 206 C56 168 44 144 42 106 C40 68 54 42 80 18Z"
        fill={`url(#kg${id})`} filter={`url(#kb${id})`}/>
      {/* Scale arcs */}
      {[55,85,115,145,175,205,235,265,295].map((y,i)=>(
        <path key={i} d={`M${62+i%2*3} ${y} Q80 ${y+7} ${96-i%2*3} ${y}`}
          stroke="rgba(200,235,255,0.22)" strokeWidth="0.5" fill="none"/>
      ))}
      {/* Pectoral fins */}
      <path d="M84 118 C108 108 128 98 124 116 C120 134 96 140 84 134Z"
        fill="rgba(195,230,255,0.28)" filter={`url(#kb${id})`}/>
      <path d="M76 118 C52 106 32 96 36 116 C40 136 66 141 76 134Z"
        fill="rgba(195,230,255,0.28)" filter={`url(#kb${id})`}/>
      {/* Tail */}
      <path d="M68 370 C54 383 38 396 34 389 C30 382 48 368 58 360Z"
        fill="rgba(180,220,255,0.32)" filter={`url(#kb${id})`}/>
      <path d="M80 370 C90 384 106 398 110 391 C114 383 95 368 85 360Z"
        fill="rgba(180,220,255,0.32)" filter={`url(#kb${id})`}/>
      {/* Trailing wisps */}
      <path d="M72 195 C54 225 40 258 36 295" stroke="rgba(175,218,255,0.16)" strokeWidth="1.2" fill="none" strokeDasharray="3 8"/>
      <path d="M86 182 C104 214 116 255 120 298" stroke="rgba(175,218,255,0.13)" strokeWidth="1" fill="none" strokeDasharray="2 9"/>
      {/* Star sparkles */}
      {[{x:74,y:68},{x:88,y:82},{x:70,y:128},{x:90,y:150},{x:75,y:192},{x:84,y:235},{x:72,y:278},{x:82,y:308},{x:76,y:348}].map((pt,i)=>(
        <circle key={i} cx={pt.x} cy={pt.y} r="1.6" fill="rgba(255,255,255,0.88)"
          style={{animation:`twinkle ${1.4+i*0.28}s ease-in-out infinite`,animationDelay:`${i*0.2}s`}}/>
      ))}
      {/* Eye */}
      <circle cx="77" cy="46" r="3.5" fill="rgba(210,238,255,0.85)" filter={`url(#kb${id})`}/>
      <circle cx="77" cy="46" r="1.8" fill="rgba(15,30,65,0.92)"/>
      <circle cx="76" cy="45" r="0.9" fill="rgba(255,255,255,0.95)"/>
    </svg>
  );
}

export default function HeroSection({ onVisible }) {
  const parallax = useMouseParallax(14);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('hero'); },
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={ref} className={s.hero} aria-label="Hero — The Call of the Deep">

      {/* Deep sky background */}
      <div className={s.bgBase} />

      {/* Sacred golden horizon */}
      <div className={s.horizonGlow} />
      <div className={s.moonOrb} />

      {/* Water surface */}
      <div className={s.waterSurface} />
      <div className={s.waterReflection} />

      {/* Golden light rays */}
      <div className={s.rays} aria-hidden="true">
        {[...Array(13)].map((_, i) => (
          <div key={i} className={s.ray} style={{ '--i': i }} />
        ))}
      </div>

      {/* Gold glints on the water surface */}
      <div className={s.glints} aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={s.glint} style={{ '--i': i }} />
        ))}
      </div>

      {/* Atmospheric orbs */}
      <div className={s.orbs} aria-hidden="true">
        <div className={s.orbGold1} />
        <div className={s.orbGold2} />
        <div className={s.orbCyan} />
        <div className={s.orbViolet} />
        <div className={s.orbHorizon} />
      </div>

      {/* Spirit koi — two luminous ghost fish */}
      <div className={s.koiLayer} aria-hidden="true">
        <div className={s.koiLeft}>  <SpiritKoi /></div>
        <div className={s.koiRight}> <SpiritKoi flip /></div>
      </div>

      {/* Ambient particles */}
      <ParticleField count={55} />

      {/* Hero content with subtle parallax */}
      <div className={s.content}
        style={{ transform: `translate(${parallax.x * 0.55}px, ${parallax.y * 0.45}px)` }}
      >
        <p className={s.eyebrow}>Frontend Odyssey · Ocean Depths</p>

        <h1 className={s.title}>
          <span className={s.titleAbyssal}>Abyssal</span>
          <span className={s.titleBloom}>Bloom</span>
        </h1>

        <div className={s.ornament} aria-hidden="true">
          <span className={s.ornLeft} />
          <span className={s.ornGem}>◈</span>
          <span className={s.ornRight} />
        </div>

        <p className={s.lead}>
          Below the last memory of sunlight,<br />
          the ocean begins to write<br />
          <em>in light of its own.</em>
        </p>

        <button
          className={s.cta}
          onClick={() => document.getElementById('surface')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Begin the descent"
          data-interactive
        >
          <span>Begin the descent</span>
          <span className={s.ctaArrow} aria-hidden="true">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none">
              <path d="M6 1v13M1 9l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Scroll chevrons */}
      <div className={s.scrollCue} aria-hidden="true">
        {[0,1,2].map(i => (
          <div key={i} className={s.chevron} style={{ animationDelay: `${i * 0.28}s` }}>
            <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
              <path d="M1 1l7 7 7-7" stroke="rgba(245,200,66,0.42)" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Seamless bottom blend into SurfaceSection */}
      <div className={s.bottomBlend} />

    </section>
  );
}