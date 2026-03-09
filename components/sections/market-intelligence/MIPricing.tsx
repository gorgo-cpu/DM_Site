'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const options = [
  {
    tier: 'SNAPSHOT',
    title: 'Territory Snapshot',
    subtitle: 'Free, no commitment',
    body: 'A focused sample covering one industry in one region. Enough to see the methodology and compare against your current lists. We send it within 3 business days.',
    ctaLabel: 'Request free snapshot',
    primary: false,
    href: 'mailto:david@datamodulator.ro?subject=Free%20Territory%20Snapshot',
    featured: false,
  },
  {
    tier: 'FULL REPORT',
    title: 'Market Intelligence Report',
    subtitle: 'From \u20ac1,500',
    body: 'Complete multi-tab workbook covering your full target territory. Multiple industries, multiple regions, competitor deduplication, priority/watchlist segmentation. Delivered within 5-10 business days depending on scope.',
    ctaLabel: 'Request scoping call',
    primary: true,
    href: 'mailto:david@datamodulator.ro?subject=Market%20Intelligence%20Full%20Report',
    featured: true,
  },
]

export default function MIPricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              ENGAGEMENT OPTIONS
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              Two ways to start
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {options.map((option, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div
                className={`relative rounded-lg p-8 h-full flex flex-col ${
                  option.featured
                    ? 'border-2 border-accent-500/40 bg-accent-500/[0.03]'
                    : 'border border-primary-800 bg-primary-950'
                }`}
              >
                {option.featured && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
                )}
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-2">
                  {option.tier}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-primary-50 mb-1">
                  {option.title}
                </h3>
                <p className="text-sm text-accent-500 font-medium mb-4">
                  {option.subtitle}
                </p>
                <p className="text-sm text-primary-400 leading-[1.75] mb-8 flex-1">
                  {option.body}
                </p>
                <a
                  href={option.href}
                  className={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    option.primary
                      ? 'bg-accent-500 text-primary-950 hover:bg-accent-600'
                      : 'border border-primary-600 text-primary-200 hover:border-primary-400'
                  }`}
                >
                  {option.ctaLabel}
                  <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 max-w-4xl">
            <p className="text-[16px] text-primary-400 leading-[1.7]">
              Already have your intelligence? The natural next step is infrastructure.
              We build the outbound system that executes on it.
            </p>
            <a
              href="/#infrastructure"
              className="inline-flex items-center text-sm text-accent-500 hover:text-accent-400 transition-colors mt-3 font-medium"
            >
              See how we build infrastructure
              <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
