import { useState } from 'react';
import s from './WhaleGlowScene.module.css';

export default function WhaleGlowScene() {
  const [burst, setBurst] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev.slice(-4), { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 1400);
    setBurst(true);
    setTimeout(() => setBurst(false), 800);
  };

  // Constellation dots scattered across the whale body
  const constellationDots = [
    { cx: '28%', cy: '32%' }, { cx: '38%', cy: '22%' }, { cx: '48%', cy: '28%' },
    { cx: '55%', cy: '20%' }, { cx: '62%', cy: '30%' }, { cx: '35%', cy: '45%' },
    { cx: '45%', cy: '50%' }, { cx: '52%', cy: '42%' }, { cx: '60%', cy: '48%' },
    { cx: '68%', cy: '38%' }, { cx: '72%', cy: '52%' }, { cx: '42%', cy: '58%' },
    { cx: '30%', cy: '55%' }, { cx: '58%', cy: '62%' }, { cx: '65%', cy: '60%' },
    { cx: '25%', cy: '42%' }, { cx: '75%', cy: '44%' }, { cx: '50%', cy: '35%' },
  ];

  // Constellation lines (pairs of dot indices)
  const lines = [
    [0,1],[1,2],[2,3],[3,4],[4,7],[7,8],[8,9],[5,6],[6,7],[10,13],[11,12],[13,14],
  ];

  return (
    <div
      className={`${s.scene} ${burst ? s.burst : ''}`}
      onClick={handleClick}
      role="button"
      aria-label="Interact with the luminous whale"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
      data-interactive
    >
      {/* Deep glow corona */}
      <div className={s.corona} />
      <div className={s.coronaOuter} />

      {/* SVG whale + constellation */}
      <svg
        className={s.whaleSvg}
        viewBox="0 0 800 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Body gradient — neon teal to midnight blue */}
          <radialGradient id="whaleBodyGrad" cx="42%" cy="40%" r="58%">
            <stop offset="0%"   stopColor="#18ffff" stopOpacity="0.18" />
            <stop offset="35%"  stopColor="#00bcd4" stopOpacity="0.12" />
            <stop offset="70%"  stopColor="#3d5afe" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#030d22" stopOpacity="0.04" />
          </radialGradient>
          {/* Outline / linework gradient */}
          <linearGradient id="whaleLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#18ffff" stopOpacity="0.85" />
            <stop offset="40%"  stopColor="#00e5ff" stopOpacity="0.75" />
            <stop offset="70%"  stopColor="#7c4dff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#ff4081" stopOpacity="0.5" />
          </linearGradient>
          {/* Green bio-glow for markings */}
          <linearGradient id="whaleMarkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#69ffda" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#18ffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.5" />
          </linearGradient>
          {/* Fin gradient */}
          <linearGradient id="finGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#00e5ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7c4dff" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glowFilter" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Body fill */}
        <ellipse cx="390" cy="255" rx="290" ry="145" fill="url(#whaleBodyGrad)" />

        {/* Main body silhouette — linework */}
        <path
          d="M120 260
             C130 200 160 170 200 165
             C240 160 280 155 320 152
             C380 148 440 150 500 162
             C550 172 590 195 620 225
             C650 255 660 290 655 320
             C648 352 630 375 600 388
             C560 402 510 405 460 400
             C420 396 390 388 360 380
             C320 370 280 360 250 348
             C210 332 170 308 140 285
             Z"
          fill="url(#whaleBodyGrad)"
          stroke="url(#whaleLineGrad)"
          strokeWidth="1.8"
          filter="url(#glowFilter)"
          className={s.bodyPath}
        />

        {/* Dorsal fin */}
        <path
          d="M430 155 C420 120 435 85 455 70 C465 63 470 68 465 85 C460 100 455 130 450 152 Z"
          fill="url(#finGrad)"
          stroke="url(#whaleLineGrad)"
          strokeWidth="1.4"
          filter="url(#softGlow)"
        />

        {/* Pectoral fins */}
        <path
          d="M270 290 C240 310 210 340 195 370 C185 390 188 400 200 395 C218 388 240 360 265 330 C278 314 282 300 275 292 Z"
          fill="url(#finGrad)"
          stroke="url(#whaleLineGrad)"
          strokeWidth="1.2"
          filter="url(#softGlow)"
        />
        <path
          d="M500 310 C520 335 530 365 525 390 C522 405 515 408 508 400 C498 388 492 355 490 325 C488 310 492 304 500 310 Z"
          fill="url(#finGrad)"
          stroke="url(#whaleLineGrad)"
          strokeWidth="1.2"
          filter="url(#softGlow)"
        />

        {/* Tail flukes */}
        <path
          d="M610 325
             C635 315 665 295 680 270
             C690 252 682 240 668 248
             C654 256 638 275 625 295
             C620 288 618 270 625 252
             C632 234 628 222 614 228
             C600 234 590 258 592 285
             C593 300 600 316 610 325 Z"
          fill="url(#finGrad)"
          stroke="url(#whaleLineGrad)"
          strokeWidth="1.5"
          filter="url(#softGlow)"
        />

        {/* Bio-luminescent marking lines along body */}
        {[0,1,2,3,4,5,6,7,8,9].map((i) => (
          <line
            key={i}
            x1={180 + i * 42} y1={200 + i * 8}
            x2={175 + i * 42} y2={295 + i * 6}
            stroke="url(#whaleMarkGrad)"
            strokeWidth="0.8"
            strokeOpacity="0.55"
            filter="url(#softGlow)"
          />
        ))}

        {/* Belly glow stripe */}
        <ellipse
          cx="390" cy="330"
          rx="210" ry="55"
          fill="none"
          stroke="url(#whaleMarkGrad)"
          strokeWidth="1"
          strokeOpacity="0.3"
          filter="url(#softGlow)"
        />

        {/* Eye */}
        <circle cx="195" cy="225" r="7" fill="rgba(0,229,255,0.6)" filter="url(#glowFilter)" />
        <circle cx="195" cy="225" r="3.5" fill="rgba(255,255,255,0.85)" />
        <circle cx="196" cy="224" r="1.5" fill="rgba(0,10,30,0.9)" />

        {/* Constellation dots on whale body */}
        {constellationDots.map((dot, i) => (
          <circle
            key={i}
            cx={`${dot.cx}`} cy={`${dot.cy}`}
            r="3.5"
            fill="#18ffff"
            fillOpacity="0.85"
            filter="url(#glowFilter)"
            className={s.star}
            style={{ animationDelay: `${i * 0.28}s` }}
          />
        ))}

        {/* Constellation lines */}
        {lines.map(([a, b], i) => {
          const pa = constellationDots[a];
          const pb = constellationDots[b];
          return (
            <line
              key={i}
              x1={pa.cx} y1={pa.cy}
              x2={pb.cx} y2={pb.cy}
              stroke="rgba(24,255,255,0.35)"
              strokeWidth="0.7"
              strokeDasharray="3 5"
            />
          );
        })}
      </svg>

      {/* Surrounding jellyfish cluster (small ambient) */}
      <div className={s.surroundJellies} aria-hidden="true">
        {[
          { w:40, x:'8%',  y:'15%', color:'rgba(240,98,146,0.5)',  dur:7,  del:0 },
          { w:30, x:'88%', y:'20%', color:'rgba(0,229,255,0.5)',   dur:9,  del:1.5 },
          { w:50, x:'5%',  y:'60%', color:'rgba(179,136,255,0.5)', dur:8,  del:3 },
          { w:35, x:'90%', y:'65%', color:'rgba(0,229,255,0.45)',  dur:11, del:0.5 },
          { w:28, x:'50%', y:'5%',  color:'rgba(240,98,146,0.4)',  dur:6,  del:2 },
          { w:24, x:'78%', y:'80%', color:'rgba(179,136,255,0.4)', dur:10, del:4 },
        ].map((j, i) => (
          <div
            key={i}
            className={s.miniJelly}
            style={{
              left: j.x, top: j.y,
              width: j.w, height: j.w * 0.75,
              background: `radial-gradient(ellipse at 40% 30%, ${j.color}, transparent 75%)`,
              borderRadius: '50% 50% 35% 35%',
              border: `1px solid ${j.color}`,
              boxShadow: `0 0 ${j.w}px ${j.color}`,
              animationDuration: `${j.dur}s`,
              animationDelay: `${j.del}s`,
            }}
          />
        ))}
      </div>

      {/* Click ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className={s.ripple}
          style={{ left: r.x, top: r.y }}
        />
      ))}

      {/* Prompt */}
      <p className={s.prompt}>Touch the whale to feel its pulse</p>
    </div>
  );
}