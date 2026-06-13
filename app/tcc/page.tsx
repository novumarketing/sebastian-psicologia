import Navbar from '@/components/Navbar'
import TCC from '@/components/TCC'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terapia Cognitivo-Conductual | Psic. Sebastián Escorza',
  description: 'El enfoque psicoterapéutico con mayor respaldo científico en el mundo.',
}

export default function TCCPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-slate-900">
        <TCC />
      </main>
      <Footer />
    </>
  )
}
