'use client'

import React, { useState } from 'react'

interface FormData {
  name: string
  phone: string
  service: string
  location: string
  message: string
}

export default function Appointments() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', service: '', location: '', message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      'Hola Mtro. Sebastián, me gustaría agendar una cita.' +
      String.fromCharCode(10) + String.fromCharCode(10) +
      'Nombre: ' + form.name +
      String.fromCharCode(10) + 'Teléfono: ' + form.phone +
      String.fromCharCode(10) + 'Servicio: ' + form.service +
      String.fromCharCode(10) + 'Consultorio: ' + form.location +
      (form.message ? String.fromCharCode(10) + String.fromCharCode(10) + 'Mensaje: ' + form.message : '')
    )
    window.open('https://wa.me/527752142603?text=' + msg, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Mensaje enviado</h2>
          <p className="text-slate-600 mb-6">Se abrio WhatsApp con tu solicitud. Recibiras confirmacion en breve.</p>
          <button onClick={() => setSent(false)} className="text-primary-700 font-medium hover:underline">
            Enviar otra solicitud
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">AGENDA TU CITA</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Da el primer paso hacia tu bienestar
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            Llena el formulario y te contactare por WhatsApp para confirmar
            fecha, hora y consultorio. La primera sesion incluye una
            valoracion inicial sin costo adicional.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl border border-primary-100">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-primary-500 font-medium">WhatsApp / Llamadas</p>
                <p className="text-slate-800 font-semibold">7752142603</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Consultorios en</p>
                <p className="text-slate-800 font-semibold">Pachuca, Hidalgo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleWhatsApp} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre completo *</label>
              <input
                name="name" required value={form.name} onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-800 placeholder-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Telefono / WhatsApp *</label>
              <input
                name="phone" required value={form.phone} onChange={handleChange}
                placeholder="Tu numero"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-800 placeholder-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Servicio *</label>
              <select
                name="service" required value={form.service} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-800 bg-white"
              >
                <option value="">Selecciona un servicio</option>
                <option value="Terapia individual">Terapia individual</option>
                <option value="Terapia de pareja">Terapia de pareja</option>
                <option value="Intervencion en crisis">Intervencion en crisis</option>
                <option value="Evaluacion inicial">Evaluacion inicial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Consultorio preferido *</label>
              <select
                name="location" required value={form.location} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-800 bg-white"
              >
                <option value="">Selecciona un consultorio</option>
                <option value="Medical Center Jardines del Sur">Medical Center Jardines del Sur</option>
                <option value="Hospital Intermedica Pachuca">Hospital Intermedica Pachuca</option>
                <option value="En linea">En linea (videollamada)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mensaje (opcional)</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Cuentame brevemente que te trae aqui..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-slate-800 placeholder-slate-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar por WhatsApp
            </button>
            <p className="text-center text-xs text-slate-400">Se abrira WhatsApp con tu solicitud preparada.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
