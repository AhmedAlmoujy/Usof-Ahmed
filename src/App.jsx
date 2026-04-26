import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Scene3D from './components/Scene3D';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import LanguageSwitcher from './components/LanguageSwitcher';
import './index.css';

function App() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  if (!mounted) return null;

  return (
    <>
      <Scene3D />
      <LanguageSwitcher />
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
