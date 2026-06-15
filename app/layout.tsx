import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://sebastian-psicologia.vercel.app'),
  title: 'Psic. Sebastián Escorza | Psicólogo TCC y ACT en Hidalgo',
  description:
    'Recupera tu bienestar mental con Terapia Cognitivo-Conductual (TCC) y Aceptación y Compromiso (ACT). Atención profesional, empática y basada en evidencia. Consulta presencial en Tulancingo y Pachuca o en línea. Agenda tu primera cita.',
  keywords: ['psicólogo', 'terapia TCC', 'terapia ACT', 'psicoterapia', 'Tulancingo', 'Pachuca', 'Hidalgo', 'ansiedad', 'depresión', 'terapia de pareja'],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://sebastian-psicologia.vercel.app',
    siteName: 'Psic. Sebastián Escorza',
    title: 'Psicoterapia TCC y ACT | Psic. Sebastián Escorza',
    description:
      'Terapia individual, de pareja y manejo de crisis con enfoque en TCC y ACT. Consulta presencial en Tulancingo y Pachuca o en línea.',
    images: [
      {
        url: '/sebastian.jpg',
        width: 1024,
        height: 1280,
        alt: 'Psic. C. Sebastián Escorza Reyes, psicólogo TCC y ACT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicoterapia TCC y ACT | Psic. Sebastián Escorza',
    description:
      'Recupera tu bienestar mental con terapia basada en evidencia. Presencial en Hidalgo o en línea.',
    images: ['/sebastian.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Psic. C. Sebastián Escorza Reyes',
  description:
    'Psicólogo clínico especializado en Terapia Cognitivo-Conductual (TCC) y Terapia de Aceptación y Compromiso (ACT).',
  knowsAbout: [
    'Psicología clínica',
    'Terapia Cognitivo-Conductual (TCC)',
    'Terapia de Aceptación y Compromiso (ACT)',
    'Ansiedad',
    'Depresión',
    'Terapia de pareja',
  ],
  url: 'https://sebastian-psicologia.vercel.app',
  image: 'https://sebastian-psicologia.vercel.app/sebastian.jpg',
  telephone: '+52 775 214 2603',
  priceRange: '$$',
  areaServed: { '@type': 'State', name: 'Hidalgo, México' },
  availableService: [
    { '@type': 'MedicalTherapy', name: 'Terapia Cognitivo-Conductual (TCC)' },
    { '@type': 'MedicalTherapy', name: 'Terapia de Aceptación y Compromiso (ACT)' },
    { '@type': 'MedicalTherapy', name: 'Terapia individual y de pareja' },
  ],
  department: [
    {
      '@type': 'MedicalClinic',
      name: 'Medical Center Jardines del Sur',
      telephone: '+52 775 214 2603',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tulancingo',
        addressRegion: 'Hidalgo',
        addressCountry: 'MX',
      },
    },
    {
      '@type': 'MedicalClinic',
      name: 'Hospital Intermédica',
      telephone: '+52 775 214 2603',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pachuca',
        addressRegion: 'Hidalgo',
        addressCountry: 'MX',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased text-slate-800 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
