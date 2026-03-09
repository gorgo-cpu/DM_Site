'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const markets = [
  {
    label: 'DACH',
    title: 'Germany, Austria, Switzerland',
    items: [
      'Formal register expected in initial outreach',
      'Decision cycles are longer and involve more stakeholders',
      'Technical credibility matters more than relationship-first approaches',
      'German-language variants for regional nuances',
    ],
  },
  {
    label: 'UK',
    title: 'United Kingdom',
    items: [
      'Direct but conversational tone performs best',
      'Shorter decision cycles, especially in tech and services',
      'LinkedIn engagement patterns differ from continental Europe',
      'British English conventions and cultural references',
    ],
  },
  {
    label: 'ROMANIA',
    title: 'Romania',
    items: [
      'Relationship-driven business culture with growing digital adoption',
      'Bilingual outreach depending on company profile',
      'Faster response patterns with more informal communication norms',
      'Local market nuances in tech, manufacturing, and services',
    ],
  },
]

export default function CulturalRouting() {
  return (
    <section id="cultural-routing" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE ROUTING
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-6">
              Every message lands in the right context
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
              DACH, UK, and Romanian markets operate differently. Formality levels, business timing,
              response patterns, decision-making structures. We route and localize each
              campaign to match the market it enters.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border border-primary-800 rounded-lg p-6 bg-primary-950 h-full">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-2">
                  {market.label}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-4">
                  {market.title}
                </h3>
                <ul className="space-y-2">
                  {market.items.map((item, i) => (
                    <li key={i} className="text-sm text-primary-400 leading-[1.75] flex gap-2">
                      <span className="text-accent-500 shrink-0">&middot;</span>
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
