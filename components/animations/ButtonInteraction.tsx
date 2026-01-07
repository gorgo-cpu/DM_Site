'use client'

import React, { useRef } from 'react'
import * as animeModule from 'animejs'

const anime = (animeModule as any).default || animeModule

interface ButtonInteractionProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function ButtonInteraction({
  children,
  onClick,
  className = '',
}: ButtonInteractionProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseEnter = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !ref.current) return

    anime({
      targets: ref.current,
      scale: 1.05,
      duration: 300,
      easing: 'easeOutQuad',
    })
  }

  const handleMouseLeave = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !ref.current) return

    anime({
      targets: ref.current,
      scale: 1,
      duration: 300,
      easing: 'easeOutQuad',
    })
  }

  const handleMouseDown = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !ref.current) return

    anime({
      targets: ref.current,
      scale: 0.98,
      duration: 100,
      easing: 'easeOutQuad',
    })
  }

  const handleMouseUp = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !ref.current) return

    anime({
      targets: ref.current,
      scale: 1.05,
      duration: 200,
      easing: 'spring(1, 80, 10, 0)',
    })
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={className}
    >
      {children}
    </button>
  )
}

