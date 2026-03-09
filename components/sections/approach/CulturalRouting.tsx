'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const markets = [
  {
    label: 'DACH',
    title: 'Georg handles Germany, Austria, and Switzerland',
    body: 'DACH business culture demands formal B2B etiquette. "Sehr geehrter Herr [Lastname]" isn\u2019t optional, it\u2019s table stakes. Titles matter. Directness is valued, but within a framework of professional respect. Our German-native operations don\u2019t just translate, they operate natively in the DACH business context.',
    items: [
      'Formal "Sie" address exclusively',
      'UWG-compliant cold email frameworks',
      'Understands Mittelstand vs. startup culture differences',
      'Manufacturing, logistics, technical recruiting verticals',
    ],
  },
  {
    label: 'UK',
    title: 'David handles the United Kingdom',
    body: 'UK outreach moves faster, tolerates more directness, but punishes overselling. British understatement beats American enthusiasm. "Quite good results" lands better than "amazing ROI." PECR-compliant B2B email is the standard channel, respected when done well, ignored when done generically.',
    items: [
      'Professional but not stiff, British tone calibration',
      'PECR-compliant B2B outreach frameworks',
      'Understands London tech vs. regional industry differences',
      'Tech, professional services, construction verticals',
    ],
  },
  {
    label: 'ROMANIA',
    title: 'David handles Romania in Romanian',
    body: 'Romanian B2B outreach is conducted in Romanian. Relationships and hierarchy drive decisions in this market, the right tone and formality level make the difference between a reply and a delete. We combine local language fluency with the same signal-based targeting methodology used across all our markets.',
    items: [
      'Romanian-language outreach and follow-up',
      'Adapted formality for local business culture',
      'IT services, software development, professional services verticals',
    ],
  },
]

export default function CulturalRouting() {
  return (
    <section id="routing" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THREE MARKETS, THREE PLAYBOOKS
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              The same message in German, English, and Romanian isn&apos;t localization. It&apos;s laziness.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border border-primary-800 rounded-lg p-6 bg-primary-950 h-full flex flex-col">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-2">
                  {market.label}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-4">
                  {market.title}
                </h3>
                <p className="text-sm text-primary-400 leading-[1.75] mb-6 flex-1">
                  {market.body}
                </p>
                <ul className="space-y-2">
                  {market.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-mono text-primary-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
