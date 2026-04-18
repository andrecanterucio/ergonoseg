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

export default function LGPDPage() {
  useEffect(() => {
    document.title = 'LGPD – Proteção de Dados – ERGONOSEG'
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
              Proteção de Dados — LGPD
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>Última atualização: {LAST_UPDATED}</p>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(26,92,56,0.06)', border: '1px solid rgba(26,92,56,0.2)', borderRadius: '12px', padding: '24px', marginBottom: '40px' }}>
            <p style={{ ...pStyle, marginBottom: 0, fontWeight: 500, color: '#1a5c38' }}>
              Este documento descreve o compromisso da ERGONOSEG com a <strong>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD)</strong>, vigente desde setembro de 2020 no Brasil, e as medidas adotadas para garantir os direitos dos titulares de dados.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Quem Somos como Controlador</h2>
            <p style={pStyle}>
              A <strong>ERGONOSEG</strong> atua como <strong>Controladora</strong> dos dados pessoais coletados por meio de seu site, formulários de contato e na prestação de seus serviços de assessoria em Segurança do Trabalho, Ergonomia e Prevenção de Incêndio. Isso significa que somos responsáveis pelas decisões referentes ao tratamento desses dados.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Dados Pessoais que Tratamos</h2>
            <p style={pStyle}>No exercício de nossas atividades, podemos tratar as seguintes categorias de dados:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}><strong>Dados de identificação:</strong> nome, CPF/CNPJ, cargo e empresa;</li>
              <li style={liStyle}><strong>Dados de contato:</strong> telefone, celular/WhatsApp, e-mail e endereço;</li>
              <li style={liStyle}><strong>Dados de saúde ocupacional</strong> (quando aplicável na prestação de serviços de PCMSO e Ergonomia) — tratados com especial atenção às salvaguardas exigidas pela LGPD para dados sensíveis (art. 11);</li>
              <li style={liStyle}><strong>Dados de navegação:</strong> endereço IP, cookies e logs de acesso ao site.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Finalidades e Bases Legais</h2>
            <p style={pStyle}>Tratamos dados pessoais com base nas seguintes hipóteses legais (art. 7º e 11 da LGPD):</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}><strong>Consentimento (art. 7º, I):</strong> envio de comunicações de marketing e newsletter;</li>
              <li style={liStyle}><strong>Execução de contrato (art. 7º, V):</strong> prestação dos serviços contratados de SST;</li>
              <li style={liStyle}><strong>Cumprimento de obrigação legal (art. 7º, II):</strong> atendimento a exigências do Ministério do Trabalho, eSocial, fiscalizações e demais órgãos competentes;</li>
              <li style={liStyle}><strong>Proteção da vida (art. 7º, VII / art. 11, II, f):</strong> tratamento de dados de saúde vinculados à segurança e medicina do trabalho;</li>
              <li style={liStyle}><strong>Legítimo interesse (art. 7º, IX):</strong> respostas a contatos e solicitações, segurança da informação e melhoria dos serviços.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Seus Direitos como Titular</h2>
            <p style={pStyle}>A LGPD garante a você, como titular de dados pessoais, os seguintes direitos (art. 18):</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={liStyle}><strong>Confirmação e Acesso:</strong> confirmar se tratamos seus dados e obter cópia dos mesmos;</li>
              <li style={liStyle}><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
              <li style={liStyle}><strong>Anonimização, Bloqueio ou Eliminação:</strong> de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
              <li style={liStyle}><strong>Portabilidade:</strong> receber seus dados em formato estruturado e interoperável;</li>
              <li style={liStyle}><strong>Eliminação:</strong> de dados tratados com base no consentimento, a qualquer momento;</li>
              <li style={liStyle}><strong>Revogação do Consentimento:</strong> revogar o consentimento dado para fins específicos;</li>
              <li style={liStyle}><strong>Oposição:</strong> opor-se ao tratamento realizado com base em legítimo interesse;</li>
              <li style={liStyle}><strong>Informação:</strong> sobre entidades com quem compartilhamos seus dados;</li>
              <li style={liStyle}><strong>Petição à ANPD:</strong> apresentar reclamação à Autoridade Nacional de Proteção de Dados.</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Como Exercer seus Direitos</h2>
            <p style={pStyle}>
              Para exercer qualquer um dos direitos listados acima, entre em contato com nosso Encarregado de Dados (DPO) pelo e-mail{' '}
              <a href={`mailto:${DPO_EMAIL}`} style={{ color: '#1a5c38', fontWeight: 600 }}>{DPO_EMAIL}</a>.
              Responderemos sua solicitação em até <strong>15 dias úteis</strong>, conforme prazo legal.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Compartilhamento e Operadores</h2>
            <p style={pStyle}>
              Eventualmente, compartilhamos dados pessoais com <strong>operadores</strong> — empresas que tratam dados em nosso nome — como provedores de hospedagem, serviços de e-mail e plataformas de comunicação. Esses operadores são contratualmente obrigados a tratar os dados com segurança e apenas para as finalidades autorizadas pela ERGONOSEG.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Transferência Internacional de Dados</h2>
            <p style={pStyle}>
              Caso haja transferência de dados para países estrangeiros (ex.: infraestrutura de servidores), garantimos que ocorre apenas para países com nível adequado de proteção ou mediante cláusulas contratuais específicas, conforme art. 33 da LGPD.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Segurança da Informação</h2>
            <p style={pStyle}>
              Implementamos medidas técnicas e administrativas para proteger seus dados contra incidentes de segurança, incluindo: transmissão via HTTPS, controle de acesso por credenciais, backup regular e procedimentos de resposta a incidentes. Em caso de violação de dados que possa acarretar risco aos titulares, notificaremos a ANPD e os afetados nos prazos previstos em lei.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. Encarregado de Dados (DPO)</h2>
            <p style={pStyle}>
              Nos termos do art. 41 da LGPD, a ERGONOSEG designa como Encarregado de Dados o responsável pelo canal de comunicação:{' '}
              <a href={`mailto:${DPO_EMAIL}`} style={{ color: '#1a5c38', fontWeight: 600 }}>{DPO_EMAIL}</a>
            </p>
            <p style={pStyle}>
              O Encarregado atua como canal de comunicação entre a ERGONOSEG, os titulares de dados e a Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>10. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
            <p style={pStyle}>
              A ANPD é o órgão competente para fiscalizar o cumprimento da LGPD no Brasil. Caso não seja satisfeito com nossa resposta ao exercício de seus direitos, você pode apresentar reclamação diretamente à ANPD por meio do site{' '}
              <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" style={{ color: '#1a5c38', fontWeight: 600 }}>www.gov.br/anpd</a>.
            </p>
          </div>

          <div style={{ background: '#f2f7f4', borderRadius: '12px', padding: '24px', border: '1px solid rgba(26,92,56,0.15)' }}>
            <p style={{ ...pStyle, marginBottom: 0, color: '#1a5c38', fontWeight: 500 }}>
              Dúvidas ou solicitações relacionadas à LGPD? Fale com nosso DPO:{' '}
              <a href={`mailto:${DPO_EMAIL}`} style={{ color: '#1a5c38', fontWeight: 700 }}>{DPO_EMAIL}</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
