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
  // aceite na rota atual: o RouteMeta já rodou sem consentimento, então o page_view sai aqui
  if (v === 'granted' && loadGA()) trackPageView()
}

// A tag gtag.js é carregada no index.html (Consent Mode v2, analytics_storage negado por padrão).
// Aqui só concedemos o consentimento; o page_view de cada rota é enviado pelo RouteMeta.
export function loadGA(): boolean {
  if (loaded || typeof window.gtag !== 'function') return false
  loaded = true
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
  return true
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
