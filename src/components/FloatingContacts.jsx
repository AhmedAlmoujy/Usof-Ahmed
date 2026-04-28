import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContacts() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 1000,
    }}>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/201507517416"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          scale: { type: 'spring', stiffness: 260, damping: 20 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer',
          color: 'white',
          border: '2px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+201507517416"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, 10, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          scale: { type: 'spring', stiffness: 260, damping: 20, delay: 0.1 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
        whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--accent-purple)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(138, 43, 226, 0.4)',
          cursor: 'pointer',
          color: 'white',
          border: '2px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <Phone size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
