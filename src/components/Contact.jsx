import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="section" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{ padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(0, 255, 255, 0.05))', border: '1px solid rgba(0, 255, 255, 0.2)' }}
        >
          <h2 className="text-gradient-thunder" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('contact.title')}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            {t('contact.subtitle')}
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a 
              href="mailto:ahmedusof0@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent-cyan)' }}>
                <Mail size={24} color="var(--accent-cyan)" />
              </div>
              <span style={{ fontSize: '0.9rem' }}>ahmedusof0@gmail.com</span>
            </motion.a>
 
            <motion.a 
              href="tel:+201023652688"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(138, 43, 226, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent-purple)' }}>
                <Phone size={24} color="var(--accent-purple)" />
              </div>
              <span style={{ fontSize: '0.9rem' }}>+20 10 23652688</span>
            </motion.a>
          </div>
        </motion.div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} {t('contact.copy')}
        </div>
      </div>
    </section>
  );
}
