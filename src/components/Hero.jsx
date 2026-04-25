import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import profileImage from '../assets/usof-ahmed.jpg';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel"
          style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', position: 'relative' }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            style={{ marginBottom: '2rem' }}
          >
            <img 
              src={profileImage} 
              alt="Usof Ahmed" 
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid rgba(0, 255, 255, 0.3)',
                boxShadow: '0 0 30px rgba(138, 43, 226, 0.4)',
                margin: '0 auto'
              }}
            />
          </motion.div>

          <motion.h1 
            className="text-gradient-thunder"
            style={{ fontSize: '4rem', marginBottom: '1rem' }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Usof Ahmed
          </motion.h1>
          <motion.h2 
            className="text-gradient-galaxy"
            style={{ fontSize: '2rem', marginBottom: '2rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Expert SEO Specialist
          </motion.h2>
          <motion.p 
            style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '3rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            As a data-driven SEO Specialist with 1+ year of experience, I transform websites from 
            digital assets into powerful, self-sustaining revenue engines. My expertise lies in
            moving beyond basic content creation to implement strategic technical SEO, build high-authority backlink profiles, and craft user-intent-focused content strategies that deliver measurable, profitable results.
          </motion.p>
          
          <motion.div 
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href="mailto:ahmedusof0@gmail.com" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'rgba(0, 255, 255, 0.1)', border: '1px solid var(--accent-cyan)', borderRadius: '30px', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0, 255, 255, 0.3)'; e.currentTarget.style.boxShadow = '0 0 15px var(--accent-cyan)' }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <Mail size={20} /> Email
            </a>
            <a 
              href="tel:+201023652688" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'rgba(138, 43, 226, 0.1)', border: '1px solid var(--accent-purple)', borderRadius: '30px', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(138, 43, 226, 0.3)'; e.currentTarget.style.boxShadow = '0 0 15px var(--accent-purple)' }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(138, 43, 226, 0.1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <Phone size={20} /> Call
            </a>
            <a 
              href="https://wa.me/201023652688" 
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25D366', borderRadius: '30px', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(37, 211, 102, 0.3)'; e.currentTarget.style.boxShadow = '0 0 15px #25D366' }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(37, 211, 102, 0.1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
            <a 
              href="https://www.linkedin.com/in/usof-ahmed-38215a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'rgba(10, 102, 194, 0.1)', border: '1px solid #0a66c2', borderRadius: '30px', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(10, 102, 194, 0.3)'; e.currentTarget.style.boxShadow = '0 0 15px #0a66c2' }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(10, 102, 194, 0.1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
