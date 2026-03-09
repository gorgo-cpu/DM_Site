'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Voice audit',
    body: 'We study how your company communicates, on your website, in proposals, on LinkedIn, in sales calls. We extract the phrases, tone, and rhythm that sound like your team.',
  },
  {
    number: '02',
    title: 'Market calibration',
    body: 'We match your voice to what each target market expects. A message to a German manufacturing director reads differently than one to a London SaaS founder, even when the offer is the same.',
  },
  {
    number: '03',
    title: 'Continuous refinement',
    body: 'Every reply, positive or negative, feeds back into the copy framework. Messages evolve based on real market responses, not assumptions about what should work.',
  },
]

export default function IdentityWriting() {
  return (
    <section id="identity-writing" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE WRITING
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-6">
              Copy written in your voice, not ours
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
              Template-based outbound fails because it sounds like template-based outbound.
              Recipients can tell when a message wasn&apos;t written by someone who understands
              their business. We fix that at the source.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl space-y-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex gap-6">
                <p className="font-mono text-sm text-accent-500 shrink-0 pt-1">
                  {step.number}
                </p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary-400 leading-[1.75]">
                    {step.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
