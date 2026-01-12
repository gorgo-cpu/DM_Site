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
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 transition-opacity duration-300 ${
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
        className={`relative z-10 w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl transition-all duration-300 ${
          isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-[0.98] opacity-0'
        }`}
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-4 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Legal</p>
            <h2 className="text-xl font-semibold text-slate-900">DM Growth — Terms &amp; Privacy</h2>
            <p className="text-sm text-slate-500">Effective date: {legalMeta.effectiveDate}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10"
            aria-label="Close legal overlay"
          >
            Close
          </button>
        </div>

        <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-3 sm:px-8">
          <button
            onClick={() => handleNavClick('terms')}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 ${
              activeTab === 'terms'
                ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            Terms
          </button>
          <button
            onClick={() => handleNavClick('privacy')}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 ${
              activeTab === 'privacy'
                ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            Privacy
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="max-h-[70vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-10"
        >
          <TermsContent />
          <hr className="border-slate-200" />
          <PrivacyContent />
        </div>
      </div>
    </div>,
    document.body
  )
}
