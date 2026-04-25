import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Import all png images from the drive_images folder dynamically
const images = import.meta.glob('../assets/drive_images/**/*.png', { eager: true, import: 'default' });
const imageUrls = Object.values(images);

export default function ResultsGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  if (imageUrls.length === 0) return null;

  return (
    <>
      <section className="section" style={{ background: 'var(--bg-deep-space)', overflow: 'hidden' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 className="text-gradient-thunder" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Real Performance Metrics
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              A glimpse into the actual Google Analytics and Search Console data that drives our success.
            </p>
          </motion.div>
        </div>

        {/* Infinite Carousel */}
        <div style={{ position: 'relative', display: 'flex', overflow: 'hidden', padding: '2rem 0', background: 'rgba(10,5,21,0.5)', borderTop: '1px solid rgba(138,43,226,0.2)', borderBottom: '1px solid rgba(138,43,226,0.2)' }}>
          <motion.div
            style={{ display: 'flex', gap: '2rem', paddingLeft: '2rem' }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 100, // Slowed down from 40 to 100
              repeat: Infinity 
            }}
          >
            {/* Double the array for seamless infinite scroll */}
            {[...imageUrls, ...imageUrls].map((url, i) => (
              <motion.div 
                key={i} 
                className="glass-panel" 
                style={{ 
                  minWidth: '350px', 
                  height: '220px', 
                  padding: '0.5rem', 
                  borderRadius: '12px',
                  flexShrink: 0,
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(url)}
              >
                <img 
                  src={url} 
                  alt="Performance Graphic" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    borderRadius: '8px',
                    opacity: 0.85,
                    transition: 'opacity 0.3s ease'
                  }} 
                  onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                  onMouseOut={(e) => e.currentTarget.style.opacity = 0.85}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
              background: 'rgba(5, 5, 16, 0.95)',
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
                right: '2rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                zIndex: 10000
              }}
              whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Enlarged Performance Graphic"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 255, 255, 0.25)',
                border: '1px solid rgba(138, 43, 226, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
