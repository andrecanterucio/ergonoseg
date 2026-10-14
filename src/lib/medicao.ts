// GA4 com consentimento (LGPD) + eventos. Padrão ZACDA (skill-medicao-lp).
// O GA4 só carrega depois do "Aceitar"; a escolha fica no localStorage.
const GA_ID = 'G-YT660K9FQL' // ID de medição da propriedade "Ergonoseg - Site"
const KEY = 'ergonoseg_consent'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

let loaded = false

export function getConsent(): 'granted' | 'denied' | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function setConsent(v: 'granted' | 'denied') {
  try { localStorage.setItem(KEY, v) } catch { /* sem storage: não persiste */ }
  if (v === 'granted') loadGA()
}

export function loadGA() {
  if (loaded || !GA_ID || GA_ID.includes('XXXX')) return
  loaded = true
  window.dataLayer = window.dataLayer || []
  // gtag.js exige o objeto `arguments`, não um array
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function () { window.dataLayer.push(arguments) }
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
  window.gtag('js', new Date())
  // SPA: page_view é enviado a cada rota (trackPageView)
  window.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false })
  trackPageView()
}

export function track(name: string, params: Record<string, unknown> = {}) {
  if (!loaded || typeof window.gtag !== 'function') return
  try { window.gtag('event', name, { page_path: location.pathname, ...params }) } catch { /* noop */ }
}

export function trackPageView() {
  track('page_view', { page_location: location.href, page_title: document.title })
}

export function initMedicao() {
  if (getConsent() === 'granted') loadGA()
  document.addEventListener('click', e => {
    const a = (e.target as Element | null)?.closest?.('a')
    if (!a) return
    const h = a.getAttribute('href') || ''
    const loc = a.closest('section')?.id || 'pagina'
    if (/wa\.me|whatsapp:/.test(h)) track('whatsapp_click', { link_location: loc })
    else if (h.startsWith('mailto:')) track('email_click', { link_location: loc })
    else if (/instagram\.com|linkedin\.com|facebook\.com/.test(h)) track('social_click', { link_url: h })
  }, true)
}
