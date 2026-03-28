import { useRef } from 'react';
import s from './GlowCard.module.css';

export default function GlowCard({ icon, title, text, badge, glowColor = 'var(--cyan)', delay = 0, onClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    cardRef.current.style.setProperty('--mx', x + '%');
    cardRef.current.style.setProperty('--my', y + '%');
  };

  return (
    <article
      ref={cardRef}
      className={`${s.card} reveal`}
      style={{ transitionDelay: `${delay}s`, '--glow': glowColor }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      data-interactive
    >
      <div className={s.scanline} aria-hidden="true" />
      <div className={s.glowSpot} aria-hidden="true" />

      {icon && <span className={s.icon} aria-hidden="true">{icon}</span>}
      <h3 className={s.title}>{title}</h3>
      <p  className={s.text}>{text}</p>
      {badge && <span className={s.badge}>{badge}</span>}
    </article>
  );
}