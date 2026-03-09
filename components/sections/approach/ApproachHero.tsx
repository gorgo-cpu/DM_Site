'use client'

import React, { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import Container from '@/components/ui/Container'

export default function ApproachHero() {
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
      id="approach-hero"
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      <Container className="relative z-10 pt-32 pb-20">
        <div ref={ref} className="max-w-3xl">
          <p className="hero-reveal opacity-0 font-mono text-xs tracking-[2px] uppercase text-accent-500">
            HOW WE&apos;RE DIFFERENT
          </p>

          <h1 className="hero-reveal opacity-0 mt-8 text-[clamp(36px,5vw,56px)] font-bold tracking-tight leading-[1.1]">
            Stop renting pipeline. Start owning it.
          </h1>

          <p className="hero-reveal opacity-0 mt-8 text-[18px] font-light text-primary-300 leading-[1.7] max-w-[600px]">
            Every agency promises results. We install the system that produces them,
            then hand you the keys. Here&apos;s exactly how that works and why it matters.
          </p>
        </div>
      </Container>
    </section>
  )
}
