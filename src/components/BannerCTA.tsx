import { ArrowRight, Shield } from 'lucide-react'

export default function BannerCTA() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #1a5c38 0%, #165230 50%, #0f3d27 100%)',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', right: '-60px', top: '-60px',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.07)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '-40px', bottom: '-40px',
        width: '200px', height: '200px',
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.1)',
        pointerEvents: 'none',
      }} />
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '40px',
        alignItems: 'center',
      }} className="cta-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Shield size={28} color="rgba(255,255,255,0.9)" />
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Proteção que você merece
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: '12px',
          }}>
            Regularize sua empresa hoje.<br />
            Evite multas e proteja seus colaboradores.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.6 }}>
            A fiscalização do Ministério do Trabalho não avisa quando vai. Garanta que sua empresa está em conformidade com todas as NRs.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
          <a
            href="#contato"
            id="banner-cta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'white',
              color: '#1a5c38',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '16px 32px',
              borderRadius: '50px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)'
            }}
          >
            Solicitar Orçamento Gratuito
            <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            id="banner-cta-whatsapp"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'transparent',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '12px 24px',
              borderRadius: '50px',
              border: '2px solid rgba(255,255,255,0.4)',
              textDecoration: 'none',
              transition: 'background 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
            }}
          >
            💬 Falar pelo WhatsApp
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 740px) {
          .cta-grid { grid-template-columns: 1fr !important; text-align: center; }
          .cta-grid > div:last-child { align-items: center; display: flex; flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
