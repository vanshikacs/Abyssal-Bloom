# Abyssal Bloom

> *An immersive scroll-driven descent into the living ocean.*

Built for the **Frontend Odyssey** challenge under the theme **Ocean Depths**.

---

## Overview

Abyssal Bloom is a visual journey, not a traditional webpage. As the user scrolls, the experience moves from the glowing ocean surface into progressively deeper underwater worlds — through layered motion, atmospheric transitions, and bioluminescent-inspired visuals.

Each section explores a different mood of the sea. The goal was to create something cinematic and emotionally immersive: a website that feels like exploring a living underwater world rather than reading static content.

---

## Built With

| Tool | Purpose |
|---|---|
| React | Component architecture |
| Vite | Build tooling |
| GSAP + ScrollTrigger | Scroll-driven animation |
| Framer Motion | Declarative motion |
| CSS Modules | Scoped, maintainable styles |

---

## Features

- **Scroll storytelling** — narrative descent triggered entirely by scroll position
- **Ocean zone transitions** — smooth atmospheric shifts across distinct depth layers
- **Bioluminescent visuals** — glow effects, deep-sea color palette, layered light
- **Fluid pacing** — no harsh breaks; every scene flows seamlessly into the next
- **Responsive** — desktop, tablet, and mobile without compromising the feel
- **Reusable components** — clean React structure that's easy to extend

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/abyssal-bloom
cd abyssal-bloom

# Install dependencies
npm install

# Start the development server
npm run dev
```

**Production build:**

```bash
npm run build     # Build for production
npm run preview   # Preview the build locally
```

---

## Project Structure

```
src/
├── components/   # Shared UI and animated building blocks
├── sections/     # Each ocean zone as its own section module
├── hooks/        # Custom scroll and animation hooks
├── data/         # Content and configuration
├── styles/       # Global tokens, resets, CSS Modules
└── assets/       # Visual assets and static media
```

The project is organized into reusable components and section-based layouts for cleaner structure and easier scaling.

---

## Design Direction

The visual direction of Abyssal Bloom is centered around six principles:

- **Bioluminescent light** — glowing organic forms drawn from the deep sea
- **Cinematic transitions** — slow, weighted movement between zones
- **Continuous descent** — the user always feels like they are going deeper
- **Layered depth** — overlapping elements and parallax to simulate volume
- **Elegant typography** — refined type choices that feel oceanic and still
- **Deep-sea palette** — teal, midnight blue, and phosphorescent greens

A lot of focus went into making the experience feel seamless — no abrupt cuts, no jarring resets. The user moves naturally from one underwater world to the next.

---

## Deployment

This project deploys to any static hosting platform.

**Vercel**
- Build command: `npm run build`
- Output directory: `dist`

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

---

## What This Explores

Abyssal Bloom is a study in using frontend design as a storytelling medium — not just through layout, but through motion, atmosphere, pacing, and interaction. It was built to answer one question: *what does it feel like to descend into the ocean?*

---

*If you visited the project — thank you for exploring it.*