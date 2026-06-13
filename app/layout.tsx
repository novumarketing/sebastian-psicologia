import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mtro. Sebastián Escorza | Psicoterapia ACC',
  description:
    'Psicoterapia especializada en Aceptación y Compromiso. Terapia individual, de pareja y manejo de crisis en Pachuca. Consultorios en Medical Center Jardines del Sur y Hospital Intermédica.',
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
