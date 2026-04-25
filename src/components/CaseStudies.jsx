import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Electrical Appliances Website SEO Recovery',
    overview: 'Severe SEO disruption caused by a malicious freelancer. Major technical issues affecting product visibility.',
    challenges: ['Domain removed from GSC', 'Corrupted sitemaps', '300+ unindexed products', 'Traffic drop'],
    strategies: ['Reinstatement in GSC', 'URL architecture audit', 'New XML sitemap', 'Manual re-archiving'],
    results: [
      { label: 'New visitors', value: '+372%' },
      { label: 'Returning users', value: '197%' },
      { label: 'Clicks', value: '519 to 1300' },
      { label: 'Impressions', value: '14.7k to 65k' }
    ]
  },
  {
    title: 'Building Authority for a New Store in a Saturated Market',
    overview: 'SEO strategy for a new construction industry website with an identical brand name to 4 competitors.',
    challenges: ['Brand name saturation', 'Extreme market competition', 'Zero initial authority'],
    strategies: ['User-Intent Content', 'Internal Linking Architecture', 'High-Authority Backlinks', 'Content Credibility'],
    results: [
      { label: 'Search Impressions', value: '38,000' },
      { label: 'Targeted Clicks', value: '688' },
      { label: 'Avg Position', value: '16.6' },
      { label: 'Organic Visit Increase', value: '+48.7%' }
    ]
  },
  {
    title: 'Revitalizing an Herbal Store via User-Intent SEO',
    overview: 'Addressing SEO obstacles and aligning content with user intent for an established herbal store.',
    challenges: ['Technical SEO issues', 'Low search volume keywords', 'Weak product descriptions'],
    strategies: ['Intent-focused content plan', 'Improved product pages', 'Website reorganization', 'Manual indexing'],
    results: [
      { label: 'Total Sales (SAR)', value: '167k+' },
      { label: 'Sales Growth', value: '+89.5%' },
      { label: 'Organic Sessions', value: '+71.6%' },
      { label: 'Conversion Rate', value: '+19.8%' }
    ]
  },
  {
    title: 'Building an SEO Foundation for a Niche Sweets Store',
    overview: 'Improving visibility and organic performance for a dried sweets e-commerce site.',
    challenges: ['Unoptimized content', 'Unclear site structure', 'Weak backlink profile'],
    strategies: ['Keyword research', 'Homepage optimization', 'Category restructuring', 'Internal linking'],
    results: [
      { label: 'Keywords Ranked', value: '658 → 1,500' },
      { label: 'Referring Domains', value: '+166%' },
      { label: 'Organic Sessions', value: '+31.8%' },
      { label: 'Revenue from Organic', value: '+48.83%' }
    ]
  },
  {
    title: 'SEO Recovery for Motorcycle Accessories E-commerce',
    overview: 'Domain migration failure leading to zero organic presence for a new motorcycle store.',
    challenges: ['No GSC connection', 'No sitemap/indexing', 'Invisible product pages'],
    strategies: ['GSC Validation', 'Manual re-indexing', 'Product page optimization', 'Internal linking'],
    results: [
      { label: 'Clicks', value: '+1700' },
      { label: 'Impressions', value: '+112k' },
      { label: 'Returning customer', value: '52%' },
      { label: 'Revenue', value: '+237k' }
    ]
  }
];

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
          Proven Results
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
