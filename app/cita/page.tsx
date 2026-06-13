import Navbar from '@/components/Navbar'
import Appointments from '@/components/Appointments'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Agendar cita | Psic. Sebastián Escorza',
  description: 'Agenda tu primera consulta de psicoterapia.',
}

export default function CitaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Appointments />
      </main>
      <Footer />
    </>
  )
}
