import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Strategy & Market Fit',
    description: "Before writing a single word, we dissect your market. We identify the exact job titles and industries that have the highest intent to buy your product right now.",
  },
  {
    number: '02',
    title: 'Technical Setup & Deliverability',
    description: "We build a bulletproof sending infrastructure (dedicated domains & warmed-up inboxes) to ensure your emails land in the Primary Inbox, not Spam.",
  },
  {
    number: '03',
    title: 'Verified List Building',
    description: "We hand-pick thousands of verified decision-makers. No outdated databases. Every email is validated live to protect your domain reputation.",
  },
  {
    number: '04',
    title: 'High-Converting Copy',
    description: "We craft personalized email sequences using psychological triggers that cut through the noise. We don't just pitch; we start conversations.",
  },
  {
    number: '05',
    title: 'Launch & Optimization',
    description: "We launch the campaigns and A/B test everything—subject lines, offers, and call-to-actions—doubling down on what generates meetings.",
  },
  {
    number: '06',
    title: 'Appointment Setting',
    description: "We handle the replies, overcome objections, and book qualified meetings directly into your calendar. You just focus on closing the deal.",
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
              Here's our step-by-step plan
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              We didn't have to reinvent the wheel - we just have to make the wheel rounder. We've perfected our strategy to use highly personalized outbound that converts into $$$.
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


