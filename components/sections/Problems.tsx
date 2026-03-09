'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const problems = [
  {
    icon: '\u2193',
    title: 'The agency leaves, the pipeline leaves with them',
    body: 'You paid for 6 months of meetings. When the contract ends, you own nothing. No domains, no data, no process. Back to square one.',
  },
  {
    icon: '\u00d7',
    title: 'Your SDRs spend 60% of their time not selling',
    body: 'Research, list building, data cleaning, tool juggling. You\u2019re paying senior salaries for junior admin work. The math doesn\u2019t hold.',
  },
  {
    icon: '~',
    title: '10,000 emails, same template, zero signal',
    body: 'Spraying your entire database once a quarter with a generic message. No targeting by intent, no timing, no relevance. Just volume.',
  },
]

export default function Problems() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <Container>
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              THE PATTERN WE KEEP SEEING
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] mb-4">
              You&apos;ve tried outbound before. Here&apos;s why it didn&apos;t stick.
            </h2>
            <p className="text-[17px] font-light text-primary-400 leading-[1.7] max-w-[560px]">
              The problem isn&apos;t effort. It&apos;s architecture. Most outbound setups are built to run, not to last.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-primary-800 border border-primary-800 rounded-lg overflow-hidden">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-primary-900 p-8 h-full">
                <span className="text-2xl text-primary-500 font-mono mb-4 block">
                  {problem.icon}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-primary-50 mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm text-primary-400 leading-[1.75]">
                  {problem.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
