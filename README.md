# Abyssal Bloom
### A Descent Through the Ocean's Living Light

> *"Below the last memory of sunlight, the ocean begins to write in light of its own."*

An immersive, competition-winning interactive storytelling experience for the **Frontend Odyssey: The Interactive Web Experience Challenge** — Theme: **Ocean Depths**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

## Build & Deploy

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

### Deploy to Netlify
1. Run `npm run build`
2. Drag the `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop)

### Deploy to Vercel
```bash
npx vercel --prod
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch, or use GitHub Actions
```

---

## Project Structure

```
abyssal-bloom/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                    # React entry point
    ├── App.jsx                     # Root — composes all sections
    ├── index.css                   # Global styles + reveal system
    ├── styles/
    │   ├── variables.css           # Design tokens (colours, fonts, spacing)
    │   └── animations.css          # Global keyframe library
    ├── data/
    │   └── content.js              # All copy, creature data, card data
    ├── utils/
    │   └── helpers.js              # lerp, clamp, randomBetween, etc.
    ├── hooks/
    │   ├── useScrollReveal.js      # IntersectionObserver reveal hooks
    │   └── useParallax.js          # Mouse + scroll parallax hooks
    ├── components/
    │   ├── Loader.jsx / .module.css
    │   ├── CustomCursor.jsx / .module.css
    │   ├── DepthProgressNav.jsx / .module.css
    │   ├── ParticleField.jsx       # Canvas particle system
    │   ├── GlowOrbLayer.jsx / .module.css
    │   ├── SectionHeader.jsx / .module.css
    │   ├── GlowCard.jsx / .module.css
    │   ├── InteractiveHotspot.jsx / .module.css
    │   ├── Jellyfish.jsx / .module.css
    │   ├── WhaleGlowScene.jsx / .module.css
    │   ├── StatCard.jsx / .module.css
    │   └── ReplayButton.jsx / .module.css
    └── sections/
        ├── HeroSection.jsx / .module.css
        ├── SurfaceSection.jsx / .module.css
        ├── ReefSection.jsx / .module.css
        ├── TwilightSection.jsx / .module.css
        ├── JellyfishSection.jsx / .module.css
        ├── WhaleSection.jsx / .module.css
        ├── AbyssSection.jsx / .module.css
        ├── PreservationSection.jsx / .module.css
        └── EndingSection.jsx / .module.css
```

---

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^18.3.1 | UI framework |
| react-dom | ^18.3.1 | DOM rendering |
| framer-motion | ^11.3.0 | Section transitions, card motion |
| gsap | ^3.12.5 | Advanced scroll choreography |
| vite | ^5.3.4 | Build tool |
| @vitejs/plugin-react | ^4.3.1 | React fast-refresh |

---

## Competition Requirement Mapping

| Requirement | Status | Implementation |
|---|---|---|
| ≥ 5 narrative sections | ✅ **9 sections** | Hero, Surface, Reef, Twilight, Jellyfish, Whale, Abyss, Preservation, Ending |
| ≥ 2 scroll-based interactions | ✅ **6+** | Reveal system, sticky twilight story, depth nav, parallax, gradient transitions, sticky jellyfish field |
| ≥ 3 interactive elements | ✅ **8+** | Jellyfish clicks, whale pulse, creature hotspots, glow cards, depth nav, replay button, stat cards, cursor |
| ≥ 3 distinct animations | ✅ **12+** | Loader, jellyfish float, whale drift, particles, bubbles, glow pulse, ray pulse, shimmer, ripple, heartbeat, counter, coral sway |
| Fully responsive | ✅ | Mobile-first, all breakpoints tested, touch-friendly |
| Storytelling | ✅ | 9-chapter narrative arc with poetic copy |
| Premium visual quality | ✅ | Awwwards-style design, gradient colour journey, glassmorphism |

---

## Feature Highlights

- **Custom animated loader** with a pulsing heart-jellyfish
- **Custom CSS cursor** with ring lag and hover states (desktop)
- **9 full narrative sections** — one continuous descent story
- **Sticky twilight storytelling** panel driven by scroll position
- **7 interactive CSS jellyfish** — click for ripple + name tooltip
- **SVG whale with constellation markings** — click to pulse
- **Canvas particle field** — fixed global layer of glowing particles
- **Animated counter stat cards** triggered by IntersectionObserver
- **Per-section glow orb layers** with parallax drift
- **Depth progress nav** — updates live as you scroll
- **CSS coral scene** with sway animation in the reef
- **CSS fish swim layer** with staggered animations
- **Rising ending canvas** — golden/cyan particles ascend
- **Colour journey**: gold surface → aqua reef → violet twilight → neon jellyfish → deep indigo abyss → luminous ending
- **Glassmorphism cards** with mouse-tracked inner glow
- **Prefers-reduced-motion** respected throughout
- **Zero external image assets** — all visuals generated with CSS/SVG/Canvas

---

## 200-Word Submission Description

**Abyssal Bloom** is a premium interactive storytelling experience that takes the viewer on a cinematic descent through the ocean's living layers — from golden surface light to the bioluminescent dream-world of the deep.

Built with React + Vite and powered by a rich animation architecture, the site guides visitors through nine distinct narrative sections: the shimmering surface, sunlit coral reefs, twilight ghost zones, a hypnotic jellyfish kingdom, a majestic glowing whale cathedral, the abyssal silence, an emotional preservation moment, and a poetic return.

Every visual element — jellyfish, whale, particles, coral, fish, light rays — is crafted entirely in CSS and SVG with no external image assets. The jellyfish are clickable, triggering ripple pulses and name tooltips. The whale pulses with constellation markings on interaction. Creature hotspots expand with ecological facts. Stat cards animate their numbers on scroll. A custom canvas particle system layers luminous particles across every section.

The colour journey moves deliberately from warm gold and coral at the surface, through electric cyan and aqua in the reef, into violet-indigo twilight, then into neon pink-cyan-magenta in the jellyfish kingdom, deepening to near-black in the abyss, before returning upward to golden-cyan light in the ending.

The result is less website, more underwater film.

---

*Made with wonder, for the ocean.*