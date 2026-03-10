import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ApproachHero from '@/components/sections/approach/ApproachHero'
import TrustDeficit from '@/components/sections/approach/TrustDeficit'
import IaaSModel from '@/components/sections/approach/IaaSModel'
import IdentityWriting from '@/components/sections/approach/IdentityWriting'
import CulturalRouting from '@/components/sections/approach/CulturalRouting'
import OwnershipComparison from '@/components/sections/approach/OwnershipComparison'
import CompoundingEffect from '@/components/sections/approach/CompoundingEffect'
import ApproachCTA from '@/components/sections/approach/ApproachCTA'
import TrackHighIntent from '@/components/analytics/TrackHighIntent'

export const metadata: Metadata = {
  title: 'How We\'re Different | DM Growth',
  description:
    'We\'re not an agency. We install revenue infrastructure you own. Here\'s exactly how the model works and why it matters.',
  openGraph: {
    title: 'How We\'re Different | DM Growth',
    description:
      'Infrastructure ownership vs. agency dependency. The shift from renting pipeline to owning it.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function ApproachPage() {
  return (
    <>
      <TrackHighIntent page="/approach" />
      <Navigation />
      <main>
        <ApproachHero />
        <TrustDeficit />
        <IaaSModel />
        <IdentityWriting />
        <CulturalRouting />
        <OwnershipComparison />
        <CompoundingEffect />
        <ApproachCTA />
      </main>
      <Footer />
    </>
  )
}
