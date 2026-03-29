import { useState, useCallback } from 'react';
import Loader           from './components/Loader';
import CustomCursor     from './components/CustomCursor';
import DepthProgressNav from './components/DepthProgressNav';
import ParticleField    from './components/ParticleField';

import HeroSection         from './sections/HeroSection';
import SurfaceSection      from './sections/SurfaceSection';
import ReefSection         from './sections/ReefSection';
import TwilightSection     from './sections/TwilightSection';
import JellyfishSection    from './sections/JellyfishSection';
import WhaleSection        from './sections/WhaleSection';
import AbyssSection        from './sections/AbyssSection';
import PreservationSection from './sections/PreservationSection';
import EndingSection       from './sections/EndingSection';

import { depthSections } from './data/content';
import './App.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleActive = useCallback((id) => setActiveSection(id), []);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <CustomCursor />

      {loaded && (
        <DepthProgressNav
          sections={depthSections}
          active={activeSection}
          onSetActive={handleActive}
        />
      )}

      {/* Global ambient particles — fixed layer behind everything */}
      {loaded && (
        <div style={{
          position: 'fixed', inset: 0,
          pointerEvents: 'none', zIndex: 1,
          overflow: 'hidden',
        }}>
          <ParticleField count={80} />
        </div>
      )}

      {/*
        NO depth-dividers between sections.
        Each section's own gradient bottom-blend creates seamless flow.
      */}
      <main className="main">
        <HeroSection         onVisible={handleActive} />
        <SurfaceSection      onVisible={handleActive} />
        <ReefSection         onVisible={handleActive} />
        <TwilightSection     onVisible={handleActive} />
        <JellyfishSection    onVisible={handleActive} />
        <WhaleSection        onVisible={handleActive} />
        <AbyssSection        onVisible={handleActive} />
        <PreservationSection onVisible={handleActive} />
        <EndingSection       onVisible={handleActive} />
      </main>
    </>
  );
}
