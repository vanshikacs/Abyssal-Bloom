import s from './ReplayButton.module.css';

export default function ReplayButton() {
  return (
    <button
      className={s.btn}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Return to the surface — scroll to top"
      data-interactive
    >
      <span className={s.icon} aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 13V1M1 7l6-6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className={s.text}>Return to the Surface</span>
      <div className={s.halo} aria-hidden="true" />
    </button>
  );
}