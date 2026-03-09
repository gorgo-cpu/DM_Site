'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const phases = [
  {
    number: '01',
    label: 'THE AGENCY PHASE',
    title: 'You hire an agency. It works, until it doesn\u2019t.',
    body: 'The first 3-6 months feel productive. Meetings get booked. But when you look under the hood, you own nothing. The domains are the agency\u2019s. The data sits in their CRM. The campaign logic is proprietary. When the contract ends, the pipeline evaporates and you\u2019re back to square one.',
    outcome: 'Net result: pipeline dependency, zero assets.',
    accent: false,
  },
  {
    number: '02',
    label: 'THE TOOL PHASE',
    title: 'You buy tools and try to build it in-house.',
    body: 'Apollo, Instantly, Clay, ZoomInfo. The stack grows. Your SDRs spend 60% of their time on research and data work instead of selling. You\u2019re paying senior salaries for junior admin tasks. The tools help, but they\u2019re shared infrastructure with rate limits, row caps, and pricing tiers designed to extract maximum revenue per seat.',
    outcome: 'Net result: tool sprawl, rising costs, still manual.',
    accent: false,
  },
  {
    number: '03',
    label: 'THE INFRASTRUCTURE PHASE',
    title: 'You realize you need to own the engine, not rent parts of it.',
    body: 'This is where we come in. A one-time setup installs dedicated sending infrastructure in your name. Signal detection finds who needs you right now. Identity-matched writing makes every message sound like it came from you personally. The system compounds over time, month 6 outperforms month 1 because every campaign makes the next one sharper.',
    outcome: 'Net result: owned infrastructure, compounding returns.',
    accent: true,
  },
]

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE JOURNEY MOST COMPANIES TAKE
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-4">
              Three phases before infrastructure
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7] max-w-[560px]">
              Most B2B companies go through the same progression. The pattern is predictable, and so is the breaking point.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl">
          {/* Vertical connector line (desktop only) */}
          <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-primary-800" />

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <ScrollReveal key={index} delay={index * 120}>
                <div className="flex gap-6">
                  {/* Step indicator */}
                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono text-sm shrink-0 relative z-10 ${
                      phase.accent
                        ? 'border-accent-500 bg-accent-500/10 text-accent-500'
                        : 'border-primary-700 bg-primary-950 text-primary-500'
                    }`}
                  >
                    {phase.number}
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-lg p-6 ${
                      phase.accent
                        ? 'border border-accent-500/40 bg-accent-500/[0.03]'
                        : 'border border-primary-800/50 bg-primary-900/30'
                    }`}
                  >
                    <p
                      className={`font-mono text-[11px] tracking-[1.5px] uppercase mb-3 ${
                        phase.accent ? 'text-accent-500' : 'text-primary-600'
                      }`}
                    >
                      {phase.label}
                    </p>
                    <h3
                      className={`text-lg font-semibold tracking-tight mb-3 ${
                        phase.accent ? 'text-primary-50' : 'text-primary-300'
                      }`}
                    >
                      {phase.title}
                    </h3>
                    <p
                      className={`text-sm leading-[1.75] mb-4 ${
                        phase.accent ? 'text-primary-400' : 'text-primary-500'
                      }`}
                    >
                      {phase.body}
                    </p>
                    <p
                      className={`font-mono text-xs ${
                        phase.accent ? 'text-accent-500' : 'text-primary-600'
                      }`}
                    >
                      {phase.outcome}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
