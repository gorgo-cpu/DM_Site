import React from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Competitor & ICP Analysis',
    description: "We'll dive deep into your competitors' strategies - what works for them, what you can do better - and thoroughly analyze your target audience's pain points, values, and desires.",
  },
  {
    number: '02',
    title: 'Building your infrastructure',
    description: "We'll create your scalable infrastructure on 1, 2 or 5 domains. Built on a Private Server that only you will use.",
  },
  {
    number: '03',
    title: 'ICP Finding & Scraping',
    description: "We'll find your Ideal Customer Profile and scrape them for use in our outbound strategy. The leads will be verified and safe to send.",
  },
  {
    number: '04',
    title: 'Copywriting & Personalization',
    description: "Based on your onboarding form we'll start writing the copy and personalizing the outbound strategy to cater to your needs.",
  },
  {
    number: '05',
    title: 'Campaign Creation & Launching',
    description: "We'll prepare the campaigns in Smartlead.ai for you to check and make sure it all fits the way you'd speak to your customer. We'll launch after approval.",
  },
  {
    number: '06',
    title: 'Inbox Management & Booked Meetings',
    description: "We'll manage the inbound replies and do pipeline management to secure everyone that is interested will show up to a meeting with you. Our work is only done when you had a meeting with your ICP.",
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


