import Navbar from '@/components/Navbar'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Consultorios | Mtro. Sebastián Escorza',
  description: 'Consultorios en Pachuca, Hidalgo: Medical Center Jardines del Sur y Hospital Intermédica.',
}

export default function ConsultoriosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Locations />
      </main>
      <Footer />
    </>
  )
}
