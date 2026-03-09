import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import MIHero from '@/components/sections/market-intelligence/MIHero'
import MIProblem from '@/components/sections/market-intelligence/MIProblem'
import MIProcess from '@/components/sections/market-intelligence/MIProcess'
import MIProof from '@/components/sections/market-intelligence/MIProof'
import MIDeliverable from '@/components/sections/market-intelligence/MIDeliverable'
import MIPricing from '@/components/sections/market-intelligence/MIPricing'
import MIFAQ from '@/components/sections/market-intelligence/MIFAQ'

export const metadata: Metadata = {
  title: 'Market Intelligence | DM Growth',
  description:
    'Structured market intelligence built from live buying signals. Prioritized company lists, competitor deduplication, and timing windows, delivered as an Excel workbook you keep.',
  openGraph: {
    title: 'Market Intelligence | DM Growth',
    description:
      'Know exactly who needs you before you send a single email.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function MarketIntelligencePage() {
  return (
    <>
      <Navigation />
      <main>
        <MIHero />
        <MIProblem />
        <MIProcess />
        <MIProof />
        <MIDeliverable />
        <MIPricing />
        <MIFAQ />
      </main>
      <Footer />
    </>
  )
}
