import { useState, useEffect } from 'react';
import Scene3D from './components/Scene3D';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Scene3D />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <CaseStudies />
        <ProjectShowcase />
        <Contact />
      </div>
    </>
  );
}

export default App;
