import { useState, useEffect } from 'react'
import { ArrowRight, MessageCircle, CheckCircle, Shield } from 'lucide-react'

const videoSrc = '/Video_Ergonoseg.mp4'

const dynamicPhrases = [
  'Conformidade que salva vidas.',
  'Laudos técnicos com precisão.',
  'Proteção real para quem trabalha.',
]

const badges = [
  'PGR & PCMSO',
  'Ergonomia NR-17',
  'Prevenção de Incêndio',
  'Laudos Técnicos',
  'Treinamentos NR',
]

const stats = [
  { value: '500+', label: 'Empresas atendidas' },
  { value: '15+', label: 'Anos de experiência' },
  { value: '100%', label: 'Conformidade legal' },
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setPhraseIndex(i => (i + 1) % dynamicPhrases.length)
        setVisible(true)
      }, 400)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#0a2818',
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.32,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark green overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, rgba(8,32,18,0.90) 0%, rgba(15,61,39,0.80) 55%, rgba(6,24,14,0.94) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '860px',
        margin: '0 auto',
        padding: '140px 24px 100px',
        width: '100%',
        textAlign: 'center',
      }}>

        {/* Badge */}
        <div style={{ marginBottom: '28px' }} className="animate-fade-in">
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.22)',
            color: 'rgba(255,255,255,0.92)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            padding: '7px 20px',
            borderRadius: '50px',
          }}>
            <Shield size={13} />
            Assessoria em Segurança do Trabalho
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up" style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          color: 'white',
          marginBottom: '20px',
          letterSpacing: '-0.03em',
        }}>
          Proteja sua empresa.<br />
          <span style={{
            color: '#6ee9a7',
            display: 'inline-block',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            {dynamicPhrases[phraseIndex]}
          </span>
        </h1>

        {/* Description */}
        <p className="animate-fade-in delay-200" style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
          color: 'rgba(255,255,255,0.78)',
          lineHeight: 1.75,
          maxWidth: '660px',
          margin: '0 auto 36px',
        }}>
          A <strong style={{ color: 'white' }}>Ergonoseg</strong> entrega PGR, PCMSO, laudos técnicos e treinamentos normativos — garantindo conformidade com o Ministério do Trabalho e um ambiente de trabalho seguro para os seus colaboradores.
        </p>

        {/* Service badges */}
        <div className="animate-fade-in delay-300" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '44px',
        }}>
          {badges.map(b => (
            <span key={b} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.82)',
              fontSize: '0.8rem',
              fontWeight: 500,
              padding: '5px 13px',
              borderRadius: '50px',
            }}>
              <CheckCircle size={11} color="#4ade80" />
              {b}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-fade-in delay-400" style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '80px',
        }}>
          <a href="#contato" className="btn-primary animate-pulse-btn" id="hero-cta-primary">
            Solicitar Orçamento Gratuito
            <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Ergonoseg."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="hero-cta-whatsapp"
          >
            <MessageCircle size={18} />
            Falar pelo WhatsApp
          </a>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in delay-500" style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          borderTop: '1px solid rgba(255,255,255,0.14)',
          paddingTop: '40px',
          gap: '0',
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              flex: '1',
              minWidth: '140px',
              textAlign: 'center',
              padding: '0 32px',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.14)' : 'none',
            }}>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
