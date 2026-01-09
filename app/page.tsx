import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import Solution from '@/components/sections/Solution'
import Process from '@/components/sections/Process'
import Results from '@/components/sections/Results'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Process />
        <Results />
        <Pricing />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}



