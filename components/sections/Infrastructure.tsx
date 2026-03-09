'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const oldWay = [
  {
    label: 'TRADITIONAL AGENCY',
    title: 'You pay monthly for someone else\u2019s process',
    body: 'The agency controls the domains, the data, the tools. When the contract ends, the pipeline disappears. You\u2019re back to buying more activities next quarter.',
  },
  {
    label: 'SAAS PLATFORMS',
    title: 'You rent access behind rate limits',
    body: 'Shared infrastructure. Row limits. Queue latencies. Your speed and scale are capped by what the platform allows thousands of other users to do simultaneously.',
  },
  {
    label: 'IN-HOUSE TEAM',
    title: '3+ month ramp, $200k+ annual cost',
    body: 'Hiring SDRs, buying tools, training on process. Turnover resets the clock. You\u2019re investing in people who leave, not systems that compound.',
  },
]

const newWay = [
  {
    label: 'INFRASTRUCTURE MODEL',
    title: 'You own the engine outright',
    body: 'Sending domains registered to you. Campaign architecture documented. Suppression data yours. If we stopped tomorrow, the system keeps running. The setup fee is a capital investment in an asset, not a monthly expense.',
  },
  {
    label: 'PRIVATE SYSTEMS',
    title: 'No shared limits, no artificial ceilings',
    body: 'Dedicated infrastructure means your outbound isn\u2019t competing with 10,000 other users for processing time. Your campaigns run on your schedule, at your volume.',
  },
  {
    label: 'COMPOUNDING RETURNS',
    title: 'Systems improve, people leave',
    body: 'Every campaign generates data. Every reply trains the system. Six months in, your outbound is sharper than day one, regardless of team turnover. The intelligence stays.',
  },
]

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              WHY THIS ISN&apos;T AN AGENCY
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-4">
              The shift from renting pipeline to owning it
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7] max-w-[560px]">
              Agencies sell activities. SaaS tools sell access. We install infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Old way */}
          <div className="space-y-4">
            {oldWay.map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="border border-primary-800/50 rounded-lg p-6 bg-primary-900/30">
                  <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-600 mb-3">
                    {item.label}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-primary-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-500 leading-[1.75]">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* New way */}
          <div className="space-y-4">
            {newWay.map((item, index) => (
              <ScrollReveal key={index} delay={index * 80 + 100}>
                <div className="border border-accent-500/20 rounded-lg p-6 bg-primary-950">
                  <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-3">
                    {item.label}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-400 leading-[1.75]">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
