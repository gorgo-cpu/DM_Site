'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/layout/ScrollReveal'

const pricingTiers = [
  {
    name: 'Infrastructure Build',
    price: '',
    period: '',
    description: 'Perfect for companies who want to run outbound in-house',
    features: [
      'Complete infrastructure setup',
      'Domain & email configuration',
      '1 campaign template',
      'Setup documentation',
    ],
  },
  {
    name: 'Done-For-You Outbound',
    price: '',
    period: '',
    description: 'Perfect for those who want maximum outreach and guaranteed results',
    features: [
      'Everything in Managed Outbound',
      'Outreach to 1,500+ leads/month',
      'Multiple campaign sequences',
      'Priority response handling',
      'Meeting scheduling & qualification',
      '4 meetings/month with our team',
      'Weekly strategy calls',
    ],
  },
]

export default function Pricing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-20 md:py-32 bg-primary-900/30">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-accent-500 text-sm font-semibold mb-4">
              PRICING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose what works best for you
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Flexible options to match your business needs and growth stage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="h-full flex flex-col" hover>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-primary-400 text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-primary-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-primary-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="secondary" className="w-full" onClick={() => scrollToSection('contact')}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <p className="text-primary-400">
              
              <span className="text-accent-500 ml-1"></span>
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}


