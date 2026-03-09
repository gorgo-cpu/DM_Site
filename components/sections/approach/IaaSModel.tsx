'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const tiers = [
  {
    label: 'THE FOUNDATION',
    subtitle: 'One-time setup',
    title: '\u20AC3,500 installs the engine',
    body: 'This isn\u2019t an onboarding fee. It\u2019s the hard cost of building a persistent outbound system in your name. What gets installed:',
    items: [
      'Dedicated sending domains registered to you',
      'DNS authentication (SPF, DKIM, DMARC)',
      'Automated inbox warmup sequences',
      'Identity calibration from your communication history',
      'Signal detection infrastructure for your target territory',
    ],
    footer: 'You own the domains. You own the data. If we part ways, the infrastructure stays.',
    featured: false,
  },
  {
    label: 'OPERATIONS',
    subtitle: 'Monthly investment',
    title: 'Ongoing optimization, not just maintenance',
    body: 'The system gets sharper over time. Every campaign generates data. Every reply pattern trains the targeting. The monthly fee covers:',
    items: [
      'Campaign execution and monitoring',
      'Deliverability management and domain health',
      'Signal refresh cycles for your target market',
      'Copy iteration based on reply patterns',
      'Infrastructure scaling as volume grows',
    ],
    footer: null,
    featured: true,
  },
  {
    label: 'PERFORMANCE',
    subtitle: 'Results-linked',
    title: 'Aligned incentives, not capped commissions',
    body: 'Our variable component is tied to qualified meetings delivered to your calendar. No commission caps. The bigger the deal you close from our pipeline, the more motivated we are to find similar ones.',
    items: [],
    footer: 'We don\u2019t cap our upside. You don\u2019t cap yours.',
    featured: false,
  },
]

export default function IaaSModel() {
  return (
    <section id="model" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE INFRASTRUCTURE MODEL
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              How the economics actually work
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
                <p className="font-mono text-xs text-accent-500 mb-3">
                  {tier.subtitle}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-4">
                  {tier.title}
                </h3>
                <p className="text-sm text-primary-400 leading-[1.75] mb-4 flex-1">
                  {tier.body}
                </p>
                {tier.items.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {tier.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs font-mono text-primary-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {tier.footer && (
                  <p className="text-[13px] text-primary-500 mt-auto">
                    {tier.footer}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
