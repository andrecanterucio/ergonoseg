import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent } from '../lib/medicao'

export default function CookieNotice() {
  const [open, setOpen] = useState(() => getConsent() === null)
  if (!open) return null

  const choose = (v: 'granted' | 'denied') => {
    setConsent(v)
    setOpen(false)
  }

  return (
    <div id="cookie-notice" role="dialog" aria-label="Aviso de cookies">
      <p>
        Usamos cookies de medição para entender como o site é usado e melhorar o atendimento.
        Saiba mais na <Link to="/politica-de-privacidade">política de privacidade</Link>.
      </p>
      <div>
        <button type="button" onClick={() => choose('denied')}>Recusar</button>
        <button type="button" className="ok" onClick={() => choose('granted')}>Aceitar</button>
      </div>
    </div>
  )
}
