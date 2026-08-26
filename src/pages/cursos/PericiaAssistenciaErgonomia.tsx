import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, MapPin, User } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const WHATSAPP_URL = 'https://wa.me/5516996902000?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Curso%20de%20Per%C3%ADcia%20e%20Assist%C3%AAncia%20T%C3%A9cnica%20em%20Ergonomia.'

const instrutores = [
  {
    nome: 'Thais Araújo',
    papel: 'Instrutora',
    descricao: 'Fisioterapeuta Forense, Ergonomista e Perita Trabalhista.',
  },
  {
    nome: 'Alysson Martins',
    papel: 'Instrutor',
    descricao: 'Engenheiro de Segurança e Ergonomista, membro da Associação Brasileira de Ergonomia, Perito do Tribunal de Justiça de SP e MG e Assistente Técnico Pericial.',
  },
]

export default function PericiaAssistenciaErgonomia() {
  useEffect(() => {
    document.title = 'Curso de Perícia e Assistência Técnica em Ergonomia – ERGONOSEG'
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
              Curso de Perícia e Assistência Técnica em Ergonomia
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '680px',
              margin: '0 auto',
            }}>
              Ergonomia Aplicada ao Direito do Trabalho: Estratégias e Prática.
            </p>
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
              Este curso foi desenvolvido para profissionais que desejam aplicar a ergonomia com segurança técnica e jurídica dentro do Direito do Trabalho, seja como Perito ou Assistente Técnico. Em um formato 100% presencial em Ribeirão Preto/SP, você terá uma imersão prática e estratégica, com conteúdo direto ao ponto sobre estratégias e prática pericial em ergonomia.
            </p>
          </div>
        </section>

        {/* Instrutores */}
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
              Instrutores
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px',
            }}>
              {instrutores.map(item => (
                <div
                  key={item.nome}
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    background: 'rgba(26,92,56,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <User size={20} color="#1a5c38" />
                  </span>
                  <div>
                    <div style={{ color: '#1a5c38', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      {item.papel}
                    </div>
                    <div style={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', marginBottom: '8px' }}>
                      {item.nome}
                    </div>
                    <div style={{ color: '#374151', fontSize: '0.92rem', lineHeight: 1.55 }}>
                      {item.descricao}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Informações do Curso */}
        <section style={{ padding: '64px 24px', background: '#ffffff' }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Calendar size={22} color="#1a5c38" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ color: '#111827', fontWeight: 700 }}>Data e horário</div>
                <div style={{ color: '#374151', fontSize: '0.95rem' }}>17/10/2026 · 08h às 17h</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <MapPin size={22} color="#1a5c38" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ color: '#111827', fontWeight: 700 }}>Local</div>
                <div style={{ color: '#374151', fontSize: '0.95rem' }}>Hotel JR — Ribeirão Preto/SP</div>
              </div>
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
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px',
            }}>
              Quer saber mais sobre este curso?
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '40px',
            }}>
              Fale com a nossa equipe pelo WhatsApp e tire todas as suas dúvidas sobre o curso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
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
              💬 Falar pelo WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
