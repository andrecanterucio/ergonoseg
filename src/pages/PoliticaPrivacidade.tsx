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

export default function PoliticaPrivacidade() {
  useEffect(() => {
    document.title = 'Política de Privacidade – ERGONOSEG'
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
              Política de Privacidade
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>Última atualização: {LAST_UPDATED}</p>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: '860px', margin: '0 auto' }}>
          <div style={sectionStyle}>
            <p style={pStyle}>
              A ERGONOSEG — Assessoria em Segurança do Trabalho, Ergonomia e Prevenção de Incêndio valoriza e respeita a privacidade de seus clientes, parceiros e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD)</strong>, o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong> e demais normas aplicáveis.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Dados Coletados</h2>
            <p style={pStyle}>Coletamos os seguintes dados pessoais quando você utiliza nosso site ou solicita nossos serviços:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}>Nome completo e nome da empresa;</li>
              <li style={liStyle}>Endereço de e-mail e número de telefone/WhatsApp;</li>
              <li style={liStyle}>Serviço de interesse e mensagem enviada pelo formulário de contato;</li>
              <li style={liStyle}>Dados de navegação (cookies de sessão, endereço IP, tipo de navegador) para fins de análise e segurança.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Finalidade do Tratamento</h2>
            <p style={pStyle}>Seus dados são utilizados exclusivamente para:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}>Responder às solicitações de orçamento e contato;</li>
              <li style={liStyle}>Prestar os serviços contratados de assessoria em SST;</li>
              <li style={liStyle}>Cumprimento de obrigações legais e regulatórias;</li>
              <li style={liStyle}>Envio de comunicações relevantes sobre nossos serviços, mediante consentimento prévio;</li>
              <li style={liStyle}>Melhoria contínua do nosso site e serviços (análise de navegação).</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Base Legal para o Tratamento</h2>
            <p style={pStyle}>O tratamento dos seus dados pessoais é fundamentado nas seguintes bases legais previstas na LGPD (art. 7º):</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}><strong>Consentimento</strong> — para envio de comunicações de marketing;</li>
              <li style={liStyle}><strong>Execução de contrato</strong> — para prestação dos serviços contratados;</li>
              <li style={liStyle}><strong>Cumprimento de obrigação legal</strong> — para atender exigências das autoridades competentes;</li>
              <li style={liStyle}><strong>Legítimo interesse</strong> — para responder a solicitações de contato e aprimorar nossos serviços.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Compartilhamento de Dados</h2>
            <p style={pStyle}>
              A ERGONOSEG não vende, aluga ou compartilha seus dados pessoais com terceiros para fins comerciais. O compartilhamento poderá ocorrer apenas:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}>Com prestadores de serviço tecnológico necessários à operação do site (hospedagem, e-mail transacional), sob obrigação contratual de confidencialidade;</li>
              <li style={liStyle}>Em cumprimento de ordem judicial, regulatória ou legal;</li>
              <li style={liStyle}>Para proteção dos direitos da ERGONOSEG em caso de disputas jurídicas.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Retenção de Dados</h2>
            <p style={pStyle}>
              Os dados pessoais são mantidos pelo período necessário à execução dos serviços contratados e para o cumprimento de obrigações legais, fiscais e regulatórias. Após esse período, os dados são eliminados ou anonimizados, salvo quando a retenção for exigida por lei.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Segurança dos Dados</h2>
            <p style={pStyle}>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo criptografia de dados em trânsito (HTTPS), controle de acesso restrito e revisão periódica de nossos procedimentos de segurança.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Direitos do Titular</h2>
            <p style={pStyle}>Nos termos da LGPD (art. 18), você tem direito a:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}>Confirmação da existência de tratamento e acesso aos dados;</li>
              <li style={liStyle}>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li style={liStyle}>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li style={liStyle}>Portabilidade dos dados a outro fornecedor de serviço;</li>
              <li style={liStyle}>Eliminação dos dados tratados com base no consentimento;</li>
              <li style={liStyle}>Revogação do consentimento a qualquer momento;</li>
              <li style={liStyle}>Informação sobre entidades públicas e privadas com quem compartilhamos dados.</li>
            </ul>
            <p style={pStyle}>
              Para exercer seus direitos, entre em contato com nosso Encarregado (DPO) pelo e-mail{' '}
              <a href={`mailto:${DPO_EMAIL}`} style={{ color: '#1a5c38', fontWeight: 600 }}>{DPO_EMAIL}</a>.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Cookies</h2>
            <p style={pStyle}>
              Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos (de forma anonimizada) para compreender como os visitantes interagem com nossas páginas. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a experiência de uso do site.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. Encarregado de Dados (DPO)</h2>
            <p style={pStyle}>
              O Encarregado pelo Tratamento de Dados Pessoais da ERGONOSEG pode ser contatado pelo e-mail:{' '}
              <a href={`mailto:${DPO_EMAIL}`} style={{ color: '#1a5c38', fontWeight: 600 }}>{DPO_EMAIL}</a>
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>10. Alterações nesta Política</h2>
            <p style={pStyle}>
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos a revisão regular desta página. Alterações relevantes serão comunicadas por e-mail ou aviso em destaque no site.
            </p>
          </div>

          <div style={{ background: '#f2f7f4', borderRadius: '12px', padding: '24px', border: '1px solid rgba(26,92,56,0.15)' }}>
            <p style={{ ...pStyle, marginBottom: 0, color: '#1a5c38', fontWeight: 500 }}>
              Dúvidas sobre esta política? Entre em contato:{' '}
              <a href={`mailto:${DPO_EMAIL}`} style={{ color: '#1a5c38', fontWeight: 700 }}>{DPO_EMAIL}</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
