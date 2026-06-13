'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'TCC', href: '/tcc' },
  { label: 'Consultorios', href: '/consultorios' },
  { label: 'Agendar cita', href: '/cita' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const t = isHome && !scrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t ? 'bg-transparent' : 'bg-white shadow-md'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className={`font-semibold text-sm tracking-wide ${t ? 'text-white' : 'text-primary-700'}`}>Mtro. Sebastián Escorza</span>
          <span className={`text-xs ${t ? 'text-blue-100' : 'text-slate-500'}`}>Psicoterapia ACC · TCC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                t ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-primary-700'
              } ${link.label === 'Agendar cita' ? (t ? 'bg-white/20 text-white px-4 py-1.5 rounded-full hover:bg-white/30' : 'bg-primary-700 text-white px-4 py-1.5 rounded-full hover:bg-primary-800') : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className={`md:hidden p-2 ${t ? 'text-white' : 'text-slate-700'}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-slate-700 font-medium hover:text-primary-700 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
