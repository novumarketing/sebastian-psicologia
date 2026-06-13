const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 1zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Terapia Individual',
    description:
      'Espacio seguro y confidencial para trabajar tus dificultades emocionales, patrones de comportamiento y metas personales. El proceso terapéutico se adapta a tu ritmo y necesidades.',
    highlights: ['Ansiedad y estrés', 'Depresión', 'Baja autoestima', 'Duelo', 'Problemas conductuales'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 1z" />
      </svg>
    ),
    title: 'Terapia para Parejas',
    description:
      'Proceso estructurado para mejorar la comunicación, resolver conflictos y fortalecer el vínculo de pareja. Se trabaja con ambas perspectivas desde un enfoque neutral y basado en evidencia.',
    highlights: ['Comunicación efectiva', 'Resolución de conflictos', 'Intimidad y conexión', 'Infidelidad', 'Crisis de pareja'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Manejo de Crisis',
    description:
      'Intervención especializada para situaciones de crisis emocional o psicológica aguda. Atención rápida y estructurada para estabilizar, contener y generar un plan de acción claro.',
    highlights: ['Crisis de ansiedad', 'Ideación suicida', 'Crisis de duelo', 'Trauma agudo', 'Descompensación emocional'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Servicios</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">¿En qué puedo ayudarte?</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Ofrezco diferentes modalidades terapéuticas, todas bajo el enfoque ACC,
            adaptadas a las necesidades específicas de cada persona.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-slate-50 rounded-2xl p-7 hover:bg-primary-700 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center text-primary-700 group-hover:text-white transition-colors mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 group-hover:text-primary-100 transition-colors leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-primary-200 transition-colors">
                    <span className="w-1.5 h-1.5 bg-primary-400 group-hover:bg-primary-300 rounded-full flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
