'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const pillars = [
  {
    number: '01',
    label: 'MARKET INTELLIGENCE',
    title: 'We find who\u2019s actually buying right now',
    body: 'Not a contact list. A structured market map of your target territory, built from live buying signals. We identify which companies need your solution this month, not which ones match a firmographic filter from last year.',
    deliverablesLabel: 'WHAT YOU GET',
    deliverables: 'Prioritized company lists, industry segmentation, competitor deduplication, timing windows for outreach, delivered as a structured workbook you keep.',
  },
  {
    number: '02',
    label: 'INFRASTRUCTURE BUILD',
    title: 'Outbound that runs without us',
    body: 'Dedicated sending domains, warmed-up inboxes, campaign architecture, deliverability monitoring. All registered in your name, all transferable. This is a capital investment, not a subscription.',
    deliverablesLabel: 'WHAT YOU OWN',
    deliverables: 'Sending domains (SPF/DKIM/DMARC configured), warmed inboxes, campaign templates, suppression lists, domain health dashboards.',
  },
  {
    number: '03',
    label: 'PRECISION OUTREACH',
    title: 'Messages that sound like you, not like AI',
    body: 'We study how you actually write, your sentence structures, your tone, your sign-offs, and replicate it. Your prospects can\u2019t tell the difference between you and our system. That\u2019s by design.',
    deliverablesLabel: 'THE DIFFERENCE',
    deliverables: 'Identity-matched writing per sender. Cultural routing for DACH (German), UK (English), and Romania (Romanian). Every message is researched before it\u2019s written, never template-first.',
  },
]

export default function Pillars() {
  return (
    <section id="approach" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              WHAT WE BUILD
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-4">
              Three systems. One revenue engine.
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7] max-w-[560px]">
              Each layer compounds the next. Intelligence feeds infrastructure, infrastructure enables precision outreach.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div className="relative border border-primary-800 rounded-lg p-8 h-full bg-primary-950 overflow-hidden">
                <span className="absolute top-2 right-4 text-[56px] font-bold text-white/[0.07] leading-none select-none pointer-events-none">
                  {pillar.number}
                </span>
                <div className="relative z-10">
                  <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-4">
                    {pillar.label}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-primary-400 leading-[1.75] mb-6">
                    {pillar.body}
                  </p>
                  <div className="pt-4 border-t border-primary-800">
                    <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-2">
                      {pillar.deliverablesLabel}
                    </p>
                    <p className="text-sm text-primary-400 leading-[1.75]">
                      {pillar.deliverables}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
