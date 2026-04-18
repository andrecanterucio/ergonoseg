import { useEffect, useRef } from 'react'
import {
  FileText, Heart, Zap, Flame, Users, ClipboardCheck,
  Activity, HardHat, BookOpen, Eye, Shield, Leaf
} from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'PGR — Programa de Gerenciamento de Riscos',
    desc: 'Identificamos, avaliamos e controlamos todos os riscos ocupacionais da sua empresa, assegurando total conformidade com a NR-01 atualizada.',
    color: '#1a5c38',
  },
  {
    icon: Heart,
    title: 'PCMSO — Programa de Controle Médico',
    desc: 'Planejamento e controle de exames médicos ocupacionais com foco na saúde integral dos colaboradores e atendimento à NR-07.',
    color: '#e11d48',
  },
  {
    icon: Activity,
    title: 'LTCAT — Laudo Técnico das Condições Ambientais',
    desc: 'Elaboração completa do laudo técnico para aposentadoria especial, caracterizando agentes nocivos conforme a Previdência Social.',
    color: '#7c3aed',
  },
  {
    icon: Zap,
    title: 'PPRA / PGASSO',
    desc: 'Programas preventivos para mapeamento e controle de riscos ambientais e de saúde, mantendo sua empresa em dia com a legislação.',
    color: '#0891b2',
  },
  {
    icon: Flame,
    title: 'PPCI — Prevenção e Combate a Incêndio',
    desc: 'Projetos completos de prevenção de incêndio, incluindo SPDA, saídas de emergência e sistemas de alarme conforme o Corpo de Bombeiros.',
    color: '#dc2626',
  },
  {
    icon: Users,
    title: 'Ergonomia — NR-17',
    desc: 'Análise Ergonômica do Trabalho (AET) e adequação dos postos de trabalho para prevenir doenças ocupacionais e aumentar a produtividade.',
    color: '#059669',
  },
  {
    icon: HardHat,
    title: 'NR-10 — Segurança em Instalações Elétricas',
    desc: 'Consultoria em segurança elétrica, elaboração de prontuários, mapas de risco e treinamentos obrigatórios da NR-10.',
    color: '#d97706',
  },
  {
    icon: ClipboardCheck,
    title: 'Laudos e Perícias Técnicas',
    desc: 'Emissão de laudos técnicos periciais para fins trabalhistas, previdenciários e de defesa judicial, com assinatura de engenheiro habilitado.',
    color: '#6366f1',
  },
  {
    icon: BookOpen,
    title: 'Treinamentos NR',
    desc: 'Capacitações obrigatórias nas principais Normas Regulamentadoras: NR-5, NR-6, NR-10, NR-20, NR-35 e muito mais, com certificados válidos.',
    color: '#0d9488',
  },
  {
    icon: Eye,
    title: 'Higiene Ocupacional',
    desc: 'Monitoramento de agentes físicos, químicos e biológicos nos ambientes de trabalho, com relatórios técnicos e recomendações preventivas.',
    color: '#be185d',
  },
  {
    icon: Shield,
    title: 'CIPA — Comissão Interna de Prevenção',
    desc: 'Apoio na constituição, gestão e treinamento da CIPA conforme a NR-05, fortalecendo a cultura de segurança dentro da empresa.',
    color: '#1d4ed8',
  },
  {
    icon: Leaf,
    title: 'Meio Ambiente e Sustentabilidade',
    desc: 'Orientação em gestão ambiental, descarte correto de resíduos e adequação às normas ambientais vigentes (CONAMA, ABNT).',
    color: '#16a34a',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = sectionRef.current?.querySelectorAll('.reveal') || []
    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} style={{ background: '#f2f7f4', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background dots */}
      <div className="bg-dots" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Nossos Serviços</div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Tudo que sua empresa precisa<br />
            em <span className="gradient-text">segurança do trabalho</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Oferecemos uma gama completa de serviços especializados para manter sua empresa em conformidade com as normas regulamentadoras e proteger seus colaboradores.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`card reveal`}
                style={{ animationDelay: `${(i % 4) * 0.1}s`, transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '12px',
                  background: `${service.color}20`,
                  border: `1px solid ${service.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                  flexShrink: 0,
                }}>
                  <Icon size={22} color={service.color} />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#111827',
                  lineHeight: 1.3,
                  marginBottom: '10px',
                }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#9ca3af', lineHeight: 1.65 }}>
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
