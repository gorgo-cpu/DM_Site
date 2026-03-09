'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'
import { useContactModal } from '@/components/layout/ContactModalProvider'

export default function ApproachCTA() {
  const { openModal } = useContactModal()

  return (
    <section id="approach-cta" className="py-24 md:py-32">
      <Container size="narrow">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              READY TO START?
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-6">
              See if this model fits your business
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7] max-w-[560px] mx-auto mb-10">
              If you&apos;re spending on outbound and don&apos;t own the infrastructure behind it,
              there&apos;s a better way. Start with a free snapshot or book an infrastructure audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('territory-snapshot')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent-500 text-primary-950 transition-all duration-300 hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a territory snapshot
                <span className="ml-2">&rarr;</span>
              </button>
              <button
                onClick={() => openModal('infrastructure-audit')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-primary-600 text-primary-50 transition-all duration-300 hover:border-primary-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book an audit
              </button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
