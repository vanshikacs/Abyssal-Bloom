import { useState } from 'react';
import s from './Jellyfish.module.css';

export default function Jellyfish({
  w = 120, h = 90,
  bellColor, rimColor, glowColor, tentColor,
  duration = 9, delay = 0,
  name, hearts = false,
  style = {},
}) {
  const [pulsing, setPulsing] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 1000);
    setPulsing(true);
    setTimeout(() => setPulsing(false), 600);
  };

  const numTentacles = Math.max(5, Math.round(w / 16));

  return (
    <div
      className={`${s.jelly} ${pulsing ? s.pulsing : ''}`}
      style={{
        width: w,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        ...style,
      }}
      onClick={handleClick}
      title={name}
      aria-label={`${name} — click to interact`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
      data-interactive
    >
      {/* Outer glow halo */}
      <div
        className={s.halo}
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${glowColor}, transparent 72%)`,
          width: w * 1.8, height: h * 1.8,
          top: -(h * 0.4), left: -(w * 0.4),
        }}
      />

      {/* Bell */}
      <div
        className={s.bell}
        style={{
          width: w, height: h,
          background: `radial-gradient(ellipse at 42% 30%, ${bellColor} 0%, ${rimColor} 55%, transparent 82%)`,
          borderColor: bellColor,
          boxShadow: `
            0 0 ${w * 0.55}px ${glowColor},
            0 0 ${w}px ${glowColor.replace(/[\d.]+\)$/, '0.14)')},
            inset 0 0 ${w * 0.35}px ${bellColor.replace(/[\d.]+\)$/, '0.2)')}
          `,
        }}
      >
        {/* Inner highlight */}
        <div className={s.bellHighlight} />

        {/* Radial ribs */}
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className={s.rib}
            style={{
              left: `${10 + i * 13}%`,
              background: `linear-gradient(to bottom, ${bellColor.replace(/[\d.]+\)$/, '0.35)')}, transparent 70%)`,
              transform: `rotate(${(i - 3) * 5}deg)`,
            }}
          />
        ))}

        {/* Heart glow dots */}
        {hearts && [
          { t: '22%', l: '20%' }, { t: '26%', l: '55%' },
          { t: '50%', l: '32%' }, { t: '48%', l: '62%' },
          { t: '36%', l: '40%' },
        ].map((pos, i) => (
          <span
            key={i}
            className={s.heart}
            style={{
              top: pos.t, left: pos.l,
              fontSize: `${w * 0.065}px`,
              color: tentColor,
              '--delay': `${i * 0.45}s`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {/* Tentacles */}
      <div className={s.tentacleWrap}>
        {Array.from({ length: numTentacles }).map((_, i) => {
          const baseH = h * (0.7 + Math.sin(i) * 0.35);
          return (
            <div
              key={i}
              className={s.tentacle}
              style={{
                height: baseH,
                background: `linear-gradient(to bottom, ${tentColor}, transparent)`,
                animationDelay: `${i * 0.13}s`,
                animationDuration: `${2 + i * 0.12}s`,
              }}
            />
          );
        })}
      </div>

      {/* Click ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className={s.ripple}
          style={{
            left: r.x, top: r.y,
            borderColor: glowColor,
          }}
        />
      ))}

      {/* Hover name tooltip */}
      <div className={s.tooltip}>{name}</div>
    </div>
  );
}