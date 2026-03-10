'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const markets = [
  {
    label: 'DACH',
    title: 'Native German operations, not translated English',
    body: 'DACH business culture demands formal B2B etiquette. "Sehr geehrter Herr [Lastname]" isn\u2019t optional, it\u2019s table stakes. Titles matter. Directness is valued, but within a framework of professional respect. Georg operates natively in the DACH business context, not as a translator, but as a local operator.',
    items: [
      'Formal "Sie" address exclusively',
      'UWG-compliant cold email frameworks',
      'Understands Mittelstand vs. startup culture differences',
      'Manufacturing, logistics, technical recruiting verticals',
    ],
  },
  {
    label: 'UK',
    title: 'British tone, not American enthusiasm',
    body: 'UK outreach moves faster, tolerates more directness, but punishes overselling. British understatement beats American enthusiasm. "Quite good results" lands better than "amazing ROI." David runs UK outreach with PECR-compliant B2B frameworks, respected when done well, ignored when done generically.',
    items: [
      'Professional but not stiff, British tone calibration',
      'PECR-compliant B2B outreach frameworks',
      'Understands London tech vs. regional industry differences',
      'Tech, professional services, construction verticals',
    ],
  },
  {
    label: 'ROMANIA',
    title: 'Local language, local market intelligence',
    body: 'Romanian B2B runs on trust and status. Decision-makers expect to be approached in Romanian, with awareness of local company hierarchies and business norms. We target IT services firms, software houses, and professional services companies showing active growth signals, the same methodology as DACH and UK, adapted for a market where personal credibility opens doors faster than cold logic.',
    items: [
      'Romanian-language outreach and follow-up',
      'Adapted formality for local business culture',
      'IT services, software development, professional services verticals',
    ],
  },
]

export default function CulturalRouting() {
  return (
    <section id="routing" className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="mb-12 md:mb-16 max-w-3xl mx-auto text-center">
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
