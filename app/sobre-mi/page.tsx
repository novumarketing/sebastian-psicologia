import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sobre mí | Psic. Sebastián Escorza',
  description: 'Conoce al Psic. C. Sebastián Escorza Reyes, psicólogo especializado en ACC.',
}

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  )
}
