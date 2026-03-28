export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
export const mapRange = (v, iMin, iMax, oMin, oMax) =>
  ((v - iMin) / (iMax - iMin)) * (oMax - oMin) + oMin;
export const randomBetween = (min, max) => Math.random() * (max - min) + min;
export const randomInt = (min, max) => Math.floor(randomBetween(min, max + 1));
export const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768;
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;