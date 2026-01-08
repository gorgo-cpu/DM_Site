'use client'

import React from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/layout/ScrollReveal'

export default function FinalCTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-950 via-primary-900 to-accent-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready To Transform Your 
              Digital Presence?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600 mt-2">
                
              </span>
            </h2>
            <p className="text-lg md:text-xl text-primary-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join successful businesses that have unlocked exponential 
              growth with our proven marketing strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-10"
              >
                Start Your Journey
              </Button>
              <p className="text-primary-400 text-sm">
                Free strategy call • No commitment required
              </p>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-primary-700/50">
              <div>
                <div className="text-accent-500 font-bold text-2xl mb-1">
                  24/7
                </div>
                <div className="text-primary-400 text-sm">
                  Priority Support
                </div>
              </div>
              <div>
                <div className="text-accent-500 font-bold text-2xl mb-1">
                 
                </div>
                <div className="text-primary-400 text-sm">
                  
                </div>
              </div>
              <div>
                <div className="text-accent-500 font-bold text-2xl mb-1">
                  100%
                </div>
                <div className="text-primary-400 text-sm">
                  Transparent
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}


