import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Servicios | Psic. Sebastián Escorza',
  description: 'Terapia individual, de pareja y manejo de crisis en Pachuca, Hidalgo.',
}

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </>
  )
}
