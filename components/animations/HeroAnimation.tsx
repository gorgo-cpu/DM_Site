'use client'

import React, { useEffect, useRef } from 'react'
import * as animeModule from 'animejs'

const anime = (animeModule as any).default || animeModule

interface HeroAnimationProps {
  children: React.ReactNode
  className?: string
}

export default function HeroAnimation({ children, className = '' }: HeroAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !ref.current) return

    const words = ref.current.querySelectorAll('.word')

    anime({
      targets: words,
      opacity: [0, 1],
      translateY: [40, 0],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: anime.stagger(60, { start: 200 }),
    })
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

