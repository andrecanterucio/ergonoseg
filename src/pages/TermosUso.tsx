import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DPO_EMAIL = 'contato@ergonoseg.com.br'
const LAST_UPDATED = '17 de abril de 2026'

const sectionStyle: React.CSSProperties = { marginBottom: '40px' }
const h2Style: React.CSSProperties = {
  fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem',
  color: '#111827', marginBottom: '12px', paddingBottom: '8px',
  borderBottom: '2px solid rgba(26,92,56,0.15)',
}
const pStyle: React.CSSProperties = { color: '#374151', lineHeight: 1.85, marginBottom: '12px', fontSize: '0.98rem' }
const liStyle: React.CSSProperties = { color: '#374151', lineHeight: 1.85, marginBottom: '8px', fontSize: '0.98rem' }

export default function TermosUso() {
  useEffect(() => {
    document.title = 'Termos de Uso – ERGONOSEG'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px', background: '#ffffff', minHeight: '100vh' }}>
        <section style={{ background: 'linear-gradient(135deg, #0d3d22 0%, #1a5c38 100%)', padding: '64px 24px 48px', color: 'white' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 500, marginBottom: '20px' }}>
              <ArrowLeft size={16} /> Voltar ao início
            </Link>
            <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
              Termos de Uso
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>Última atualização: {LAST_UPDATED}</p>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: '860px', margin: '0 auto' }}>
          <div style={sectionStyle}>
            <p style={pStyle}>
              Bem-vindo ao site da <strong>ERGONOSEG</strong>. Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com alguma cláusula, recomendamos que não utilize o site. Estes termos são regidos pela legislação brasileira, em especial pelo <strong>Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>, pelo <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong> e pela <strong>LGPD (Lei nº 13.709/2018)</strong>.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Sobre a ERGONOSEG</h2>
            <p style={pStyle}>
              A ERGONOSEG é uma empresa especializada em assessoria empresarial nas áreas de Segurança do Trabalho, Ergonomia e Projetos de Prevenção e Combate a Incêndio. Este site tem caráter informativo e comercial, destinado a apresentar nossos serviços e facilitar o contato com clientes e parceiros.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Uso Permitido</h2>
            <p style={pStyle}>O acesso ao site é permitido para fins lícitos. É expressamente proibido:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}>Reproduzir, copiar, modificar ou distribuir o conteúdo do site sem autorização prévia por escrito da ERGONOSEG;</li>
              <li style={liStyle}>Utilizar o site para fins ilícitos, fraudulentos ou que violem direitos de terceiros;</li>
              <li style={liStyle}>Tentar acessar sistemas, servidores ou bancos de dados de forma não autorizada;</li>
              <li style={liStyle}>Transmitir vírus, malware ou qualquer código prejudicial ao funcionamento do site.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Propriedade Intelectual</h2>
            <p style={pStyle}>
              Todo o conteúdo disponível neste site — incluindo textos, imagens, logotipos, marcas, vídeos e layouts — é de propriedade exclusiva da ERGONOSEG ou licenciado para uso por ela, protegido pelas leis de propriedade intelectual brasileiras (Lei nº 9.610/1998). A utilização não autorizada é vedada e sujeita às sanções legais cabíveis.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Formulário de Contato e Solicitação de Orçamento</h2>
            <p style={pStyle}>
              Ao preencher o formulário de contato ou solicitação de orçamento, você declara que as informações fornecidas são verdadeiras, completas e atualizadas. A ERGONOSEG utiliza essas informações exclusivamente para responder à sua solicitação, conforme descrito em nossa <Link to="/politica-de-privacidade" style={{ color: '#1a5c38', fontWeight: 600 }}>Política de Privacidade</Link>.
            </p>
            <p style={pStyle}>
              O envio do formulário não implica contratação ou obrigação de prestação de serviços. A proposta comercial será encaminhada formalmente por nossa equipe após análise da demanda.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Limitação de Responsabilidade</h2>
            <p style={pStyle}>
              As informações disponibilizadas no site têm caráter meramente informativo e não substituem a consultoria técnica especializada. A ERGONOSEG não se responsabiliza por:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}>Decisões tomadas com base exclusivamente no conteúdo do site sem contratação formal dos serviços;</li>
              <li style={liStyle}>Interrupções temporárias no acesso ao site por razões técnicas ou de manutenção;</li>
              <li style={liStyle}>Conteúdo de sites de terceiros que possam ser referenciados em nosso site.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Links Externos</h2>
            <p style={pStyle}>
              Este site pode conter links para sites de terceiros. Esses links são fornecidos apenas para conveniência e não representam endosso ou responsabilidade da ERGONOSEG pelo conteúdo externo. Recomendamos que você leia as políticas de privacidade e termos de uso dos sites que visitar.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Modificações nos Termos</h2>
            <p style={pStyle}>
              A ERGONOSEG reserva-se o direito de alterar estes Termos de Uso a qualquer momento, com vigência imediata a partir da publicação no site. O uso continuado do site após tais alterações implica aceitação dos novos termos.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Foro e Legislação Aplicável</h2>
            <p style={pStyle}>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Ribeirão Preto/SP para dirimir quaisquer litígios decorrentes deste instrumento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. Contato</h2>
            <p style={pStyle}>
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:{' '}
              <a href={`mailto:${DPO_EMAIL}`} style={{ color: '#1a5c38', fontWeight: 600 }}>{DPO_EMAIL}</a>
            </p>
          </div>

          <div style={{ background: '#f2f7f4', borderRadius: '12px', padding: '24px', border: '1px solid rgba(26,92,56,0.15)' }}>
            <p style={{ ...pStyle, marginBottom: 0, color: '#1a5c38', fontWeight: 500 }}>
              Dúvidas? Entre em contato:{' '}
              <a href={`mailto:${DPO_EMAIL}`} style={{ color: '#1a5c38', fontWeight: 700 }}>{DPO_EMAIL}</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
