import { useEffect, useRef } from 'react';
import s from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const rafRef  = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover:none)').matches) return;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top  = ring.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dotRef.current?.classList.add(s.hover);
      ringRef.current?.classList.add(s.hover);
    };
    const onLeave = () => {
      dotRef.current?.classList.remove(s.hover);
      ringRef.current?.classList.remove(s.hover);
    };

    document.addEventListener('mousemove', move, { passive: true });
    document.querySelectorAll('a, button, [data-interactive]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={s.dot}  aria-hidden="true" />
      <div ref={ringRef} className={s.ring} aria-hidden="true" />
    </>
  );
}