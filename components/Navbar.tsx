'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'TCC', href: '#tcc' },
  { label: 'Consultorios', href: '#consultorios' },
  { label: 'Agendar cita', href: '#cita' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / name */}
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className={`font-semibold text-sm tracking-wide ${scrolled ? 'text-primary-700' : 'text-white'}`}>
            Mtro. Sebastián Escorza
          </span>
          <span className={`text-xs ${scrolled ? 'text-slate-500' : 'text-blue-100'}`}>
            Psicoterapia ACC · TCC
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-slate-600 hover:text-primary-700'
                  : 'text-white/90 hover:text-white'
              } ${link.label === 'Agendar cita' ? (scrolled ? 'bg-primary-700 text-white px-4 py-1.5 rounded-full hover:bg-primary-800' : 'bg-white/20 text-white px-4 py-1.5 rounded-full hover:bg-white/30') : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 font-medium hover:text-primary-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
