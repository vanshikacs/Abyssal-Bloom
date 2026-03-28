import { useState, useEffect, useCallback } from 'react';

export function useMouseParallax(strength = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handle = useCallback(
    (e) => {
      setOffset({
        x: (e.clientX / window.innerWidth  - 0.5) * strength,
        y: (e.clientY / window.innerHeight - 0.5) * strength,
      });
    },
    [strength]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, [handle]);

  return offset;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return progress;
}