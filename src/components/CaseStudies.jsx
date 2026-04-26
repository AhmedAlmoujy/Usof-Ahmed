import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Card = ({ study, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel"
      style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: 'transform 0.3s ease' }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <h3 className="text-gradient-thunder" style={{ fontSize: '1.5rem' }}>{study.title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{study.overview}</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginTop: 'auto' }}>
        {study.results.map((result, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="text-gradient-galaxy" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{result.value}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{result.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function CaseStudies() {
  const { t } = useTranslation();
  const caseStudies = t('caseStudies', { returnObjects: true });

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,5,21,0.8))' }}>
      <div className="container">
        <motion.h2 
          className="text-gradient-thunder"
          style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('results.title')}
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {caseStudies.map((study, i) => (
            <Card key={i} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
