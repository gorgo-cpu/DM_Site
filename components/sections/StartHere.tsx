'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'
import { useContactModal } from '@/components/layout/ContactModalProvider'
import type { ContactPreset } from '@/components/layout/ContactModal'

const tiers: {
  tier: string
  title: string
  body: string
  ctaLabel: string
  primary: boolean
  preset: ContactPreset
  featured: boolean
}[] = [
  {
    tier: 'EXPLORE',
    title: 'Territory Snapshot',
    body: 'A focused market intelligence sample for one industry in one region. See how signal-based targeting compares to your current lists. Free, no commitment.',
    ctaLabel: 'Request snapshot',
    primary: false,
    preset: 'territory-snapshot',
    featured: false,
  },
  {
    tier: 'EVALUATE',
    title: 'Infrastructure Audit',
    body: 'We look at your current sending setup, domain health, and outbound architecture. You get an honest assessment and a clear path forward. 15 minutes.',
    ctaLabel: 'Book audit',
    primary: true,
    preset: 'infrastructure-audit',
    featured: true,
  },
  {
    tier: 'BUILD',
    title: 'Full Proposal',
    body: 'For companies ready to install revenue infrastructure. We scope the build, map the target market, and present a concrete investment case with projected ROI.',
    ctaLabel: 'Request proposal',
    primary: false,
    preset: 'full-proposal',
    featured: false,
  },
]

export default function StartHere() {
  const { openModal } = useContactModal()

  return (
    <section id="start" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              START HERE
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-4">
              Three ways to begin
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7] max-w-[560px]">
              No pressure calls. No &quot;How much is your budget?&quot; qualification gates. Pick what matches where you are.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div
                className={`relative rounded-lg p-8 h-full flex flex-col ${
                  tier.featured
                    ? 'border-2 border-accent-500/40 bg-accent-500/[0.03]'
                    : 'border border-primary-800 bg-primary-950'
                }`}
              >
                {tier.featured && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
                )}
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-2">
                  {tier.tier}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-primary-50 mb-4">
                  {tier.title}
                </h3>
                <p className="text-sm text-primary-400 leading-[1.75] mb-8 flex-1">
                  {tier.body}
                </p>
                <button
                  onClick={() => openModal(tier.preset)}
                  className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    tier.primary
                      ? 'bg-accent-500 text-primary-950 hover:bg-accent-600'
                      : 'border border-primary-600 text-primary-200 hover:border-primary-400'
                  }`}
                >
                  {tier.ctaLabel}
                  <span className="ml-2">&rarr;</span>
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
