import { useEffect, useRef, useState } from 'react'
import { Award, Clock, Building2, ThumbsUp } from 'lucide-react'

const stats = [
  { icon: Building2, value: 500, suffix: '+', label: 'Empresas Atendidas', sub: 'em todo o Brasil' },
  { icon: Clock, value: 15, suffix: '+', label: 'Anos de Experiência', sub: 'no mercado de SST' },
  { icon: Award, value: 100, suffix: '%', label: 'Conformidade Legal', sub: 'nas auditorias' },
  { icon: ThumbsUp, value: 98, suffix: '%', label: 'Satisfação dos Clientes', sub: 'taxa de retenção' },
]

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function StatCard({ stat, active, index }: { stat: typeof stats[0]; active: boolean; index: number }) {
  const Icon = stat.icon
  const count = useCountUp(stat.value, active)
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${index * 0.1}s`, textAlign: 'center' }}
    >
      <div style={{
        width: '64px', height: '64px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(26,92,56,0.25), rgba(45,122,82,0.1))',
        border: '1px solid rgba(26,92,56,0.35)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 20px',
      }}>
        <Icon size={28} color="#4ade80" />
      </div>
      <div style={{
        fontFamily: 'Outfit, sans-serif',
        fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
        fontWeight: 900,
        color: 'white',
        lineHeight: 1,
        marginBottom: '4px',
      }}>
        <span className="gradient-text-light">{count}{stat.suffix}</span>
      </div>
      <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
        {stat.label}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{stat.sub}</div>
    </div>
  )
}

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(true)
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal') || []
    reveals.forEach(el => observer.observe(el))
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="resultados"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #0f3d27 0%, #0a2818 100%)',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(26,92,56,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="reveal">
          <div className="section-label section-label-white" style={{ justifyContent: 'center' }}>Nossos Resultados</div>
          <h2 className="section-title" style={{ color: 'white' }}>
            Números que comprovam<br />
            nossa <span className="gradient-text-light">excelência</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
        }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div style={{
          marginTop: '80px',
          padding: '40px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }} className="reveal diff-card">
          <div>
            <div className="section-label section-label-white">Por que nos escolher?</div>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
              Segurança do trabalho não é custo — é <span className="gradient-text-light">investimento</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Empresas que investem em segurança e saúde ocupacional reduzem afastamentos, evitam multas e processos trabalhistas, e melhoram a produtividade e o clima organizacional.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              ['Equipe de Engenheiros e Técnicos habilitados pelo CREA/CFT', '#22c55e'],
              ['Atendimento presencial e online em todo o território nacional', '#2d7a52'],
              ['Documentação 100% digitalizada e armazenada com segurança', '#6366f1'],
              ['Suporte pós-entrega e renovações automáticas de programas', '#0891b2'],
            ].map(([text, color]) => (
              <div key={text as string} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: `${color as string}25`,
                  border: `2px solid ${color as string}`,
                  flexShrink: 0,
                  marginTop: '2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke={color as string} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .diff-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
