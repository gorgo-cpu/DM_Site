'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const pillars = [
  {
    label: 'SENDING INFRASTRUCTURE',
    title: 'Domains and mailboxes in your name',
    body: 'We register sending domains under your accounts, configure DNS authentication, and warm them to full sending capacity. You own every domain and every mailbox from day one.',
  },
  {
    label: 'TARGETING INTELLIGENCE',
    title: 'Market data you keep permanently',
    body: 'We build your target market map from live signals, not static databases. The resulting workbook is yours. No platform lock-in, no subscription required to access your own data.',
  },
  {
    label: 'OUTREACH SYSTEMS',
    title: 'Sequences and copy that transfer to you',
    body: 'Every outreach sequence, every message variant, every follow-up framework lives in systems you control. When we finish the build, you have the complete operational playbook.',
  },
  {
    label: 'OPERATIONAL KNOWLEDGE',
    title: 'Documentation, not dependency',
    body: 'We document every process, every configuration, and every decision. Your team can operate the system independently, bring in another partner, or scale internally.',
  },
]

export default function IaaSModel() {
  return (
    <section id="model" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE MODEL
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-6">
              Infrastructure as a Service, not leads as a product
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
              We build outbound systems that transfer to you. The model is closer to
              a contractor building a house than a landlord renting an apartment.
              When the work is done, you hold the keys.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="border border-primary-800 rounded-lg p-6 bg-primary-950 h-full">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-3">
                  {item.label}
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
