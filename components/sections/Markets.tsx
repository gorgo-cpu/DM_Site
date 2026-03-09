'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const markets = [
  {
    flag: '\ud83c\udde9\ud83c\uddea',
    label: 'DACH',
    subtitle: 'Germany, Austria, Switzerland',
    body: 'Formal B2B etiquette. Titles matter. The approach is consultative, not transactional. Our German-native operations handle everything from \u201cSehr geehrter Herr\u201d to contract close.',
    details: [
      'German-language outreach and follow-up',
      'UWG-compliant cold email frameworks',
      'Manufacturing, logistics, technical recruiting verticals',
    ],
  },
  {
    flag: '\ud83c\uddec\ud83c\udde7',
    label: 'UNITED KINGDOM',
    subtitle: '',
    body: 'More direct, faster-moving, higher tolerance for cold outreach. PECR-compliant B2B email is standard. We match the pace and adjust the angle accordingly.',
    details: [
      'English-language precision targeting',
      'PECR-compliant B2B outreach',
      'Tech, professional services, construction verticals',
    ],
  },
  {
    flag: '\ud83c\uddf7\ud83c\uddf4',
    label: 'ROMANIA',
    subtitle: '',
    body: 'A maturing B2B market where relationships and hierarchy still drive decisions. English is the standard for tech outreach, but local market context and credibility signals make the difference.',
    details: [
      'English-language outreach with local market intelligence',
      'Higher-formality positioning for Romanian business culture',
      'IT services, software development, professional services verticals',
    ],
  },
]

export default function Markets() {
  return (
    <section id="markets" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              WHERE WE OPERATE
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-4">
              Three markets, three playbooks, one system
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7] max-w-[560px]">
              Outbound in Germany, the UK, and Romania are fundamentally different. We don&apos;t translate, we re-engineer.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div className="border border-primary-800 rounded-lg p-8 h-full bg-primary-950">
                <div className="text-3xl mb-4">{market.flag}</div>
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-1">
                  {market.label}
                </p>
                {market.subtitle && (
                  <p className="font-mono text-[11px] text-primary-500 mb-4">
                    {market.subtitle}
                  </p>
                )}
                {!market.subtitle && <div className="mb-4" />}
                <p className="text-sm text-primary-400 leading-[1.75] mb-6">
                  {market.body}
                </p>
                <ul className="space-y-2">
                  {market.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs font-mono text-primary-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                      {detail}
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
