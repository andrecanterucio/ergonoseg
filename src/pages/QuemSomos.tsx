import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, MessageCircle, ArrowLeft, Users, Award, Target } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const WA_URL = 'https://wa.me/5516996902000?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Ergonoseg.'

const highlights = [
  { icon: Award, label: '+15 anos', desc: 'de atuação no mercado' },
  { icon: Target, label: '+500 empresas', desc: 'atendidas em todo o Brasil' },
  { icon: Users, label: 'Equipe multidisciplinar', desc: 'engenheiros, fisioterapeutas e técnicos' },
  { icon: Shield, label: '100% conformidade', desc: 'com normas regulamentadoras vigentes' },
]

export default function QuemSomos() {
  useEffect(() => {
    document.title = 'Quem Somos – ERGONOSEG | Assessoria em Segurança do Trabalho'
    window.scrollTo(0, 0)
  }, [])

  const linkStyle: React.CSSProperties = {
    color: '#1a5c38',
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px', background: '#ffffff', minHeight: '100vh' }}>
        {/* Hero da página */}
        <section style={{ background: 'linear-gradient(135deg, #0d3d22 0%, #1a5c38 100%)', padding: '80px 24px 64px', color: 'white' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link to="/" style={{ ...linkStyle, color: 'rgba(255,255,255,0.7)', marginBottom: '24px', display: 'inline-flex' }}>
              <ArrowLeft size={16} /> Voltar ao início
            </Link>
            <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>
              Quem Somos – ERGONOSEG
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: '680px' }}>
              Assessoria especializada em Segurança do Trabalho, Ergonomia e Projetos de Prevenção e Combate a Incêndio.
            </p>
          </div>
        </section>

        {/* Destaques */}
        <section style={{ background: '#f2f7f4', padding: '48px 24px', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} style={{ background: 'white', borderRadius: '16px', padding: '28px 24px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(26,92,56,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <Icon size={24} color="#1a5c38" />
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#111827' }}>{label}</div>
                <div style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '4px' }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Conteúdo principal */}
        <section style={{ padding: '64px 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#374151', lineHeight: 1.85, fontSize: '1.05rem' }}>
            <p style={{ marginBottom: '24px' }}>
              A ERGONOSEG é uma empresa especializada em assessoria empresarial nas áreas de Segurança do Trabalho, Ergonomia e Projetos de Prevenção e Combate a Incêndio, com mais de 15 anos de atuação no mercado. Nosso compromisso é oferecer soluções técnicas de alta qualidade, aliadas a um atendimento eficiente e personalizado, contribuindo diretamente para a segurança, a conformidade legal e o desempenho das organizações atendidas.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Atuamos de forma estratégica na conscientização e prevenção de acidentes de trabalho e doenças ocupacionais, considerando toda a cadeia de impactos que esses eventos podem gerar para empregadores e colaboradores. Nosso foco está na mitigação de riscos que possam comprometer a continuidade dos processos produtivos, promovendo ambientes de trabalho mais seguros, saudáveis e sustentáveis.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Para isso, disponibilizamos um portfólio completo de programas, treinamentos, cursos e palestras, desenvolvidos para atender às necessidades específicas de cada cliente, sempre alinhados às normas regulamentadoras vigentes e às melhores práticas do mercado.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Contamos com uma equipe multidisciplinar altamente qualificada, composta por Engenheiros de Segurança do Trabalho, Fisioterapeutas, Ergonomistas, Enfermeiros do Trabalho e Técnicos especializados, que atuam com o suporte de sistemas informatizados e metodologias modernas. Nosso trabalho é pautado na interação constante com os colaboradores das empresas atendidas, visando à promoção da saúde ocupacional, melhoria da produtividade e fortalecimento dos resultados organizacionais.
            </p>
            <p>
              Este canal foi desenvolvido com o objetivo de facilitar o acesso às informações sobre nossos serviços e estreitar o relacionamento com nossos clientes e parceiros, proporcionando mais transparência, agilidade e proximidade.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #f2f7f4 0%, #e8f2ec 100%)', padding: '64px 24px', borderTop: '1px solid rgba(26,92,56,0.1)' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#111827', marginBottom: '16px' }}>
              Pronto para proteger sua equipe?
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '32px', lineHeight: 1.7 }}>
              Fale com nossa equipe e receba um diagnóstico gratuito para a sua empresa.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}
              >
                <MessageCircle size={20} />
                Falar pelo WhatsApp
              </a>
              <Link to="/#contato" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'white', color: '#1a5c38', border: '2px solid #1a5c38' }}>
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
