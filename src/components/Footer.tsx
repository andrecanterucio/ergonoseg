import { Shield, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const InstagramIcon = () => (
  <img src="/instagram.png" alt="Instagram" width="20" height="20" style={{ objectFit: 'contain' }} />
)
const LinkedinIcon = () => (
  <img src="/linkedin.png" alt="LinkedIn" width="20" height="20" style={{ objectFit: 'contain' }} />
)

const social = [
  { Icon: InstagramIcon, href: 'https://www.instagram.com/ergonoseg/', label: 'Instagram da Ergonoseg' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ergonoseg-brasil-ab2520320/recent-activity/all/', label: 'LinkedIn da Ergonoseg' },
]

const linkStyle: React.CSSProperties = {
  color: '#6b7280',
  textDecoration: 'none',
  fontSize: '0.88rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  transition: 'color 0.2s ease',
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const handlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#1a5c38'),
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#6b7280'),
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle} {...handlers}>
        {children} <ArrowUpRight size={12} />
      </a>
    )
  }
  // Âncoras (/#section) usam <a> nativo para garantir scroll correto no browser
  if (href.includes('#')) {
    return (
      <a href={href} style={linkStyle} {...handlers}>
        {children}
      </a>
    )
  }
  return (
    <Link to={href} style={linkStyle} {...handlers}>
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#f8f9fa', borderTop: '1px solid rgba(0,0,0,0.07)', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px', height: '40px',
                background: 'linear-gradient(135deg, #1a5c38, #2d7a52)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Shield size={22} color="white" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#111827' }}>
                ERGONO<span style={{ color: '#1a5c38' }}>SEG</span>
              </span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px', marginBottom: '12px' }}>
              Assessoria especializada em Segurança do Trabalho, Ergonomia e Prevenção de Incêndio para empresas de todo o Brasil.
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '280px', marginBottom: '24px' }}>
              <strong style={{ color: '#374151' }}>Ribeirão Preto/SP</strong><br />
              Rua Sgt. Sílvio D. Hollenbach, 865 – sala 21<br />
              <a href="tel:+5516996902000" style={{ color: '#1a5c38', textDecoration: 'none', fontWeight: 500 }}>(16) 99690-2000</a>{' '}·{' '}
              <a href="tel:+5516991790087" style={{ color: '#1a5c38', textDecoration: 'none', fontWeight: 500 }}>(16) 99179-0087</a><br />
              <a href="mailto:contato@ergonoseg.com.br" style={{ color: '#1a5c38', textDecoration: 'none', fontWeight: 500 }}>contato@ergonoseg.com.br</a>
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {social.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#9ca3af',
                    transition: 'background 0.2s ease, color 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(26,92,56,0.1)'
                    e.currentTarget.style.color = '#1a5c38'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.04)'
                    e.currentTarget.style.color = '#6b7280'
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', color: '#111827', fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', letterSpacing: '0.04em' }}>
              Serviços
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['PGR', 'PCMSO', 'LTCAT', 'Ergonomia NR-17', 'PPCI', 'Treinamentos'].map(item => (
                <li key={item}><FooterLink href="/#servicos">{item}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', color: '#111827', fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', letterSpacing: '0.04em' }}>
              Empresa
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><FooterLink href="/quem-somos">Quem Somos</FooterLink></li>
              <li><FooterLink href="/#contato">Contato</FooterLink></li>
              <li>
                <FooterLink href="https://www.magazineluiza.com.br/lojista/ergonoseg/" external>
                  Produtos que indicamos
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: 'Outfit, sans-serif', color: '#111827', fontWeight: 700, fontSize: '0.9rem', marginBottom: '16px', letterSpacing: '0.04em' }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><FooterLink href="/politica-de-privacidade">Política de Privacidade</FooterLink></li>
              <li><FooterLink href="/termos-de-uso">Termos de Uso</FooterLink></li>
              <li><FooterLink href="/lgpd">LGPD</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.07)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: '#374151', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Ergonoseg. Todos os direitos reservados.
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.82rem' }}>
            Atendimento Nacional
          </p>
          <a
            href="mailto:contato@ergonoseg.com.br"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#1a5c38', fontSize: '0.82rem', textDecoration: 'none', fontWeight: 500 }}
          >
            contato@ergonoseg.com.br
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
