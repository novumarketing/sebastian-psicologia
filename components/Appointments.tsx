'use client'

import React, { useState } from 'react'

const PHONE = '7752142603'
const WA_NUMBER = '527752142603'

type FormData = {
  name: string
  phone: string
  service: string
  location: string
  message: string
}

export default function Appointments() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', service: '', location: '', message: '' })
  const [sent, setSent] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`Hola Mtro. Sebasti\u00e1n, me gustar\u00eda agendar una cita.\n\n*Nombre:* ${form.name}\n*Tel\u00e9fono:* ${form.phone}\n*Servicio:* ${form.service}\n*Consultorio:* ${form.location}\n${form.message ? `*Mensaje:* ${form.message}` : ''}`)
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
    setSent(true)
  }
  return (
    <section id="cita" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <span className="text-primary-600 text-sm font-semibold uppercase tracking-widest">Agenda tu cita</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">Da el primer paso hacia tu bienestar</h2>
          <p className="mt-5 text-slate-500 leading-relaxed">Llena el formulario y te contactar\u00e9 por WhatsApp para confirmar fecha, hora y consultorio. La primera sesi\u00f3n incluye una valoraci\u00f3n inicial sin costo adicional.</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967s-.471-.148-.67.15c-.197.297-.767.966-.94 1.164s-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059s-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497s.05-.371-.025-.52s-.669-1.612-.916-2.207s-.487-.5-.669-.51s-.371-.01-.57-.01s-.52.074-.792.372s-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625s.712.227 1.36.195s1.758-.719 2.006-1.413s.248-1.289.173-1.413s-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </div>
              <div><p className="text-xs text-slate-500">WhatsApp / Llamadas</p><a href={`tel:${PHONE}`} className="font-semibold text-slate-800 hover:text-primary-700 transition-colors">{PHONE}</a></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div><p className="text-xs text-slate-500">Consultorios en</p><p className="font-semibold text-slate-800">Pachuca, Hidalgo</p></div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">\u00a1Mensaje enviado!</h3>
              <p className="text-slate-500 text-sm mb-6">Tu solicitud fue enviada por WhatsApp. El Mtro. Sebasti\u00e1n te contactar\u00e1 pronto.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', phone: '', service: '', location: '', message: '' }) }} className="text-primary-700 font-medium hover:underline text-sm">Enviar otra solicitud</button>
            </div>
          ) : (
            <form onSubmit={handleWhatsApp} className="space-y-5">
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre completo *</label><input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Tu nombre" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white placeholder-slate-300" /></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Tel\u00e9fono / WhatsApp *</label><input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="Tu n\u00famero" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white placeholder-slate-300" /></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Servicio *</label><select name="service" required value={form.service} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"><option value="">Selecciona un servicio</option><option value="Terapia individual">Terapia individual</option><option value="Terapia para parejas">Terapia para parejas</option><option value="Manejo de crisis">Manejo de crisis</option></select></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Consultorio preferido *</label><select name="location" required value={form.location} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"><option value="">Selecciona un consultorio</option><option value="Medical Center Jardines del Sur">Medical Center Jardines del Sur</option><option value="Hospital Interm\u00e9dica Pachuca">Hospital Interm\u00e9dica Pachuca</option></select></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Mensaje (opcional)</label><textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Cu\u00e9ntame brevemente qu\u00e9 te trae aqu\u00ed..." className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white placeholder-slate-300 resize-none" /></div>
              <button type="submit" className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2">Enviar por WhatsApp</button>
              <p className="text-xs text-center text-slate-400">Se abrir\u00e1 WhatsApp con tu solicitud prellenada.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
