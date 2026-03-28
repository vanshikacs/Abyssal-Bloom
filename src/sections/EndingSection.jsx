import { useEffect, useRef } from 'react';
import { useRevealAll } from '../hooks/useScrollReveal';
import ReplayButton from '../components/ReplayButton';
import GlowOrbLayer from '../components/GlowOrbLayer';
import s from './EndingSection.module.css';

const ENDING_ORBS = [
  { x: '50%', y: '80%', w: 700, color: 'rgba(0,150,200,0.12)',  dur: 22, delay: 0, blur: 120 },
  { x: '20%', y: '40%', w: 350, color: 'rgba(255,200,80,0.08)', dur: 18, delay: 3, blur: 90  },
  { x: '80%', y: '30%', w: 300, color: 'rgba(124,77,255,0.09)', dur: 20, delay: 6, blur: 80  },
  { x: '50%', y: '20%', w: 400, color: 'rgba(0,229,255,0.08)',  dur: 24, delay: 1, blur: 100 },
];

export default function EndingSection({ onVisible }) {
  const sectionRef = useRef(null);
  const revealRef  = useRevealAll();
  const canvasRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible?.('ending'); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Rising canvas particles for the ending
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const palette = [
      [0,229,255],[255,200,80],[124,77,255],[105,255,218],[255,255,255]
    ];

    const particles = Array.from({ length: 70 }, () => {
      const rgb = palette[Math.floor(Math.random() * palette.length)];
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.4,
        speedY: Math.random() * 1.2 + 0.4,
        speedX: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.65 + 0.1,
        wobble: Math.random() * Math.PI * 2,
        rgb,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.speedY;
        p.wobble += 0.018;
        p.x += Math.sin(p.wobble) * 0.55 + p.speedX;
        if (p.y < -8) { p.y = canvas.height + 8; p.x = Math.random() * canvas.width; }
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb.join(',')},${p.opacity})`;
        ctx.shadowBlur = 9;
        ctx.shadowColor = `rgba(${p.rgb.join(',')},0.5)`;
        ctx.fill();
        ctx.restore();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <section
      id="ending"
      ref={(el) => { sectionRef.current = el; revealRef.current = el; }}
      className={s.section}
      aria-label="Ending — Return to the Surface Changed"
    >
      <GlowOrbLayer orbs={ENDING_ORBS} />

      {/* Rising particles */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:1 }}
      />

      {/* Warm top glow echoing the hero */}
      <div className={s.topGlow} aria-hidden="true" />

      <div className={s.inner}
        ref={(el) => { if (el) revealRef.current = el; }}
      >
        <p className={`reveal d1 ${s.eyebrow}`}>Surfacing</p>

        <blockquote className={`reveal-blur d2 ${s.mainQuote}`}>
          "You descended into darkness<br />
          and found it<br />
          <em>full of light.</em>"
        </blockquote>

        <p className={`reveal d4 ${s.attribution}`}>
          — Abyssal Bloom
        </p>

        <p className={`reveal d5 ${s.closingLine}`}>
          The ocean does not end when you leave it.
          It simply waits — luminous, patient, infinite — for the next descent.
        </p>

        {/* Journey recap pills */}
        <div className={`${s.journeyPills} reveal d6`} aria-label="Sections visited">
          {[
            { label: 'Surface',   color: 'var(--gold)'       },
            { label: 'Reef',      color: 'var(--coral-warm)' },
            { label: 'Twilight',  color: 'var(--indigo)'     },
            { label: 'Jellyfish', color: 'var(--magenta)'    },
            { label: 'Whale',     color: 'var(--mint)'       },
            { label: 'Abyss',     color: 'var(--violet)'     },
            { label: 'Return',    color: 'var(--cyan)'       },
          ].map((p, i) => (
            <span
              key={i}
              className={s.pill}
              style={{ borderColor: p.color, color: p.color, '--pill-delay': `${i * 0.08}s` }}
            >
              {p.label}
            </span>
          ))}
        </div>

        <div className={`reveal d7 ${s.btnWrap}`}>
          <ReplayButton />
        </div>
      </div>

      {/* Footer */}
      <footer className={s.footer}>
        <p className={s.footerText}>
          Abyssal Bloom &nbsp;·&nbsp; Frontend Odyssey — Ocean Depths &nbsp;·&nbsp; An Interactive Storytelling Experience
        </p>
      </footer>
    </section>
  );
}