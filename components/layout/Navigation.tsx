'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = `/#${sectionId}`
    }
  }

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    } else {
      window.location.href = '/'
    }
  }

  const sectionLinks = [
    { label: 'Approach', href: 'approach' },
    { label: 'Infrastructure', href: 'infrastructure' },
    { label: 'Markets', href: 'markets' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-950/95 border-b border-primary-800'
          : 'bg-primary-950/80'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Brand */}
          <button
            onClick={handleLogoClick}
            className="flex items-baseline gap-2"
            aria-label="Home"
          >
            <span className="text-[22px] font-bold tracking-tight text-white">
              DM Growth
            </span>
            <span className="font-mono text-[11px] text-primary-500 hidden sm:inline">
              by DataModulator
            </span>
          </button>

          {/* Desktop nav - hidden below sm (640px) */}
          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="/market-intelligence"
              className={`text-sm transition-colors ${
                pathname === '/market-intelligence'
                  ? 'text-accent-500'
                  : 'text-primary-400 hover:text-primary-200'
              }`}
            >
              Market Intelligence
            </Link>
            {sectionLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleSectionClick(link.href)}
                className="text-sm text-primary-400 hover:text-primary-200 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleSectionClick('start')}
              className="px-4 py-2 text-sm font-semibold rounded-full bg-accent-500 text-primary-950 transition-all duration-300 hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start here &rarr;
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
