'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Container className="relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Personalized outbound that brings in
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              high-paying clients.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            With our proven system, we'll use our outbound systems to position your company as the go-to expert in your niche. We'll grow your company together and generate predictable income.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get Started Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('solution')}
            >
              Explore Solutions
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-800">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-primary-400">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">
                98%
              </div>
              <div className="text-sm md:text-base text-primary-400">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">
                3x
              </div>
              <div className="text-sm md:text-base text-primary-400">
                Average ROI
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}


