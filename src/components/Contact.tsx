import { useEffect, useRef, useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

const WhatsAppIcon = ({ size = 20 }: { size?: number; color?: string }) => (
  <img src="/whatsapp.png" alt="WhatsApp" width={size} height={size} style={{ objectFit: 'contain' }} />
)

const services = [
  'PGR — Gerenciamento de Riscos',
  'PCMSO — Controle Médico',
  'LTCAT — Laudo Técnico',
  'Ergonomia (NR-17)',
  'PPCI — Prevenção de Incêndio',
  'Treinamentos NR',
  'Higiene Ocupacional',
  'CIPA (NR-05)',
  'Laudos Técnicos',
  'Outro',
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `🛡️ *Solicitação de Orçamento — Ergonoseg*\n\n` +
      `👤 Nome: ${form.name}\n` +
      `🏢 Empresa: ${form.company}\n` +
      `📧 E-mail: ${form.email}\n` +
      `📱 Telefone: ${form.phone}\n` +
      `🔧 Serviço: ${form.service}\n` +
      `📝 Mensagem: ${form.message}`
    )
    window.open(`https://wa.me/5516996902000?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    background: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '10px',
    color: '#111827',
    fontSize: '1rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    appearance: 'none' as const,
  }

  return (
    <section
      id="contato"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #f2f7f4 0%, #e8f2ec 100%)',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>Fale Conosco</div>
          <h2 className="section-title">
            Solicite um orçamento<br />
            <span className="gradient-text">gratuito e sem compromisso</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Nossa equipe retorna em até 2 horas úteis. Preencha o formulário e receba uma proposta personalizada para sua empresa.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'start' }} className="contact-grid">
          {/* Info */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '20px',
              padding: '32px',
            }}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#111827', marginBottom: '24px' }}>
                Informações de Contato
              </h3>
              {[
                {
                  icon: WhatsAppIcon,
                  label: 'WhatsApp',
                  value: '(16) 99690-2000',
                  href: 'https://wa.me/5516996902000',
                },
                {
                  icon: Phone,
                  label: 'Telefone',
                  value: '(16) 99690-2000',
                  href: 'tel:+5516996902000',
                },
                {
                  icon: Phone,
                  label: 'Telefone',
                  value: '(16) 99179-0087',
                  href: 'tel:+5516991790087',
                },
                {
                  icon: Mail,
                  label: 'E-mail',
                  value: 'contato@ergonoseg.com.br',
                  href: 'mailto:contato@ergonoseg.com.br',
                },
                {
                  icon: MapPin,
                  label: 'Endereço',
                  value: 'Rua Sargento Sílvio Delmar Hollenbach, 865 — sala 21 — Ribeirão Preto · Atendimento Nacional',
                  href: 'https://maps.google.com/?q=Rua+Sargento+S%C3%ADlvio+Delmar+Hollenbach+865+Ribeir%C3%A3o+Preto',
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={`${label}-${value}`}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', gap: '16px', marginBottom: '20px', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{
                    width: '44px', height: '44px', flexShrink: 0,
                    background: 'rgba(26,92,56,0.1)',
                    border: '1px solid rgba(26,92,56,0.25)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color="#1a5c38" />
                  </div>
                  <div>
                    <div style={{ color: '#6b7280', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{label}</div>
                    <div style={{ color: '#111827', fontWeight: 500, fontSize: '0.95rem' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust indicators */}
            <div style={{
              background: 'rgba(34,197,94,0.07)',
              border: '1px solid rgba(34,197,94,0.2)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <p style={{ color: '#1a5c38', fontWeight: 700, fontSize: '0.9rem', marginBottom: '12px' }}>✓ Compromisso Ergonoseg</p>
              {[
                'Orçamento gratuito e sem compromisso',
                'Resposta em até 2 horas úteis',
                'Equipe técnica habilitada e certificada',
                'Sigilo garantido das informações',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle size={15} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#374151', fontSize: '0.85rem' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal delay-200">
            {submitted ? (
              <div style={{
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '20px',
                padding: '60px 40px',
                textAlign: 'center',
              }}>
                <CheckCircle size={56} color="#22c55e" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
                  Mensagem enviada!
                </h3>
                <p style={{ color: '#9ca3af' }}>
                  Você será redirecionado ao WhatsApp. Nossa equipe entrará em contato em breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '24px', background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#9ca3af', padding: '8px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem' }}
                >
                  Enviar outro orçamento
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '20px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Nome completo *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      placeholder="João Silva"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#1a5c38')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#d1d5db')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Nome da empresa *
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      required
                      type="text"
                      placeholder="Empresa Ltda."
                      value={form.company}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#1a5c38')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#d1d5db')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      E-mail *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      placeholder="joao@empresa.com.br"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#1a5c38')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#d1d5db')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#6b7280', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={form.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#1a5c38')}
                      onBlur={e => (e.currentTarget.style.borderColor = '#d1d5db')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Serviço desejado *
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1a5c38')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#d1d5db')}
                  >
                    <option value="" style={{ background: '#ffffff' }}>Selecione um serviço...</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ background: '#ffffff' }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#9ca3af', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Descreva brevemente sua necessidade ou dúvida..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1a5c38')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#d1d5db')}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-primary"
                  style={{ marginTop: '4px', width: '100%', justifyContent: 'center' }}
                >
                  <Send size={18} />
                  Solicitar Orçamento Gratuito
                </button>
                <p style={{ color: '#4b5563', fontSize: '0.78rem', textAlign: 'center' }}>
                  Ao enviar, você será direcionado ao nosso WhatsApp. Nenhum dado é compartilhado com terceiros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
