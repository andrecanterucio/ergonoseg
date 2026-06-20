import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Quem Somos', href: '/quem-somos', isRoute: true },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Contato', href: '/#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '40px', height: '40px',
              background: 'linear-gradient(135deg, #1a5c38, #2d7a52)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Shield size={22} color="white" strokeWidth={2.5} />
            </div>
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '1.3rem',
              color: scrolled ? '#111827' : 'white',
              letterSpacing: '-0.02em',
              transition: 'color 0.3s ease',
            }}>
              ERGONO<span style={{ color: '#1a5c38' }}>SEG</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navLinks.map(link => {
              const style = {
                color: (!isHome || scrolled) ? 'rgba(17,24,39,0.75)' : 'rgba(255,255,255,0.82)',
                textDecoration: 'none' as const,
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }
              const hover = (!isHome || scrolled) ? '#1a5c38' : '#6ee9a7'
              if (link.isRoute) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={style}
                    onMouseEnter={e => (e.currentTarget.style.color = hover)}
                    onMouseLeave={e => (e.currentTarget.style.color = style.color)}
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <a
                  key={link.href}
                  href={isHome ? link.href.replace('/', '') : link.href}
                  style={style}
                  onMouseEnter={e => (e.currentTarget.style.color = hover)}
                  onMouseLeave={e => (e.currentTarget.style.color = style.color)}
                >
                  {link.label}
                </a>
              )
            })}
            <a href={isHome ? '#contato' : '/#contato'} className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: scrolled ? '#111827' : 'white', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(0,0,0,0.07)',
            padding: '20px 0',
          }}>
            {navLinks.map(link => {
              const mobileStyle = {
                display: 'block',
                padding: '12px 24px',
                color: 'rgba(17,24,39,0.8)',
                textDecoration: 'none' as const,
                fontSize: '1rem',
                fontWeight: 500,
              }
              if (link.isRoute) {
                return (
                  <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} style={mobileStyle}>
                    {link.label}
                  </Link>
                )
              }
              return (
                <a key={link.href} href={isHome ? link.href.replace('/', '') : link.href} onClick={() => setIsOpen(false)} style={mobileStyle}>
                  {link.label}
                </a>
              )
            })}
            <div style={{ padding: '12px 24px' }}>
              <a href={isHome ? '#contato' : '/#contato'} className="btn-primary" onClick={() => setIsOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
