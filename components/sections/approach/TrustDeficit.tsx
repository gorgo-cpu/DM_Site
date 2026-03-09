'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const problems = [
  {
    label: 'LOCKED ACCOUNTS',
    text: 'Your sending domains, mailboxes, and reputation live in the agency\'s accounts. When the contract ends, they stay there.',
  },
  {
    label: 'RENTED DATA',
    text: 'The contact lists, targeting parameters, and enrichment data you paid to build belong to a platform you lose access to.',
  },
  {
    label: 'OPAQUE SYSTEMS',
    text: 'You can\'t see the infrastructure behind your pipeline. You get a dashboard and a monthly report, not operational control.',
  },
  {
    label: 'RESET TO ZERO',
    text: 'Switch providers and you start from scratch. No sender reputation carries over, no data migrates, no copy transfers.',
  },
]

export default function TrustDeficit() {
  return (
    <section id="trust-deficit" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE PROBLEM
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-6">
              The agency trust problem
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
              Most outbound agencies are structured around retention, not results. The longer
              you stay, the more you depend on their systems. This isn&apos;t always intentional,
              but the incentive structure makes it inevitable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="border border-primary-800 rounded-lg p-6 bg-primary-950 h-full">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-3">
                  {item.label}
                </p>
                <p className="text-sm text-primary-400 leading-[1.75]">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
