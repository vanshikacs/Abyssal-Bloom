import { useEffect } from 'react';
import { useSectionActive } from '../hooks/useScrollReveal';
import s from './DepthProgressNav.module.css';

export default function DepthProgressNav({ sections, active, onSetActive }) {
  useSectionActive(sections.map((sec) => sec.id), onSetActive);

  return (
    <nav className={s.nav} aria-label="Depth navigation">
      <div className={s.line} aria-hidden="true" />
      {sections.map((sec, i) => (
        <div key={sec.id} className={s.item}>
          <button
            className={`${s.dot} ${active === sec.id ? s.active : ''}`}
            onClick={() => {
              document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label={`Navigate to ${sec.label}`}
            data-interactive
          />
          <span className={s.label}>
            <span className={s.labelName}>{sec.label}</span>
            <span className={s.labelDepth}>{sec.meter}</span>
          </span>
          {i < sections.length - 1 && <div className={s.connector} aria-hidden="true" />}
        </div>
      ))}
    </nav>
  );
}