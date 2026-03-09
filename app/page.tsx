import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import Pillars from '@/components/sections/Pillars'
import Signals from '@/components/sections/Signals'
import Infrastructure from '@/components/sections/Infrastructure'
import Markets from '@/components/sections/Markets'
import StartHere from '@/components/sections/StartHere'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problems />
        <Pillars />
        <Signals />
        <Infrastructure />
        <Markets />
        <StartHere />
      </main>
      <Footer />
    </>
  )
}
