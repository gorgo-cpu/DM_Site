'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

export default function TrustDeficit() {
  return (
    <section id="trust" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="max-w-[720px] mx-auto">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE CORE PROBLEM
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-8">
              The agency model has a structural flaw
            </h2>
            <div className="space-y-5">
              <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
                Agencies sell activities. Emails sent, calls made, meetings booked. When the
                contract ends, the pipeline disappears because you never owned the machinery
                that produced it. The domains, the data, the campaign architecture, it all
                stays with the agency.
              </p>
              <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
                SaaS platforms solve part of this by giving you access to tools. But access
                isn&apos;t ownership. You&apos;re sharing infrastructure with thousands of other users,
                constrained by rate limits, row caps, and pricing tiers designed to extract
                maximum revenue per seat.
              </p>
              <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
                We saw both failure modes and built something different: an infrastructure
                model where the setup fee installs a persistent system in your name, the
                ongoing fee maintains and optimizes it, and if the relationship ends, the
                system keeps running.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
