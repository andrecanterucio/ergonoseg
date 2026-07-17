import { useState, useEffect, useRef } from 'react'
import { Menu, X, Shield, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Quem Somos', href: '/quem-somos', isRoute: true },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Contato', href: '/#contato' },
]

const cursosDropdownItems = [
  {
    label: 'Formação de Perito Judicial e Assistente Técnico',
    href: '/cursos/pericia-judicial',
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cursosOpen, setCursosOpen] = useState(false)
  const [mobileCursosOpen, setMobileCursosOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCursosOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const textColor = (!isHome || scrolled) ? 'rgba(17,24,39,0.75)' : 'rgba(255,255,255,0.82)'
  const hoverColor = (!isHome || scrolled) ? '#1a5c38' : '#6ee9a7'

  const linkStyle: React.CSSProperties = {
    color: textColor,
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'color 0.2s ease',
  }

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
              if (link.isRoute) {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
                    onMouseLeave={e => (e.currentTarget.style.color = textColor)}
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <a
                  key={link.href}
                  href={isHome ? link.href.replace('/', '') : link.href}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = textColor)}
                >
                  {link.label}
                </a>
              )
            })}

            {/* Dropdown Cursos */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setCursosOpen(prev => !prev)}
                style={{
                  ...linkStyle,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: 0,
                }}
                onMouseEnter={e => {
                  const btn = e.currentTarget
                  btn.style.color = hoverColor
                }}
                onMouseLeave={e => {
                  const btn = e.currentTarget
                  btn.style.color = textColor
                }}
              >
                Cursos
                <ChevronDown
                  size={14}
                  style={{ transition: 'transform 0.2s ease', transform: cursosOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {cursosOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  right: 0,
                  background: 'rgba(255,255,255,0.98)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  border: '1px solid rgba(0,0,0,0.07)',
                  minWidth: '280px',
                  overflow: 'hidden',
                  zIndex: 100,
                }}>
                  {cursosDropdownItems.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setCursosOpen(false)}
                      style={{
                        display: 'block',
                        padding: '14px 20px',
                        color: 'rgba(17,24,39,0.75)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        transition: 'background 0.15s ease, color 0.15s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(26,92,56,0.06)'
                        e.currentTarget.style.color = '#1a5c38'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'rgba(17,24,39,0.75)'
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

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
              const mobileStyle: React.CSSProperties = {
                display: 'block',
                padding: '12px 24px',
                color: 'rgba(17,24,39,0.8)',
                textDecoration: 'none',
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

            {/* Mobile Cursos expandível */}
            <div>
              <button
                onClick={() => setMobileCursosOpen(prev => !prev)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '12px 24px',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(17,24,39,0.8)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                Cursos
                <ChevronDown
                  size={16}
                  style={{ transition: 'transform 0.2s ease', transform: mobileCursosOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              {mobileCursosOpen && (
                <div style={{ background: 'rgba(26,92,56,0.04)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  {cursosDropdownItems.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => { setIsOpen(false); setMobileCursosOpen(false) }}
                      style={{
                        display: 'block',
                        padding: '11px 36px',
                        color: '#1a5c38',
                        textDecoration: 'none',
                        fontSize: '0.92rem',
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

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
