// GA4 com consentimento (LGPD) + eventos. Padrão ZACDA (skill-medicao-lp).
// Consent Mode v2: cookies/identificação do GA4 só após o "Aceitar"; a escolha fica no localStorage.
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

// A tag gtag.js é carregada no index.html (Consent Mode v2, analytics_storage negado por padrão).
// Aqui só concedemos o consentimento; page_view é enviado a cada rota (trackPageView).
export function loadGA() {
  if (loaded || typeof window.gtag !== 'function') return
  loaded = true
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
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
