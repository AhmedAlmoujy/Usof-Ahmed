import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Folder } from 'lucide-react';

const pngImages = import.meta.glob('../assets/drive_images/**/*.png', { eager: true, import: 'default' });
const jpegImages = import.meta.glob('../assets/drive_images/**/*.jpeg', { eager: true, import: 'default' });
const jpgImages = import.meta.glob('../assets/drive_images/**/*.jpg', { eager: true, import: 'default' });
const allImages = { ...pngImages, ...jpegImages, ...jpgImages };

// Group images by folder
const projectData = {};
Object.entries(allImages).forEach(([path, url]) => {
  const parts = path.split('/');
  const rawProjectName = parts[3]; 
  if (rawProjectName) {
    const words = rawProjectName.split(' ');
    const projectName = words.length > 2 ? words.slice(0, 2).join(' ') : rawProjectName;
    
    if (!projectData[projectName]) {
      projectData[projectName] = [];
    }
    projectData[projectName].push(url);
  }
});

let projectNames = Object.keys(projectData);

// Custom sorting: Beauty Store first, Sweets Store second, then alphabetically
projectNames.sort((a, b) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  
  if (aLower.includes('beauty')) return -1;
  if (bLower.includes('beauty')) return 1;
  if (aLower.includes('sweet')) return -1;
  if (bLower.includes('sweet')) return 1;
  
  return aLower.localeCompare(bLower);
});

export default function ProjectShowcase() {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeProject, setActiveProject] = useState(projectNames[0]);

  if (projectNames.length === 0) return null;

  const formatProjectName = (name) => {
    // If Arabic, we might want to keep the name as is or provide a mapping
    // For now, let's just capitalize/replace for EN and keep it clean for both
    return name.replace(/-/g, ' ');
  };

  return (
    <section className="section" style={{ background: 'var(--bg-deep-space)', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="text-gradient-thunder" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            {t('projects.title')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Project Navigation (Horizontal Row) */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '1rem', 
            overflowX: 'auto', 
            paddingBottom: '1rem',
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--accent-purple) transparent',
            WebkitOverflowScrolling: 'touch'
          }}>
            {projectNames.map((name) => (
              <motion.button
                key={name}
                onClick={() => setActiveProject(name)}
                style={{
                  padding: '0.75rem 1.25rem',
                  background: activeProject === name ? 'rgba(138, 43, 226, 0.2)' : 'rgba(15, 10, 30, 0.4)',
                  border: `1px solid ${activeProject === name ? 'var(--accent-cyan)' : 'rgba(138, 43, 226, 0.2)'}`,
                  borderRadius: '12px',
                  color: activeProject === name ? 'var(--accent-cyan)' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize',
                  fontSize: '0.95rem',
                  fontWeight: activeProject === name ? '600' : '400',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                whileHover={{ y: -3, background: 'rgba(138, 43, 226, 0.15)' }}
              >
                <Folder size={18} color={activeProject === name ? 'var(--accent-cyan)' : 'var(--accent-purple)'} />
                {formatProjectName(name)}
              </motion.button>
            ))}
          </div>

          {/* Project Images Grid */}
          <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-gradient-galaxy" style={{ fontSize: '2rem', marginBottom: '2rem', textTransform: 'capitalize' }}>
                  {formatProjectName(activeProject)} {t('projects.performance')}
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  {projectData[activeProject].map((url, i) => (
                    <motion.div
                      key={i}
                      style={{ 
                        borderRadius: '12px', 
                        overflow: 'hidden', 
                        cursor: 'pointer', 
                        aspectRatio: '16/9',
                        border: '1px solid rgba(138, 43, 226, 0.1)',
                        background: 'rgba(0,0,0,0.3)'
                      }}
                      whileHover={{ scale: 1.03, borderColor: 'var(--accent-cyan)' }}
                      onClick={() => setSelectedImage(url)}
                    >
                      <img 
                        src={url} 
                        alt={`${activeProject} ${i}`} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(3, 0, 8, 0.98)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              style={{
                position: 'absolute',
                top: '2rem',
                right: i18n.language === 'ar' ? 'auto' : '2rem',
                left: i18n.language === 'ar' ? '2rem' : 'auto',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer'
              }}
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '12px', border: '1px solid var(--accent-purple)' }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
