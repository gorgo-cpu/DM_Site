'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const effects = [
  {
    month: 'MONTH 1',
    title: 'Foundation',
    body: 'Domains registered, DNS configured, mailboxes created. Warm-up begins. Market intelligence workbook delivered.',
  },
  {
    month: 'MONTH 3',
    title: 'Traction',
    body: 'Sender reputation established. First outreach sequences live. Reply data feeding back into copy refinement.',
  },
  {
    month: 'MONTH 6',
    title: 'Compounding',
    body: 'Mature sending reputation. Optimized message frameworks. Enriched contact data. The system produces more with less effort.',
  },
  {
    month: 'MONTH 12+',
    title: 'Independence',
    body: 'Fully operational pipeline under your control. Your team runs it, scales it, or brings in new partners without starting over.',
  },
]

export default function CompoundingEffect() {
  return (
    <section id="compounding" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE LONG GAME
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-6">
              Infrastructure compounds. Retainers reset.
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
              Every month your system runs, sender reputation strengthens, data enriches,
              and targeting improves. When an agency contract ends, you start from zero.
              When our build ends, you have a system that keeps working.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {effects.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border border-primary-800 rounded-lg p-6 bg-primary-950 h-full">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-3">
                  {item.month}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-400 leading-[1.75]">
                  {item.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
