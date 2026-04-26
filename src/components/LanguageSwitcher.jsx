import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(138, 43, 226, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        top: '2rem',
        right: i18n.language === 'ar' ? 'auto' : '2rem',
        left: i18n.language === 'ar' ? '2rem' : 'auto',
        zIndex: 1000,
        padding: '0.75rem 1.25rem',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '30px',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: i18n.language === 'ar' ? 'Inter' : 'Cairo'
      }}
    >
      {i18n.language === 'ar' ? 'English' : 'العربية'}
    </motion.button>
  );
}
