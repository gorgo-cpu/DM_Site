'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'
import { useContactModal } from '@/components/layout/ContactModalProvider'
import type { ContactPreset } from '@/components/layout/ContactModal'
import { trackEvent } from '@/lib/analytics'

const tiers: {
  label: string
  title: string
  subtitle: string
  body: string
  cta: string
  preset: ContactPreset
  featured: boolean
}[] = [
  {
    label: 'FREE',
    title: 'Territory Snapshot',
    subtitle: 'No commitment',
    body: 'A focused sample covering one industry in one region. See the methodology, compare it against your current lists. Delivered within 3 business days.',
    cta: 'Request snapshot',
    preset: 'territory-snapshot',
    featured: false,
  },
  {
    label: 'RECOMMENDED',
    title: 'Infrastructure Audit',
    subtitle: 'Free assessment',
    body: 'We review your current outbound setup, domains, tools, sequences, deliverability, and identify what you own vs. what you rent. Takes 30 minutes.',
    cta: 'Book audit',
    preset: 'infrastructure-audit',
    featured: true,
  },
  {
    label: 'FULL BUILD',
    title: 'Proposal',
    subtitle: 'Custom scope',
    body: 'A complete infrastructure proposal covering setup, operations, and performance terms. Tailored to your market, your team, and your growth targets.',
    cta: 'Request proposal',
    preset: 'full-proposal',
    featured: false,
  },
]

export default function ApproachCTA() {
  const { openModal } = useContactModal()

  return (
    <section id="start" className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              READY TO SEE IT?
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              Three starting points
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div
                className={`relative rounded-lg p-8 h-full flex flex-col ${
                  tier.featured
                    ? 'border border-accent-500 bg-gradient-to-b from-accent-500/[0.03] to-transparent'
                    : 'border border-primary-800 bg-primary-950'
                }`}
              >
                {tier.featured && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
                )}
                <p className={`font-mono text-[11px] tracking-[1.5px] uppercase mb-2 ${
                  tier.featured ? 'text-accent-500' : 'text-primary-500'
                }`}>
                  {tier.label}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-primary-50 mb-1">
                  {tier.title}
                </h3>
                <p className="text-sm text-accent-500 font-medium mb-4">
                  {tier.subtitle}
                </p>
                <p className="text-sm text-primary-400 leading-[1.75] mb-8 flex-1">
                  {tier.body}
                </p>
                <button
                  onClick={() => { trackEvent('cta_click', { label: tier.cta, page: '/approach' }); openModal(tier.preset) }}
                  className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    tier.featured
                      ? 'bg-accent-500 text-primary-950 hover:bg-accent-600'
                      : 'border border-primary-600 text-primary-200 hover:border-primary-400'
                  }`}
                >
                  {tier.cta}
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
