import s from './GlowOrbLayer.module.css';

export default function GlowOrbLayer({ orbs }) {
  return (
    <div className={s.layer} aria-hidden="true">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={s.orb}
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.w,
            height: orb.w,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            animationDuration: `${orb.dur ?? 20}s`,
            animationDelay: `${orb.delay ?? 0}s`,
            filter: `blur(${orb.blur ?? 70}px)`,
          }}
        />
      ))}
    </div>
  );
}