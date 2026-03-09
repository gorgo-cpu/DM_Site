'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const agencyItems = [
  { asset: 'Domains', detail: 'Agency-owned, revoked on churn' },
  { asset: 'Contact data', detail: 'Stays in agency\u2019s CRM' },
  { asset: 'Campaign architecture', detail: 'Proprietary to agency' },
  { asset: 'Sending infrastructure', detail: 'Shared across agency clients' },
  { asset: 'Market intelligence', detail: 'Locked in agency reports' },
  { asset: 'Writing calibration', detail: 'Generic templates, non-transferable' },
]

const usItems = [
  { asset: 'Domains', detail: 'Registered in your name, yours permanently' },
  { asset: 'Contact data', detail: 'Stored in your systems, exportable' },
  { asset: 'Campaign architecture', detail: 'Documented, transferable' },
  { asset: 'Sending infrastructure', detail: 'Dedicated to you, fully portable' },
  { asset: 'Market intelligence', detail: 'Delivered as workbooks you keep' },
  { asset: 'Writing calibration', detail: 'Trained on your voice, adaptable' },
]

export default function OwnershipComparison() {
  return (
    <section id="ownership" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              ASSET OWNERSHIP
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              When the contract ends, what do you keep?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Agency column */}
          <ScrollReveal>
            <div className="border border-primary-800/50 rounded-lg p-6 bg-primary-900/30 h-full flex flex-col">
              <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-6">
                WITH AN AGENCY
              </p>
              <ul className="space-y-4 flex-1">
                {agencyItems.map((item, i) => (
                  <li key={i}>
                    <p className="text-sm font-medium text-primary-300">{item.asset}</p>
                    <p className="text-sm text-primary-500">{item.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-primary-600 mt-6 pt-4 border-t border-primary-800">
                Net assets after 12 months: zero.
              </p>
            </div>
          </ScrollReveal>

          {/* Us column */}
          <ScrollReveal delay={120}>
            <div className="border border-accent-500/30 rounded-lg p-6 bg-primary-950 h-full flex flex-col">
              <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-6">
                WITH US
              </p>
              <ul className="space-y-4 flex-1">
                {usItems.map((item, i) => (
                  <li key={i}>
                    <p className="text-sm font-medium text-primary-200">{item.asset}</p>
                    <p className="text-sm text-primary-400">{item.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-accent-500 mt-6 pt-4 border-t border-primary-800">
                Net assets after 12 months: a functioning revenue engine.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
