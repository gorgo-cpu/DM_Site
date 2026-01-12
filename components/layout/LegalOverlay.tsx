'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { LegalSection, PrivacyContent, TermsContent, legalMeta } from '@/components/legal/LegalContent'

type LegalOverlayProps = {
  openSection: LegalSection
  onClose: () => void
}

export default function LegalOverlay({ openSection, onClose }: LegalOverlayProps) {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<Exclude<LegalSection, null>>('terms')
  const isOpen = openSection !== null
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (isOpen) {
      document.body.classList.add('legal-open')
    } else {
      document.body.classList.remove('legal-open')
    }

    return () => {
      document.body.classList.remove('legal-open')
    }
  }, [isOpen, mounted])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const scrollToSection = useCallback((id: string) => {
    const container = scrollContainerRef.current
    const el = document.getElementById(id)
    const offset = window.innerWidth < 640 ? 275 : 150

    if (container && el) {
      const top = Math.max(el.offsetTop - offset, 0) // land higher so the subtitle stays in view
      container.scrollTo({ top, behavior: 'smooth' })
      return
    }

    if (el) {
      const top = Math.max(el.offsetTop - offset, 0)
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    if (!isOpen || !openSection) return
    setActiveTab(openSection)
    const targetId = openSection === 'terms' ? 'legal-terms' : 'legal-privacy'
    const timeout = setTimeout(() => scrollToSection(targetId), 80)
    return () => clearTimeout(timeout)
  }, [isOpen, openSection, scrollToSection])

  useEffect(() => {
    if (!isOpen || !scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const termsEl = document.getElementById('legal-terms')
    const privacyEl = document.getElementById('legal-privacy')
    if (!termsEl || !privacyEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.id === 'legal-privacy' ? 'privacy' : 'terms'
            setActiveTab(targetId as Exclude<LegalSection, null>)
          }
        })
      },
      {
        root: container,
        threshold: 0.35,
      }
    )

    observer.observe(termsEl)
    observer.observe(privacyEl)
    return () => observer.disconnect()
  }, [isOpen])

  const handleNavClick = (section: Exclude<LegalSection, null>) => {
    setActiveTab(section)
    const targetId = section === 'terms' ? 'legal-terms' : 'legal-privacy'
    scrollToSection(targetId)
  }

  if (!mounted) return null

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-start sm:items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-8 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Legal information"
    >
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      <div
        className={`relative z-10 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-slate-900/90  text-white shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-[0.98] opacity-0'
        }`}
      >
        <div className="relative flex flex-col gap-3 border-b border-white/15 bg-transparent backdrop-blur-md px-6 py-5 sm:px-8">
          <div className="text-center sm:px-16">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-white/70">Legal</p>
            <h3 className="text-sm sm:text-base font-semibold text-white">DM Growth - Terms &amp; Privacy</h3>
            <p className="text-xs sm:text-sm text-white/70">Effective date: {legalMeta.effectiveDate}</p>
          </div>
          <button
            onClick={onClose}
            className="order-3 self-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:absolute sm:order-none sm:right-8 sm:top-6 sm:self-auto"
            aria-label="Close legal overlay"
          >
            Close
          </button>
          <div className="mt-2 flex w-full items-center justify-center gap-3 sm:absolute sm:left-8 sm:top-6 sm:mt-0 sm:w-auto sm:flex-col sm:items-start">
            <button
              onClick={() => handleNavClick('terms')}
              className={`w-full min-w-[88px] rounded-full bg-white/15 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto ${
                activeTab === 'terms'
                  ? 'bg-white text-slate-900 shadow-sm hover:bg-white/90'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Terms
            </button>
            <button
              onClick={() => handleNavClick('privacy')}
              className={`w-full min-w-[88px] rounded-full bg-white/15 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto ${
                activeTab === 'privacy'
                  ? 'bg-white text-slate-900 shadow-sm hover:bg-white/90'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Privacy
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="max-h-[75vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-10 text-white"
        >
          <TermsContent />
          <hr className="border-white/15" />
          <PrivacyContent />
        </div>
      </div>
    </div>,
    document.body
  )
}
