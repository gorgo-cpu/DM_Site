'use client'

import React, { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import Container from '@/components/ui/Container'
import { useContactModal } from '@/components/layout/ContactModalProvider'
import { trackEvent } from '@/lib/analytics'

function showAll(container: HTMLElement) {
  container.querySelectorAll('.hero-reveal').forEach((el) => {
    ;(el as HTMLElement).style.opacity = '1'
  })
}

export default function MIHero() {
  const { openModal } = useContactModal()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      showAll(ref.current)
      return
    }

    const fallback = setTimeout(() => {
      if (ref.current) showAll(ref.current)
    }, 1500)

    const blocks = ref.current.querySelectorAll('.hero-reveal')

    animate(blocks, {
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: stagger(120, { start: 200 }),
    })

    return () => clearTimeout(fallback)
  }, [])

  return (
    <section
      id="mi-hero"
      className="relative min-h-[80dvh] flex items-center overflow-hidden"
    >
      <Container className="relative z-10 pt-32 pb-20">
        <div ref={ref} className="max-w-3xl">
          <p className="hero-reveal opacity-0 font-mono text-xs tracking-[2px] uppercase text-accent-500">
            MARKET INTELLIGENCE
          </p>

          <h1 className="hero-reveal opacity-0 mt-8 text-[clamp(36px,5vw,56px)] font-bold tracking-tight leading-[1.1]">
            Know exactly who needs you before you send a single email.
          </h1>

          <p className="hero-reveal opacity-0 mt-8 text-[18px] font-light text-primary-300 leading-[1.7] max-w-[600px]">
            A structured market map of your target territory, built from live buying signals.
            Not a contact list. Not a database export. A prioritized intelligence workbook you keep and act on.
          </p>

          <div className="hero-reveal opacity-0 mt-10">
            <button
              onClick={() => { trackEvent('cta_click', { label: 'Request a territory snapshot', page: '/market-intelligence' }); openModal('territory-snapshot') }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent-500 text-primary-950 transition-all duration-300 hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request a territory snapshot
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
