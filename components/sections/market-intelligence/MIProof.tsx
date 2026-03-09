'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const scopeItems = [
  '6,193 job postings analyzed',
  '679 search queries executed',
  '4 target industries mapped',
  '2 regions covered (DACH + UK)',
]

const deliverableItems = [
  '8-tab Excel workbook',
  'Priority + Watchlist tiers per region',
  '619 competitor agencies deduplicated',
  '5 independent data sources cross-referenced',
]

const economicsItems = [
  'Total intelligence cost: under \u20ac1',
  'Delivered in 5 business days',
  'Workbook retained by client permanently',
]

export default function MIProof() {
  return (
    <section id="proof" className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              PROOF OF WORK
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              What this looks like in practice
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border border-primary-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: The story */}
              <div className="p-8 lg:p-12">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-6">
                  TECHNICAL RECRUITING, DACH &amp; UK
                </p>

                <div className="space-y-4">
                  <p className="text-sm text-primary-400 leading-[1.75]">
                    A technical recruiting firm needed to expand beyond referrals into
                    four new industry verticals across Germany, Austria, Switzerland, and
                    the UK. They had no structured data on which companies were actively
                    hiring for the senior technical roles they specialize in.
                  </p>
                  <p className="text-sm text-primary-400 leading-[1.75]">
                    We mapped their entire target territory using public job postings as
                    buying signals. If a company is actively hiring for senior technical
                    roles, they either need recruiting help now or will need it within weeks.
                  </p>
                </div>
              </div>

              {/* Right: Data cards */}
              <div className="p-6 lg:p-8 bg-primary-900/50 border-t lg:border-t-0 lg:border-l border-primary-800 space-y-4">
                {/* Scope */}
                <div className="border border-primary-800 rounded-lg p-5 bg-primary-950">
                  <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-3">
                    SCOPE
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-primary-300">
                    {scopeItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable */}
                <div className="border border-primary-800 rounded-lg p-5 bg-primary-950">
                  <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-3">
                    DELIVERABLE
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-primary-300">
                    {deliverableItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Economics */}
                <div className="border border-accent-500/20 rounded-lg p-5 bg-primary-950">
                  <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-3">
                    ECONOMICS
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-primary-300">
                    {economicsItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
