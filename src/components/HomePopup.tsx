import { useState, useEffect } from 'react'

const VAGA_URL = 'https://www.sympla.com.br/evento/curso-pericia-e-assistencia-tecnica-em-ergonomia/3547526?token=2c2a2bf5b020138bcb3a7cfc25c9b6a4'
const EXPIRY_DATE = new Date('2026-10-18T03:00:00Z') // fim do dia 17/10/2026 (Brasília)
const SESSION_KEY = 'popup_shown_pericia_ergonomia'

export default function HomePopup() {
  const isExpired = new Date() >= EXPIRY_DATE
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isExpired) return
    if (sessionStorage.getItem(SESSION_KEY)) return

    const timer = setTimeout(() => {
      setVisible(true)
      sessionStorage.setItem(SESSION_KEY, '1')
    }, 1500)

    return () => clearTimeout(timer)
  }, [isExpired])

  if (isExpired || !visible) return null

  return (
    <div
      onClick={() => setVisible(false)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'popupFadeIn 0.3s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '520px',
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'white',
        }}
      >
        <button
          onClick={() => setVisible(false)}
          aria-label="Fechar"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '32px',
            height: '32px',
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        <a
          href={VAGA_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block' }}
        >
          <img
            src="/images/banner-pericia-ergonomia.webp"
            alt="Curso Perícia e Assistência Técnica em Ergonomia — Garanta sua vaga"
            style={{ width: '100%', display: 'block' }}
          />
        </a>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <a
            href={VAGA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>

      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
