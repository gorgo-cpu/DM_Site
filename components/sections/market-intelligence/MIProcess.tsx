'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const steps = [
  {
    number: '01',
    label: 'DEFINE THE TERRITORY',
    body: 'We define your target geography (DACH, UK, Romania, or specific regions within), your target industries, and the company size sweet spot. This scoping session takes 30 minutes.',
  },
  {
    number: '02',
    label: 'SIGNAL DETECTION',
    body: 'We scan your target territory for companies showing live buying signals: active hiring for roles you serve, expansion into new markets, technology adoption patterns. We identify who\u2019s moving, not just who exists.',
  },
  {
    number: '03',
    label: 'COMPETITIVE DEDUPLICATION',
    body: 'Your competitors are removed from the target lists. We cross-reference multiple sources to build a clean suppression layer, so you never waste outreach on companies already being served by a competitor.',
  },
  {
    number: '04',
    label: 'STRUCTURED DELIVERY',
    body: 'You receive a multi-tab Excel workbook with Priority and Watchlist tiers for each region, industry segmentation, and recommended outreach timing. The workbook is yours, no login, no subscription, no platform dependency.',
  },
]

export default function MIProcess() {
  return (
    <section id="process" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE PROCESS
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              From territory definition to actionable intelligence
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute h-px bg-primary-800"
            style={{ top: '19px', left: '12.5%', right: '12.5%' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="flex gap-4 lg:block">
                  {/* Number circle */}
                  <div className="w-10 h-10 rounded-full border border-accent-500/30 bg-primary-950 flex items-center justify-center font-mono text-sm text-accent-500 shrink-0 relative z-10 lg:mx-auto">
                    {step.number}
                  </div>

                  {/* Text */}
                  <div className="lg:mt-6 lg:text-center">
                    <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-2">
                      {step.label}
                    </p>
                    <p className="text-sm text-primary-400 leading-[1.75]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
