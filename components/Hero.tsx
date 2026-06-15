import Link from 'next/link'

export default function Hero() {
  const stats = [
    { value: '3', label: 'Años de experiencia' },
    { value: '200+', label: 'Pacientes atendidos' },
    { value: '2', label: 'Consultorios en Hidalgo' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay:'2s'}} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" aria-hidden="true" />
              Consultas presenciales y en línea disponibles
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Recupera tu
              <span className="block text-primary-200">bienestar mental</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-3 font-light">
              Psic. C. Sebastián Escorza Reyes
            </p>
            <p className="text-base md:text-lg text-primary-100 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Psicólogo especialista en Terapia Cognitivo-Conductual (TCC) con Aceptación y Compromiso (ACT). Atención profesional, empática y basada en evidencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/cita"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 font-semibold px-8 py-4 rounded-full hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agendar cita ahora
              </Link>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Conocer más
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
            <div className="absolute -inset-4 bg-primary-400/20 rounded-[2rem] blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20 aspect-[4/5] bg-primary-800">
              <img src="/sebastian.jpg" alt="Psic. C. Sebastián Escorza Reyes" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/20 pt-8 max-w-2xl mx-auto lg:mx-0">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-primary-100 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
