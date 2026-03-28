// ─── Reef Cards ─────────────────────────────────
export const reefCards = [
  {
    id: 'coral',
    icon: '🪸',
    title: 'The Coral Architects',
    text: 'Coral reefs span less than 1% of the ocean floor yet shelter 25% of all marine life. Cathedrals built grain by grain across ten thousand years.',
    badge: 'Epipelagic Zone',
    glow: 'var(--coral-pink)',
  },
  {
    id: 'fish',
    icon: '🐠',
    title: 'A Thousand Languages',
    text: 'Every colour worn by a reef fish is a sentence. Territory. Desire. Warning. Invitation. Here, beauty is never decoration — it is survival.',
    badge: '0 – 200 m',
    glow: 'var(--gold)',
  },
  {
    id: 'light',
    icon: '☀️',
    title: 'The Last of Light',
    text: 'Below 200 metres, red wavelengths vanish first. Then orange. Then yellow. To descend is to lose the sun one colour at a time.',
    badge: 'Photic Zone',
    glow: 'var(--aqua)',
  },
];

// ─── Twilight Creatures ──────────────────────────
export const twilightCreatures = [
  {
    id: 'lanternfish',
    name: 'The Lanternfish',
    tag: 'Myctophidae · Bioluminescent',
    depth: '200 – 1,000 m',
    glowColor: 'rgba(100,255,200,0.35)',
    fact: 'Perhaps the most numerous vertebrate on Earth. Each night they ascend hundreds of metres to feed, wearing chains of glowing photophores like living constellations. By dawn, they dissolve back into the dark.',
  },
  {
    id: 'glass-squid',
    name: 'The Glass Squid',
    tag: 'Cranchia scabra · Transparent',
    depth: '500 – 2,000 m',
    glowColor: 'rgba(180,100,255,0.35)',
    fact: 'Almost entirely transparent — its organs visible through its body like watercolour suspended in glass. When threatened, it flashes violet and silver, becoming briefly brilliant before vanishing into twilight.',
  },
  {
    id: 'siphonophore',
    name: 'The Siphonophore',
    tag: 'Colony Organism · 40 m+',
    depth: '700 – 1,500 m',
    glowColor: 'rgba(255,100,180,0.35)',
    fact: 'Not one creature but thousands — a colonial superorganism stretching up to 40 metres, the longest animal on Earth. Each individual has forgotten how to exist alone. Together they form a single luminous intelligence.',
  },
];

// ─── Twilight story steps ────────────────────────
export const twilightSteps = [
  {
    num: 'Chapter I',
    title: 'The Fading',
    text: 'As sunlight thins to a memory, the ocean holds its breath. Creatures here live between two worlds — too deep for warmth, too shallow for true dark.',
  },
  {
    num: 'Chapter II',
    title: 'Ghost Shapes',
    text: 'Silhouettes drift past like thoughts half-remembered. The lanternfish wears a string of lights along its belly — small suns it carries alone.',
  },
  {
    num: 'Chapter III',
    title: 'First Glow',
    text: 'Here life invents its own light. Not reflected, not borrowed — created. This is where the ocean first learned to dream in neon.',
  },
];

// ─── Jellyfish data ──────────────────────────────
export const jellyfishData = [
  {
    id: 'jelly-a',
    x: '7%', y: '10%',
    w: 110, h: 84,
    bellColor: 'rgba(0,229,255,0.55)',
    rimColor:  'rgba(61,90,254,0.4)',
    glowColor: 'rgba(0,229,255,0.3)',
    tentColor: 'rgba(0,229,255,0.5)',
    duration: 8, delay: 0,
    name: 'Moon Jellyfish',
    hearts: false,
  },
  {
    id: 'jelly-b',
    x: '70%', y: '6%',
    w: 180, h: 136,
    bellColor: 'rgba(240,98,146,0.55)',
    rimColor:  'rgba(179,136,255,0.45)',
    glowColor: 'rgba(255,64,129,0.28)',
    tentColor: 'rgba(179,136,255,0.55)',
    duration: 11, delay: 2,
    name: 'Phantom Medusa',
    hearts: true,
  },
  {
    id: 'jelly-c',
    x: '4%', y: '52%',
    w: 90, h: 68,
    bellColor: 'rgba(124,77,255,0.6)',
    rimColor:  'rgba(0,188,212,0.38)',
    glowColor: 'rgba(124,77,255,0.35)',
    tentColor: 'rgba(124,77,255,0.5)',
    duration: 9, delay: 4,
    name: 'Violet Drifter',
    hearts: false,
  },
  {
    id: 'jelly-d',
    x: '75%', y: '50%',
    w: 72, h: 54,
    bellColor: 'rgba(0,229,255,0.48)',
    rimColor:  'rgba(0,188,212,0.32)',
    glowColor: 'rgba(0,188,212,0.25)',
    tentColor: 'rgba(0,229,255,0.42)',
    duration: 13, delay: 1,
    name: 'Sea Spirit',
    hearts: false,
  },
  {
    id: 'jelly-e',
    x: '30%', y: '28%',
    w: 210, h: 158,
    bellColor: 'rgba(24,255,255,0.42)',
    rimColor:  'rgba(124,77,255,0.38)',
    glowColor: 'rgba(24,255,255,0.22)',
    tentColor: 'rgba(24,255,255,0.45)',
    duration: 10, delay: 3,
    name: 'Empress of the Deep',
    hearts: true,
  },
  {
    id: 'jelly-f',
    x: '52%', y: '65%',
    w: 65, h: 48,
    bellColor: 'rgba(255,64,129,0.52)',
    rimColor:  'rgba(240,98,146,0.38)',
    glowColor: 'rgba(255,64,129,0.28)',
    tentColor: 'rgba(255,128,171,0.48)',
    duration: 7, delay: 5.5,
    name: 'Rose Specter',
    hearts: true,
  },
  {
    id: 'jelly-g',
    x: '88%', y: '30%',
    w: 55, h: 42,
    bellColor: 'rgba(179,136,255,0.55)',
    rimColor:  'rgba(124,77,255,0.4)',
    glowColor: 'rgba(179,136,255,0.28)',
    tentColor: 'rgba(179,136,255,0.45)',
    duration: 12, delay: 1.5,
    name: 'Lavender Wraith',
    hearts: false,
  },
];

// ─── Preservation stats ──────────────────────────
export const preservationStats = [
  { value: 80,  suffix: '%',  label: 'Ocean Unexplored',      note: 'We know more about the lunar surface' },
  { value: 50,  suffix: '%',  label: 'Coral Lost Since 1950', note: 'Half of Earth\'s coral garden, silenced' },
  { value: 8,   suffix: 'M+', label: 'Tonnes Plastic Yearly', note: 'Entering the ocean every year' },
  { value: 94,  suffix: '%',  label: 'Species Still Unknown',  note: 'Most ocean life remains unnamed' },
];

// ─── Depth nav labels ────────────────────────────
export const depthSections = [
  { id: 'hero',         label: 'Surface',          meter: '0 m' },
  { id: 'surface',      label: 'Crossing',          meter: '10 m' },
  { id: 'reef',         label: 'Sunlit Reef',       meter: '200 m' },
  { id: 'twilight',     label: 'Twilight',          meter: '1,000 m' },
  { id: 'jellyfish',    label: 'Bioluminescence',   meter: '2,000 m' },
  { id: 'whale',        label: 'Cathedral',         meter: '3,000 m' },
  { id: 'abyss',        label: 'Abyss',             meter: '4,000 m' },
  { id: 'preservation', label: 'Protect',           meter: '—' },
  { id: 'ending',       label: 'Return',            meter: '↑' },
];