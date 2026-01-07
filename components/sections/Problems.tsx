import React from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/layout/ScrollReveal'

const challenges = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Inconsistent Growth',
    description: 'Your marketing efforts feel scattered and unpredictable. You need a systematic approach that delivers consistent, measurable results month over month.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Wasted Ad Spend',
    description: 'Every dollar counts, but your current campaigns aren\'t converting. You need data-driven strategies that maximize ROI and eliminate waste.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Brand Invisibility',
    description: 'Your competitors dominate the conversation while your brand struggles to be heard. You need a powerful presence that commands attention.',
  },
]

export default function Problems() {
  return (
    <section id="problems" className="py-20 md:py-32 bg-primary-900/30">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Current Challenges
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              We understand the obstacles holding your business back. 
              Here's what we help you overcome.
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

