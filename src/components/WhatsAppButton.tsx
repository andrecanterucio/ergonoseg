import { useState } from 'react'
import { X } from 'lucide-react'

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true)

  const whatsappUrl = 'https://wa.me/5516996902000?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Ergonoseg.'

  return (
    <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 9999 }}>
      {/* Tooltip bubble */}
      {tooltip && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: 0,
          background: 'white',
          color: '#1b2d42',
          borderRadius: '12px',
          padding: '12px 16px',
          width: '220px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          fontSize: '0.85rem',
          lineHeight: 1.5,
          fontWeight: 500,
        }}>
          <button
            id="whatsapp-close-tooltip"
            onClick={() => setTooltip(false)}
            style={{
              position: 'absolute',
              top: '6px',
              right: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#9ca3af',
              padding: '2px',
              display: 'flex',
            }}
          >
            <X size={14} />
          </button>
          💬 Tire suas dúvidas pelo{' '}
          <strong style={{ color: '#25D366' }}>WhatsApp</strong>!<br />
          <span style={{ color: '#6b7280', fontSize: '0.78rem' }}>Respondemos em minutos.</span>

          {/* Arrow */}
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            right: '22px',
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid white',
          }} />
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        id="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        onClick={() => setTooltip(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          animation: 'pulse-green 2.5s ease-in-out infinite',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.12)'
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)'
        }}
      >
        <img src="/whatsapp.png" alt="WhatsApp" width="32" height="32" style={{ objectFit: 'contain' }} />
      </a>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
          50%       { box-shadow: 0 4px 30px rgba(37,211,102,0.85), 0 0 0 10px rgba(37,211,102,0.08); }
        }
      `}</style>
    </div>
  )
}
