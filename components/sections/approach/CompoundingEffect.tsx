'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

export default function CompoundingEffect() {
  return (
    <section id="compounding" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="max-w-[720px] mx-auto">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              COMPOUNDING RETURNS
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-8">
              Month 6 outperforms month 1. That&apos;s the point.
            </h2>
            <div className="space-y-5">
              <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
                Agency performance is flat. Month 12 looks like month 1 because the work is
                repetitive human labor, someone writes emails, someone manages replies, someone
                books meetings. Replace the person, restart the learning curve.
              </p>
              <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
                Infrastructure performance compounds. Every campaign generates signal data.
                Every reply pattern refines the targeting. Every bounce improves deliverability
                rules. Six months in, the system knows your market better than a new SDR ever
                will, and it doesn&apos;t hand in a resignation letter.
              </p>
              <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
                This is the real argument for the infrastructure model. The setup fee isn&apos;t a
                cost, it&apos;s a capital investment in a system that appreciates in intelligence.
                The longer it runs, the more valuable it becomes.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
