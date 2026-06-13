import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sebastian-psicologia.vercel.app'),
  title: 'Psic. Sebastián Escorza | Psicólogo TCC y ACC en Hidalgo',
  description:
    'Recupera tu bienestar mental con Terapia Cognitivo-Conductual (TCC) y Aceptación y Compromiso (ACC). Atención profesional, empática y basada en evidencia. Consulta presencial en Tulancingo y Pachuca o en línea. Agenda tu primera cita.',
  keywords: ['psicólogo', 'terapia TCC', 'terapia ACC', 'psicoterapia', 'Tulancingo', 'Pachuca', 'Hidalgo', 'ansiedad', 'depresión', 'terapia de pareja'],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://sebastian-psicologia.vercel.app',
    siteName: 'Psic. Sebastián Escorza',
    title: 'Psicoterapia TCC y ACC | Psic. Sebastián Escorza',
    description:
      'Terapia individual, de pareja y manejo de crisis con enfoque en TCC y ACC. Consulta presencial en Tulancingo y Pachuca o en línea.',
    images: [
      {
        url: '/sebastian.jpg',
        width: 1024,
        height: 1280,
        alt: 'Psic. C. Sebastián Escorza Reyes, psicólogo TCC y ACC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicoterapia TCC y ACC | Psic. Sebastián Escorza',
    description:
      'Recupera tu bienestar mental con terapia basada en evidencia. Presencial en Hidalgo o en línea.',
    images: ['/sebastian.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased text-slate-800 bg-white">{children}</body>
    </html>
  )
}
