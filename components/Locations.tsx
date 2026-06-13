const locations = [
  {
    name: 'Medical Center Jardines del Sur',
    city: 'Pachuca, Hidalgo',
    description: 'Consultorio en instalaciones médicas con fácil acceso y estacionamiento disponible.',
    mapQuery: 'Medical+Center+Jardines+del+Sur+Pachuca',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0h-2m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
  },
  {
    name: 'Hospital Intermédica',
    city: 'Pachuca, Hidalgo',
    description: 'Atención en el entorno del Hospital Intermédica, con todos los servicios de la institución disponibles.',
    mapQuery: 'Hospital+Intermedica+Pachuca',
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
  },
]
export default function Locations() {
  return (
    <section id="consultorios" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14"><span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Consultorios</span><h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">¿Dónde te atiendo?</h2><p className="mt-4 text-slate-500 max-w-xl mx-auto">Cuento con dos ubicaciones en Pachuca para que elijas la más conveniente para ti.</p></div>
        <div className="grid md:grid-cols-2 gap-8">{locations.map((loc) => (<div key={loc.name} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"><div className="h-48 bg-gradient-to-br from-primary-50 to-slate-100 flex items-center justify-center"><a href={`https://maps.google.com/?q=${loc.mapQuery}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="text-sm font-medium">Ver en Google Maps</span></a></div><div className="p-6"><div className="flex items-start gap-3"><div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 flex-shrink-0">{loc.icon}</div><div><h3 className="font-semibold text-slate-900">{loc.name}</h3><p className="text-sm text-primary-600 font-medium">{loc.city}</p></div></div><p className="mt-4 text-sm text-slate-500 leading-relaxed">{loc.description}</p><a href={`https://maps.google.com/?q=${loc.mapQuery}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary-700 font-medium hover:text-primary-900 transition-colors">Abrir en Maps<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a></div></div>))}</div>
      </div>
    </section>
  )
}
