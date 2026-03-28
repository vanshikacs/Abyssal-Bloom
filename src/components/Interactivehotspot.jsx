import { useState } from 'react';
import s from './InteractiveHotspot.module.css';

export default function InteractiveHotspot({ tag, name, depth, fact, glowColor, delay = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${s.hotspot} ${open ? s.open : ''} reveal`}
      style={{ transitionDelay: `${delay}s`, '--glow': glowColor }}
      onClick={() => setOpen(!open)}
      data-interactive
      role="button"
      aria-expanded={open}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
    >
      <div className={s.glowOrb} aria-hidden="true" />

      <div className={s.top}>
        <div>
          <p className={s.tag}>{tag}</p>
          <h3 className={s.name}>{name}</h3>
        </div>
        <div className={s.depthBadge}>{depth}</div>
        <div className={`${s.chevron} ${open ? s.chevronOpen : ''}`} aria-hidden="true">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className={s.factWrap}>
        <p className={s.fact}>{fact}</p>
      </div>

      <p className={s.hint}>{open ? 'Tap to close' : 'Tap to reveal'} ↓</p>
    </div>
  );
}