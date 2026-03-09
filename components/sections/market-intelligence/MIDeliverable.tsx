'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const tabs = [
  {
    label: 'PRIORITY LISTS',
    title: 'Companies showing active buying signals',
    body: 'Ranked by signal strength and timing. These are the companies you contact first, they have open roles, budget indicators, or expansion patterns that match your service offering.',
  },
  {
    label: 'WATCHLISTS',
    title: 'Companies to monitor for future signals',
    body: 'Not ready today, but showing early indicators. These go into a nurture queue. When a signal fires, they move to Priority automatically in future refreshes.',
  },
  {
    label: 'INDUSTRY SEGMENTATION',
    title: 'Separate targeting per vertical',
    body: 'Each industry gets its own analysis. Manufacturing targets look different from tech targets. Messaging angles, timing windows, and competitive density vary by vertical, the workbook reflects this.',
  },
  {
    label: 'COMPETITIVE LANDSCAPE',
    title: 'Your competitors mapped and removed',
    body: 'We identify which recruitment agencies, dev shops, or service providers are already active in your target territory. They\u2019re removed from your outreach lists and documented so you know exactly who you\u2019re competing against.',
  },
]

export default function MIDeliverable() {
  return (
    <section id="deliverable" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE DELIVERABLE
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              An 8-tab intelligence workbook, not a dashboard login
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {tabs.map((tab, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="border border-primary-800 rounded-lg p-6 bg-primary-950 h-full">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-3">
                  {tab.label}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-3">
                  {tab.title}
                </h3>
                <p className="text-sm text-primary-400 leading-[1.75]">
                  {tab.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="font-mono text-xs text-primary-500 text-center leading-relaxed">
            The workbook is a .xlsx file. No proprietary format, no viewer required, no subscription.
            Open it in Excel, Google Sheets, or Numbers.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  )
}
