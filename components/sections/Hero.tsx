'use client'

import React, { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import Container from '@/components/ui/Container'

const proofItems = [
  {
    label: 'INFRASTRUCTURE',
    text: 'Private sending systems, not shared SaaS',
  },
  {
    label: 'TARGETING',
    text: 'Live buying signals, not static databases',
  },
  {
    label: 'OWNERSHIP',
    text: 'Domains, data, and systems transfer to you',
  },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !ref.current) return

    const blocks = ref.current.querySelectorAll('.hero-reveal')

    animate(blocks, {
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: stagger(120, { start: 200 }),
    })
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Container className="relative z-10 pt-32 pb-20">
        <div ref={ref} className="max-w-4xl">
          <p className="hero-reveal opacity-0 font-mono text-xs tracking-[2px] uppercase text-accent-500">
            OUTBOUND INFRASTRUCTURE &mdash; NOT ANOTHER AGENCY
          </p>

          <h1 className="hero-reveal opacity-0 mt-8 text-[clamp(40px,6vw,72px)] font-bold tracking-tight leading-[1.1]">
            Most agencies rent you leads.
            <br />
            We install the{' '}
            <span className="text-accent-500">engine</span> that makes
            them.
          </h1>

          <p className="hero-reveal opacity-0 mt-8 text-[19px] font-light text-primary-300 leading-[1.7] max-w-[600px]">
            Your outbound shouldn&apos;t depend on someone else&apos;s login
            credentials. We build revenue infrastructure you own, operate,
            and keep, even if we part ways.
          </p>

          <div className="hero-reveal opacity-0 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:david@datamodulator.ro?subject=Territory%20Snapshot%20Request"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent-500 text-primary-950 transition-all duration-300 hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a territory snapshot
              <span className="ml-2">&rarr;</span>
            </a>
            <button
              onClick={() =>
                document
                  .getElementById('approach')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-primary-600 text-primary-50 transition-all duration-300 hover:border-primary-400 hover:scale-[1.02] active:scale-[0.98]"
            >
              See how it works
            </button>
          </div>

          <div className="hero-reveal opacity-0 mt-16 pt-8 border-t border-primary-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {proofItems.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500 mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-primary-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
