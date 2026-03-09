'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const agencyDelivers = [
  'CSV export from Apollo/ZoomInfo',
  'Filtered by industry + headcount only',
  'No timing intelligence',
  'No competitor awareness',
  'Decays within 60 days',
  'You still have to figure out who to contact first',
]

const weDeliver = [
  'Prioritized company lists ranked by buying urgency',
  'Industry segmentation across your target verticals',
  'Competitor deduplication (your competitors removed from target lists)',
  'Timing windows for optimal outreach',
  'Structured Excel workbook, yours to keep',
  'Ready to execute on, not just "data"',
]

export default function MIProblem() {
  return (
    <section id="why" className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="mb-12 md:mb-16 text-center">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE LIST BUYING TRAP
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] max-w-[700px] mx-auto">
              Static databases decay at 2-3% per month. Yours is already stale.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Text */}
          <ScrollReveal>
            <div className="space-y-5">
              <p className="text-sm text-primary-400 leading-[1.75]">
                Most outbound starts with a list purchase. ZoomInfo, Apollo, LinkedIn Sales Navigator export.
                You get 10,000 contacts, blast them, and wonder why reply rates are below 1%.
              </p>
              <p className="text-sm text-primary-400 leading-[1.75]">
                The problem isn&apos;t the data quality. It&apos;s the targeting logic. A database tells you
                a company exists. It doesn&apos;t tell you that company needs your service{' '}
                <em className="text-primary-200 italic">right now</em>.
              </p>
              <p className="text-sm text-primary-400 leading-[1.75]">
                We replace list buying with market mapping. Instead of &quot;all software companies in
                Germany,&quot; we answer: &quot;which 200 companies in your target territory are showing
                active buying behavior this month?&quot;
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Comparison cards */}
          <ScrollReveal delay={120}>
            <div className="space-y-4">
              {/* What agencies deliver */}
              <div className="border border-primary-800/50 rounded-lg p-6 bg-primary-900/30">
                <h3 className="text-sm font-semibold text-primary-500 mb-4">
                  What most agencies deliver
                </h3>
                <ul className="space-y-2.5">
                  {agencyDelivers.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 font-mono text-xs text-primary-600"
                    >
                      <span className="shrink-0 mt-px">×</span>
                      <span className="line-through">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What we deliver */}
              <div className="border border-accent-500/20 rounded-lg p-6 bg-primary-950">
                <h3 className="text-sm font-semibold text-accent-500 mb-4">
                  What we deliver
                </h3>
                <ul className="space-y-2.5">
                  {weDeliver.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 font-mono text-xs text-primary-300"
                    >
                      <span className="text-accent-500 shrink-0 mt-px">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
