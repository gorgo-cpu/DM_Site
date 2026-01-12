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

  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="bg-primary-950 border-t border-primary-800 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                DM<span className="text-accent-500">.</span>
              </h3>
              <p className="text-primary-400 text-sm">
                We build automated sales engines that fill your calendar with qualified B2B meetings.
              </p>
              <p className="text-primary-400 text-sm mt-4">
                Situated in Bucharest, Romania.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-primary-200 mb-4">Navigation</h4>
              <ul className="space-y-2">
                {['solution', 'process', 'results', 'pricing'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-primary-400 hover:text-accent-500 transition-colors text-sm capitalize"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-primary-200 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setOpenLegal('privacy')}
                    className="text-primary-400 hover:text-accent-500 transition-colors text-sm"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenLegal('terms')}
                    className="text-primary-400 hover:text-accent-500 transition-colors text-sm"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-primary-200 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-400">
                <li>
                  <a
                    href="mailto:david@dm-growth.com"
                    className="hover:text-accent-500 transition-colors"
                  >
                    david@dm-growth.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+40731836462"
                    className="hover:text-accent-500 transition-colors"
                  >
                    +40 731 836 462
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+40773388205"
                    className="hover:text-accent-500 transition-colors"
                  >
                    +40 773 388 205 (DACH Region)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-500 text-sm">
                Ac {currentYear} DM Growth. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {/* Social links placeholder */}
                <a
                  href="#"
                  className="text-primary-500 hover:text-accent-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/dm-growth/"
                  className="text-primary-500 hover:text-accent-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <LegalOverlay openSection={openLegal} onClose={() => setOpenLegal(null)} />
    </>
  )
}
