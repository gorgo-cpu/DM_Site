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

export const metadata: Metadata = {
  title: 'How We\'re Different | DM Growth',
  description:
    'Infrastructure you own, not services you rent. See how our approach to outbound differs from traditional agencies.',
  openGraph: {
    title: 'How We\'re Different | DM Growth',
    description:
      'Infrastructure you own, not services you rent. See how our approach to outbound differs from traditional agencies.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function ApproachPage() {
  return (
    <>
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
