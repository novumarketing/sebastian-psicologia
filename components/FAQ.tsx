export default function FAQ() {
  const faqs = [
    {
      q: '¿Cuánto dura cada sesión?',
      a: 'Cada sesión tiene una duración aproximada de 50 a 60 minutos. La frecuencia (semanal o quincenal) se define contigo según tus objetivos y el momento de tu proceso terapéutico.',
    },
    {
      q: '¿Atiendes en línea o de forma presencial?',
      a: 'Ambas modalidades. Puedes elegir consulta presencial en Tulancingo (Medical Center Jardines del Sur) o Pachuca (Hospital Intermédica), o bien sesiones en línea por videollamada desde donde te encuentres.',
    },
    {
      q: '¿En qué consisten tus enfoques terapéuticos?',
      a: 'Trabajo con Terapia Cognitivo-Conductual (TCC) y Terapia de Aceptación y Compromiso (ACC), enfoques respaldados por evidencia científica que te ayudan a identificar patrones de pensamiento, desarrollar flexibilidad psicológica y actuar de acuerdo con lo que realmente importa para ti.',
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Preguntas frecuentes</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Resuelve tus dudas</h2>
          <p className="mt-4 text-slate-500">Todo lo que necesitas saber antes de tu primera consulta.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-semibold text-slate-800 marker:hidden">
                <span>{item.q}</span>
                <svg className="w-5 h-5 text-primary-600 shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-6 pb-6 -mt-1 text-slate-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
