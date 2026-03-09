'use client'

import React, { useState } from 'react'
import Container from '@/components/ui/Container'
import LegalOverlay from '@/components/layout/LegalOverlay'
import type { LegalSection } from '@/components/legal/LegalContent'

export default function Footer() {
  const [openLegal, setOpenLegal] = useState<LegalSection>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <footer className="border-t border-primary-800 py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <p className="text-lg font-bold text-white mb-1">DM Growth</p>
              <p className="font-mono text-xs text-primary-500">
                Revenue infrastructure by DataModulator
              </p>
            </div>

            {/* Navigate */}
            <div>
              <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-4">
                NAVIGATE
              </p>
              <ul className="space-y-2">
                {[
                  { label: 'Approach', href: 'approach' },
                  { label: 'Infrastructure', href: 'infrastructure' },
                  { label: 'Markets', href: 'markets' },
                  { label: 'Start here', href: 'start' },
                ].map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm text-primary-400 hover:text-primary-200 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-4">
                CONTACT
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:david@datamodulator.ro"
                    className="text-sm text-primary-400 hover:text-primary-200 transition-colors"
                  >
                    david@datamodulator.ro
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:georg@dm-growth.com"
                    className="text-sm text-primary-400 hover:text-primary-200 transition-colors"
                  >
                    georg@dm-growth.com (DACH)
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-primary-500 mb-4">
                LEGAL
              </p>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setOpenLegal('terms')}
                    className="text-sm text-primary-400 hover:text-primary-200 transition-colors"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenLegal('privacy')}
                    className="text-sm text-primary-400 hover:text-primary-200 transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-primary-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-primary-600">
              &copy; 2026 DataModulator. All rights reserved.
            </p>
            <p className="font-mono text-xs text-primary-600">
              Bucharest, Romania
            </p>
          </div>
        </Container>
      </footer>

      <LegalOverlay openSection={openLegal} onClose={() => setOpenLegal(null)} />
    </>
  )
}
