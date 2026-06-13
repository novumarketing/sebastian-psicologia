export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Visual placeholder */}
        <div className="relative">
          <div className="w-full aspect-square max-w-sm mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center shadow-xl">
            {/* Replace with <Image src="/foto.jpg" ... /> when a photo is available */}
            <svg className="w-32 h-32 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-500">Especialidad</p>
              <p className="text-sm font-semibold text-slate-800">Psicoterapia ACC</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Sobre mí</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
            Acompañamiento profesional con base científica
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Soy Mtro. C. Sebastián Escorza Reyes, psicoterapeuta con especialización en{ ' '}
            <strong className="text-slate-800">Terapia de Aceptación y Compromiso (ACC)</strong>, un enfoque de
            tercera generación respaldado por amplia evidencia científica.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Mi trabajo se centra en ayudarte a desarrollar flexibilidad psicológica: la capacidad de estar en
            contacto pleno con el momento presente y actuar de acuerdo a lo que verdaderamente importa para ti,
            incluso en presencia de pensamientos o emociones difíciles.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              'Terapia individual',
              'Terapia de pareja',
              'Manejo de crisis',
              'Flexibilidad psicológica',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-700">
                <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#cita"
            className="mt-8 inline-block bg-primary-700 text-white font-semibold px-7 py-3 rounded-full hover:bg-primary-800 transition-colors"
          >
            Solicitar consulta
          </a>
        </div>
      </div>
    </section>
  )
}
