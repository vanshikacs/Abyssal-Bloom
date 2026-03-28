import { useEffect, useRef } from 'react';
import { randomBetween, prefersReducedMotion } from '../utils/helpers';

const COLOR_PALETTE = [
  [0, 229, 255],    // cyan
  [124, 77, 255],   // violet
  [255, 64, 129],   // magenta
  [179, 136, 255],  // lavender
  [255, 255, 255],  // white
  [0, 188, 212],    // aqua
  [105, 255, 218],  // mint
];

export default function ParticleField({ count = 90, style = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles = Array.from({ length: count }, () => {
      const rgb = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + randomBetween(0, canvas.height),
        size:    randomBetween(0.4, 2.8),
        speedY:  randomBetween(0.15, 0.85),
        speedX:  randomBetween(-0.25, 0.25),
        opacity: randomBetween(0.08, 0.65),
        wobble:  Math.random() * Math.PI * 2,
        wobbleSpeed: randomBetween(0.008, 0.022),
        isBubble: Math.random() < 0.13,
        rgb,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.speedY;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.45 + p.speedX;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        ctx.save();
        if (p.isBubble) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${p.rgb.join(',')},${p.opacity * 0.55})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.rgb.join(',')},${p.opacity})`;
          ctx.shadowBlur = 7;
          ctx.shadowColor = `rgba(${p.rgb.join(',')},0.5)`;
          ctx.fill();
        }
        ctx.restore();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
        ...style,
      }}
    />
  );
}