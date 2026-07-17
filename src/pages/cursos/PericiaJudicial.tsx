import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const VAGA_URL = 'https://tinyurl.com/3unmwzj8'

const preparadoItems = [
  'Entender como funciona a perícia judicial na prática',
  'Realizar seu cadastro nos tribunais e começar a atuar',
  'Elaborar laudos periciais profissionais e bem estruturados',
  'Atuar com segurança em processos judiciais e eletrônicos',
  'Se posicionar corretamente perante juízes e advogados',
  'Identificar oportunidades reais de atuação e geração de renda',
]

const aprenderItems = [
  'Fundamentos completos da Perícia Judicial',
  'Requisitos e prerrogativas do Perito e Assistente Técnico',
  'Estrutura da Justiça e tipos de tribunais',
  'Processo eletrônico na prática',
  'Elaboração de laudos e quesitos técnicos',
  'Aplicação do Código de Processo Civil e Penal',
  'Rito processual completo',
  'Assistência judiciária gratuita',
  'E muito mais conteúdo essencial para sua atuação profissional',
]

export default function PericiaJudicial() {
  useEffect(() => {
    document.title = 'Formação de Perito Judicial e Assistente Técnico – ERGONOSEG'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px', background: '#ffffff', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #0d3d22 0%, #1a5c38 100%)',
          padding: '80px 24px 64px',
          color: 'white',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <Link
              to="/"
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '32px',
              }}
            >
              <ArrowLeft size={16} /> Voltar ao início
            </Link>
            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px',
            }}>
              7º Curso de Formação de Perito Judicial e Assistente Técnico
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '680px',
              margin: '0 auto 40px',
            }}>
              Dê o próximo passo na sua carreira e entre em um dos mercados mais valorizados e bem remunerados do país: a Perícia Judicial.
            </p>
            <img
              src="/images/curso-pericia-judicial.jpeg"
              alt="Curso de Formação de Perito Judicial e Assistente Técnico"
              style={{
                maxWidth: '600px',
                width: '100%',
                borderRadius: '16px',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>
        </section>

        {/* Sobre o Curso */}
        <section style={{ padding: '64px 24px', background: '#ffffff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 800,
              color: '#111827',
              marginBottom: '24px',
            }}>
              Sobre o Curso
            </h2>
            <p style={{ color: '#374151', lineHeight: 1.85, fontSize: '1.05rem' }}>
              Este curso foi desenvolvido para profissionais que desejam atuar com segurança, autoridade e preparo técnico dentro do sistema judiciário, seja como Perito Judicial ou Assistente Técnico. Em um formato 100% presencial em Ribeirão Preto/SP, você terá uma imersão prática e estratégica em apenas 16 horas intensivas, com conteúdo direto ao ponto e aplicável desde o primeiro contato com o mercado.
            </p>
          </div>
        </section>

        {/* Você sairá preparado para */}
        <section style={{ padding: '64px 24px', background: '#f2f7f4' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 800,
              color: '#111827',
              marginBottom: '36px',
              textAlign: 'center',
            }}>
              Você sairá preparado para
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}>
              {preparadoItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    background: 'rgba(26,92,56,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1px',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#1a5c38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que você vai aprender */}
        <section style={{ padding: '64px 24px', background: '#ffffff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 800,
              color: '#111827',
              marginBottom: '36px',
              textAlign: 'center',
            }}>
              O que você vai aprender
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
              className="aprender-grid"
            >
              {aprenderItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    color: '#1a5c38',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    lineHeight: 1.4,
                  }}>•</span>
                  <span style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: 'linear-gradient(135deg, #0d3d22 0%, #1a5c38 100%)',
          padding: '80px 24px',
          color: 'white',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '100px',
              padding: '8px 20px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '28px',
            }}>
              🎓 Certificação garantida ao final do curso
            </div>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px',
            }}>
              Vagas Limitadas — Garanta sua participação!
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '40px',
            }}>
              A demanda por peritos qualificados cresce constantemente, e poucos profissionais estão realmente preparados para aproveitar essa oportunidade. Este curso entrega exatamente o que você precisa para sair na frente e começar com confiança.
            </p>
            <a
              href={VAGA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#1a5c38',
                color: 'white',
                textDecoration: 'none',
                padding: '16px 36px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1.05rem',
                border: '2px solid rgba(255,255,255,0.25)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#2d7a52')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1a5c38')}
            >
              Garantir Minha Vaga Agora
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 640px) {
          .aprender-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
