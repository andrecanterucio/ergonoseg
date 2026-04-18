import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Eduardo Pinto',
    role: 'Gerente de RH — Metalúrgica Nordeste',
    text: 'A Ergonoseg transformou a gestão de segurança da nossa empresa. O PGR foi entregue dentro do prazo, com qualidade excepcional, e o suporte pós-entrega é impecável. Recomendo sem hesitar.',
    stars: 5,
    avatar: 'CE',
  },
  {
    name: 'Fernanda Silva',
    role: 'Diretora Administrativa — Construtora SulSafe',
    text: 'Contratamos para elaboração do PCMSO e laudos de ergonomia NR-17. A equipe é extremamente profissional, pontual e explica cada etapa de maneira clara. Nossos colaboradores agradecem.',
    stars: 5,
    avatar: 'FS',
  },
  {
    name: 'Ricardo Alves',
    role: 'Proprietário — Indústria Têxtil Alves & Filhos',
    text: 'Depois de uma auditoria do Ministério do Trabalho, ficamos sem saber o que fazer. A Ergonoseg resolveu tudo em semanas: documentação, treinamentos e adequações. Hoje estamos 100% regularizados.',
    stars: 5,
    avatar: 'RA',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      style={{ background: '#ffffff', padding: '100px 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Depoimentos</div>
          <h2 className="section-title">
            O que nossos clientes<br />
            <span className="gradient-text">dizem sobre nós</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card reveal"
              style={{ transitionDelay: `${i * 0.12}s`, display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: '#374151', fontSize: '0.93rem', lineHeight: 1.7, flexGrow: 1 }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1a5c38, #2d7a52)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700, fontSize: '0.85rem', color: 'white',
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ color: '#111827', fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.8rem' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
