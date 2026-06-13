import Link from 'next/link'

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Photo */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] max-w-sm mx-auto lg:mx-0 bg-primary-100">
            <img
              src="/sebastian.jpg"
              alt="Mtro. C. Sebastian Escorza Reyes"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 right-0 lg:-right-4 bg-white rounded-xl p-4 shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 1 9 9 0 0118 1z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-500">Especialidad</p>
              <p className="text-sm font-semibold text-slate-800">Psicoterapia ACC</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">SOBRE MI</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Acompañamiento profesional con base científica
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Soy Mtro. C. Sebastian Escorza Reyes, psicoterapeuta con
            especializacion en <strong className="text-slate-800">Terapia de Aceptacion y Compromiso (ACC)</strong>, un
            enfoque de tercera generacion respaldado por amplia evidencia
            cientifica.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Mi trabajo se centra en ayudarte a desarrollar flexibilidad psicologica: la
            capacidad de estar en contacto pleno con el momento presente y actuar
            de acuerdo a lo que verdaderamente importa para ti, incluso en presencia
            de pensamientos o emociones dificiles.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              'Terapia individual',
              'Terapia de pareja',
              'Manejo de crisis',
              'Flexibilidad psicologica',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/cita"
            className="inline-flex items-center gap-2 bg-primary-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-800 hover:scale-105 hover:shadow-lg transition-all"
          >
            Solicitar consulta
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
