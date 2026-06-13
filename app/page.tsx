import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import TCC from '@/components/TCC'
import Locations from '@/components/Locations'
import Appointments from '@/components/Appointments'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TCC />
        <Locations />
        <Appointments />
      </main>
      <Footer />
    </>
  )
}
