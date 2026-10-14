import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/medicao'

const ORIGIN = 'https://ergonoseg.com.br'
const HOME_TITLE = 'Ergonoseg — Segurança do Trabalho, Ergonomia e Prevenção de Incêndio'

// O título das demais rotas é definido na própria página; aqui ficam canonical, og:url e description.
const DESCRIPTIONS: Record<string, string> = {
  '/': 'A Ergonoseg oferece assessoria especializada em Segurança do Trabalho, Ergonomia (NR-17) e Prevenção de Incêndio. PGR, PCMSO, LTCAT, treinamentos NR e laudos técnicos para empresas em todo o Brasil.',
  '/quem-somos': 'Conheça a Ergonoseg: assessoria em Segurança do Trabalho, Ergonomia e Prevenção de Incêndio, com atendimento nacional a empresas.',
  '/cursos/pericia-judicial': 'Curso de formação de Perito Judicial e Assistente Técnico, pela Ergonoseg.',
  '/cursos/pericia-assistencia-ergonomia': 'Curso de Perícia e Assistência Técnica em Ergonomia, pela Ergonoseg.',
  '/politica-de-privacidade': 'Política de Privacidade da Ergonoseg: como tratamos dados pessoais e cookies neste site.',
  '/termos-de-uso': 'Termos de Uso do site da Ergonoseg.',
  '/lgpd': 'Proteção de dados e direitos do titular (LGPD) na Ergonoseg.',
}

function upsert(selector: string, tag: 'link' | 'meta', key: [string, string], attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = document.createElement(tag)
    el.setAttribute(key[0], key[1])
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export default function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
    const url = ORIGIN + path
    if (path === '/') document.title = HOME_TITLE
    upsert('link[rel="canonical"]', 'link', ['rel', 'canonical'], 'href', url)
    upsert('meta[property="og:url"]', 'meta', ['property', 'og:url'], 'content', url)
    const desc = DESCRIPTIONS[path]
    if (desc) upsert('meta[name="description"]', 'meta', ['name', 'description'], 'content', desc)
    // efeito do pai roda depois dos das páginas (filhos): o título já está atualizado
    trackPageView()
  }, [pathname])

  return null
}
