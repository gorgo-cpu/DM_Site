import React from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/layout/ScrollReveal'

const challenges = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Do it yourself',
    description: 'Burn months on trial & error. Expensive tools. No guaranteed results. High Effort, Low ROI.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Hire In-House',
    description: "Salaries, taxes, and training costs. 3+ months ramp-up time. Management headaches. Slow & Expensive.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'The Partner Way (DM Growth)',
    description: "Proven strategy. Execution from Day 1. Qualified meetings delivered to your calendar. Plug & Play Growth.",
  },
]

export default function Problems() {
  return (
    <section id="problems" className="py-20 md:py-32 bg-primary-900/30">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              So you want to grow your business? Here are your options:
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Choose your path to growth - but choose wisely.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="h-full">
                <div className="text-accent-500 mb-4">{challenge.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {challenge.title}
                </h3>
                <p className="text-primary-300 leading-relaxed">
                  {challenge.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}


