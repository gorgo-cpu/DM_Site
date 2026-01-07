import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We dive deep into your business, market, and competitors to identify unique opportunities and challenges.',
  },
  {
    number: '02',
    title: 'Strategic Blueprint',
    description: 'Custom roadmap creation with clear milestones, KPIs, and actionable tactics tailored to your goals.',
  },
  {
    number: '03',
    title: 'Campaign Development',
    description: 'Design and build high-converting campaigns across channels with compelling creative and messaging.',
  },
  {
    number: '04',
    title: 'Launch & Activation',
    description: 'Execute campaigns with precision timing and coordinated deployment across all platforms.',
  },
  {
    number: '05',
    title: 'Monitor & Optimize',
    description: 'Real-time performance tracking with continuous A/B testing and data-driven refinements.',
  },
  {
    number: '06',
    title: 'Scale & Expand',
    description: 'Amplify what works and explore new channels as we systematically grow your market presence.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-primary-900/30">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-accent-500 text-sm font-semibold mb-4">
              HOW WE WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              A systematic approach that delivers consistent results and eliminates guesswork.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-accent-500/50 to-transparent hidden md:block"></div>
                )}

                <div className="flex gap-6 md:gap-8 mb-12 md:mb-16">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-primary-300 leading-relaxed">
                      {step.description}
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

