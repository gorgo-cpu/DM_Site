'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const signals = [
  { status: 'active', company: 'M\u00fcller Maschinenbau GmbH', signal: 'hiring CTO', time: '4d ago' },
  { status: 'active', company: 'Carton Logic Ltd', signal: '3 senior roles open', time: '7d ago' },
  { status: 'warm', company: 'Novus Building AG', signal: 'expanded to UK market', time: '12d ago' },
  { status: 'warm', company: 'Precision Parts S.R.L.', signal: 'new VP Sales listed', time: '18d ago' },
  { status: 'cold', company: 'TechBridge Solutions', signal: 'no recent signals', time: '' },
  { status: 'cold', company: 'DataLink Corp', signal: 'no recent signals', time: '' },
]

function dotColor(status: string) {
  switch (status) {
    case 'active':
      return 'bg-accent-500'
    case 'warm':
      return 'bg-amber-500'
    default:
      return 'bg-primary-600'
  }
}

export default function Signals() {
  return (
    <section id="signals" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="border border-primary-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Text */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
                  SIGNAL-FIRST TARGETING
                </p>
                <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-6">
                  We start with intent, not a spreadsheet
                </h2>
                <p className="text-sm text-primary-400 leading-[1.75] mb-4">
                  Traditional outbound starts with a database and blasts it. We start with live signals: companies actively hiring, expanding into new markets, adopting new tech, or showing patterns that indicate they need what you sell.
                </p>
                <p className="text-sm text-primary-400 leading-[1.75]">
                  The result: smaller, sharper lists. Higher relevance. Conversations instead of spam complaints.
                </p>
              </div>

              {/* Right: Signal feed mock */}
              <div className="p-6 lg:p-8 bg-primary-900/50 border-t lg:border-t-0 lg:border-l border-primary-800">
                <div className="space-y-2">
                  {signals.map((row, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-4 py-3 rounded-md bg-primary-950/60 hover:bg-primary-800/40 transition-colors font-mono text-xs"
                    >
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${dotColor(row.status)}`}
                        aria-label={row.status === 'active' ? 'Active signal' : row.status === 'warm' ? 'Warm signal' : 'No signal'}
                      />
                      <span className="text-primary-200 truncate min-w-0 flex-1">
                        {row.company}
                      </span>
                      <span className="text-primary-500 hidden sm:block shrink-0">
                        {row.signal}
                      </span>
                      <span className="text-primary-600 shrink-0 w-16 text-right">
                        {row.time || '\u2013'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
