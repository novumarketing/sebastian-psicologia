const steps = [
  {
    number: '01',
    title: 'Evaluación y psicoeducación',
    description:
      'Identificamos juntos los patrones de pensamiento, emociones y conductas que generan malestar. Te explico cómo se relacionan entre sí para que entiendas tu propio proceso.',
  },
  {
    number: '02',
    title: 'Reestructuración cognitiva',
    description:
      'Aprendemos a detectar pensamientos automáticos negativos y a cuestionarlos con evidencia real. No se trata de "pensar positivo", sino de pensar con precisión.',
  },
  {
    number: '03',
    title: 'Intervención conductual',
    description:
      'Diseñamos estrategias concretas de acción: exposición gradual, activación conductual, técnicas de relajación y habilidades de afrontamiento adaptadas a tu situación.',
  },
  {
    number: '04',
    title: 'Consolidación y autonomía',
    description:
      'Integramos las herramientas para que sean tuyas permanentemente. El objetivo final es que no me necesites: que seas tu propio terapeuta.',
  },
]

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: 'Evidencia científica',
    desc: 'Más de 600 estudios clínicos avalan su efectividad en ansiedad, depresión y fobias.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Resultados en tiempo definido',
    desc: 'Protocolo estructurado con metas claras. Sabes qué esperar en cada etapa del proceso.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    label: 'Herramientas prácticas',
    desc: 'Técnicas concretas aplicables fuera del consultorio desde la primera sesión.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: 'Recomendada por la OMS',
    desc: 'La Organización Mundial de la Salud la reconoce como tratamiento de primera línea.',
  },
]

const stats = [
  { value: '60+', label: 'años de investigación clínica' },
  { value: '80%', label: 'tasa de mejoría en depresión' },
  { value: '1ª', label: 'línea de tratamiento OMS' },
]

export default function TCC() {
  return (
    <section id="tcc" className="bg-slate-900 py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900 opacity-20 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 opacity-10 rounded-full -translate-x-1/3 translate-y-1/3" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-primary-300 text-xs font-semibold uppercase tracking-widest">Enfoque Terapéutico</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Terapia<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary-300">Cognitivo-Conductual</span></h2>
            <p className="mt-6 text-slate-400 leading-relaxed text-lg maw-w-md">El enfoque psicoterapéutico con mayor respaldo científico en el mundo. Actúa directamente sobre los pensamientos, emociones y conductas que mantienen el malestar.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">{stats.map((s) => (<div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm"><p className="text-3xl font-bold text-white">{s.value}</p><p className="text-xs text-slate-400 mt-2 leading-snug">{s.label}</p></div>))}</div>
        </div>
        <div className="mb-20"><p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">Metodología de trabajo</p><div className="grid md:grid-cols-2 gap-4">{steps.map((step,i) => (<div key={step.number} className="group relative bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-primary-500/40 rounded-2xl p-7 transition-all duration-300 cursor-default"><div className="flex items-start gap-5"><span className="flex-shrink-0 text-5xl font-black text-white/[0.06] group-hover:text-primary-500/20 transition-colors leading-none select-none">{step.number}</span><div><h3 className="text-white font-semibold text-base mb-2 group-hover:text-primary-200 transition-colors">{step.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{step.description}</p></div></div><div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-primary-500/0 group-hover:via-primary-500/50 to-transparent transition-all duration-500" /></div>))}</div></div>
        <div className="border-t border-white/[0.06] pt-14"><p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">Por qué funciona</p><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{pillars.map((p) => (<div key={p.label} className="flex flex-col gap-3"><div className="w-10 h-10 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">{p.icon}</div><p className="text-white font-medium text-sm">{p.label}</p><p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p></div>))}</div></div>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary-900/60 to-primary-800/40 border border-primary-700/30 rounded-2xl px-8 py-6"><div><p className="text-white font-semibold text-lg">¿Listo para empezar?</p><p className="text-slate-400 text-sm mt-1">Primera sesión de valoración sin compromiso.</p></div><a href="#cita" className="flex-shrink-0 bg-white text-primary-900 font-semibold px-7 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg shadow-primary-900/40">Agendar consulta</a></div>
      </div>
    </section>
  )
}
