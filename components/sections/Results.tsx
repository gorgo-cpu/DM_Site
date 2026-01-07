'use client'

import React, { useState, useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import ScrollReveal from '@/components/layout/ScrollReveal'

const stats = [
  { value: 500, suffix: '+', label: 'Successful Projects' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 250, suffix: '%', label: 'Average Revenue Growth' },
  { value: 50, suffix: 'M+', label: 'Ad Spend Managed' },
]

const testimonials = [
  {
    quote: 'Working with this team transformed our entire digital strategy. We saw a 300% increase in qualified leads within the first quarter.',
    author: 'Sarah Mitchell',
    role: 'CEO, TechVentures',
  },
  {
    quote: 'The ROI speaks for itself. Their data-driven approach and constant optimization delivered results beyond our expectations.',
    author: 'James Park',
    role: 'Marketing Director, GrowthCo',
  },
  {
    quote: 'Finally, a marketing partner that truly understands our business. Their strategic insight and execution are unmatched.',
    author: 'Emily Chen',
    role: 'Founder, InnovateLabs',
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = value
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-accent-500">
      {count}{suffix}
    </div>
  )
}

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-32 bg-primary-950">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full text-accent-500 text-sm font-semibold mb-4">
              PROVEN RESULTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Numbers Speak For Themselves
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Real results from real businesses. See what's possible when strategy 
              meets execution.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-primary-400 mt-2">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card hover={false} className="h-full flex flex-col">
                <div className="text-accent-500 mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-primary-200 mb-6 flex-grow italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-primary-400">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

