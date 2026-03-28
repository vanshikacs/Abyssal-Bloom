import s from './SectionHeader.module.css';

export default function SectionHeader({ eyebrow, title, titleItalic, lead, align = 'left', light = false }) {
  return (
    <header className={`${s.header} ${s[align]} ${light ? s.light : ''}`}>
      {eyebrow && <p className={`${s.eyebrow} eyebrow reveal d1`}>{eyebrow}</p>}
      <h2 className={`${s.title} section-title reveal d2`}>
        {title}
        {titleItalic && (
          <>
            <br />
            <em>{titleItalic}</em>
          </>
        )}
      </h2>
      {lead && <p className={`${s.lead} section-lead reveal d3`}>{lead}</p>}
    </header>
  );
}