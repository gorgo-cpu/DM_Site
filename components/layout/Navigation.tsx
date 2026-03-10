'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { useContactModal } from '@/components/layout/ContactModalProvider'
import { trackEvent } from '@/lib/analytics'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openModal } = useContactModal()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const overlayRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Close on click outside
  useEffect(() => {
    if (!mobileOpen) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      const clickedToggle = toggleRef.current?.contains(target)
      const clickedOverlay = overlayRef.current?.contains(target)
      if (!clickedToggle && !clickedOverlay) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [mobileOpen])

  const handleSectionClick = useCallback((sectionId: string) => {
    trackEvent('nav_click', { target: `/#${sectionId}` })
    setMobileOpen(false)
    if (isHome) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = `/#${sectionId}`
    }
  }, [isHome])

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    } else {
      window.location.href = '/'
    }
  }

  const handleNavLinkClick = (href: string) => {
    trackEvent('nav_click', { target: href })
    setMobileOpen(false)
  }

  const handleStartHere = () => {
    trackEvent('cta_click', { label: 'Start here', page: pathname })
    setMobileOpen(false)
    openModal('general')
  }

  const sectionLinks = [
    { label: 'Infrastructure', href: 'infrastructure' },
    { label: 'Markets', href: 'markets' },
  ]

  const pageLinks = [
    { label: 'Market Intelligence', href: '/market-intelligence' },
    { label: 'Approach', href: '/approach' },
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
            <span className="text-[12px] font-light text-primary-500 hidden sm:inline">
              by DataModulator
            </span>
          </button>

          {/* Desktop nav - hidden below sm (640px) */}
          <div className="hidden sm:flex items-center gap-8">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? 'text-accent-500'
                    : 'text-primary-400 hover:text-primary-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
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
              onClick={handleStartHere}
              className="px-4 py-2 text-sm font-semibold rounded-full bg-accent-500 text-primary-950 transition-all duration-300 hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start here &rarr;
            </button>
          </div>

          {/* Mobile hamburger - visible below sm (640px) */}
          <button
            className="sm:hidden relative w-10 h-10 flex items-center justify-center"
            ref={toggleRef}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? 'Close' : 'Open'} menu</span>
            <span
              className={`absolute h-[2px] w-5 bg-white rounded-full transition-transform duration-200 motion-reduce:transition-none ${
                mobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-[6px]'
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 bg-white rounded-full transition-opacity duration-200 motion-reduce:transition-none ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-[2px] w-5 bg-white rounded-full transition-transform duration-200 motion-reduce:transition-none ${
                mobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-[6px]'
              }`}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className={`sm:hidden overflow-hidden border-b border-primary-800 bg-primary-950/95 backdrop-blur-md transition-[max-height] duration-200 motion-reduce:transition-none ${
          mobileOpen ? 'max-h-[400px]' : 'max-h-0 border-b-0'
        }`}
      >
        <Container>
          <div className="flex flex-col items-center py-4 gap-1">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className={`w-full text-center py-3 text-sm min-h-[44px] flex items-center justify-center transition-colors ${
                  pathname === link.href
                    ? 'text-accent-500'
                    : 'text-primary-400 hover:text-primary-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {sectionLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleSectionClick(link.href)}
                className="w-full text-center py-3 text-sm text-primary-400 hover:text-primary-200 transition-colors min-h-[44px] flex items-center justify-center"
              >
                {link.label}
              </button>
            ))}

            {/* Separator */}
            <div className="w-full border-t border-primary-800 my-1" />

            <button
              onClick={handleStartHere}
              className="mt-1 px-6 py-3 text-sm font-semibold rounded-full bg-accent-500 text-primary-950 transition-all duration-300 hover:bg-accent-600 active:scale-[0.98] min-h-[44px]"
            >
              Start here &rarr;
            </button>
          </div>
        </Container>
      </div>
    </header>
  )
}
