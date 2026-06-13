export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-slate-800 overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-700 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        {/* Badge */}
        <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Psicoterapia Especializada · ACC
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Mtro. C. Sebastián
          <br />
          <span className="text-blue-300">Escorza Reyes</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Psicólogo especializado en Terapia de Aceptación y Compromiso (ACC).
          Acompañamiento profesional para vivir una vida más plena, flexible y significativa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cita"
            className="bg-white text-primary-800 font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            Agendar consulta
          </a>
          <a
            href="#sobre-mi"
            className="border border-white/40 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
          >
            Conocer más
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-white/10 pt-10">
          {[
            { value: 'ACC', label: 'Enfoque terapéutico' },
            { value: '3', label: 'Modalidades de atención' },
            { value: '2', label: 'Consultorios' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-blue-200 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
