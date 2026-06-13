import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
