'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const rows = [
  { asset: 'Sending domains', agency: 'Agency keeps them', dmGrowth: 'Registered in your name' },
  { asset: 'Email accounts', agency: 'Shut down when you leave', dmGrowth: 'Yours permanently' },
  { asset: 'Contact lists', agency: 'Locked in their platform', dmGrowth: 'Exported to you as workbooks' },
  { asset: 'Sender reputation', agency: 'Lost when you switch', dmGrowth: 'Built on your domains' },
  { asset: 'Outreach copy', agency: 'Generic templates reused', dmGrowth: 'Custom frameworks you own' },
  { asset: 'Performance data', agency: 'Dashboard access revoked', dmGrowth: 'Your spreadsheets, your analytics' },
  { asset: 'Technical setup', agency: 'Black box', dmGrowth: 'Fully documented for your team' },
]

export default function OwnershipComparison() {
  return (
    <section id="ownership" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              OWNERSHIP
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-6">
              What stays with you when a contract ends
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7]">
              The real test of any outbound partner isn&apos;t what happens during the engagement.
              It&apos;s what you keep when it&apos;s over.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border border-primary-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-primary-900/50 border-b border-primary-800">
              <div className="p-4">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500">
                  ASSET
                </p>
              </div>
              <div className="p-4 border-l border-primary-800">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500">
                  TYPICAL AGENCY
                </p>
              </div>
              <div className="p-4 border-l border-primary-800">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500">
                  DM GROWTH
                </p>
              </div>
            </div>

            {rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index < rows.length - 1 ? 'border-b border-primary-800' : ''
                }`}
              >
                <div className="p-4">
                  <p className="text-sm font-medium text-primary-200">{row.asset}</p>
                </div>
                <div className="p-4 border-l border-primary-800">
                  <p className="text-sm text-primary-500">{row.agency}</p>
                </div>
                <div className="p-4 border-l border-primary-800">
                  <p className="text-sm text-primary-300">{row.dmGrowth}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
