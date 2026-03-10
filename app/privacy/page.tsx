import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { PrivacyContent } from '@/components/legal/LegalContent'

export const metadata: Metadata = {
  title: 'Privacy Policy | DM Growth',
  description: 'Privacy policy for DM Growth services by DataModulator.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-28 pb-20">
        <Container>
          <div className="max-w-[720px] mx-auto text-[15px] leading-[1.7] text-primary-300">
            <PrivacyContent />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
