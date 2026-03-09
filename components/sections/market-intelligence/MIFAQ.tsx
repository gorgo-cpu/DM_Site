'use client'

import React, { useState } from 'react'
import Container from '@/components/ui/Container'
import ScrollReveal from '@/components/layout/ScrollReveal'

const faqs = [
  {
    question: 'What buying signals do you actually use?',
    answer:
      'Publicly available indicators: active job postings for specific roles, expansion announcements, technology adoption patterns visible on company websites, and advertising activity. We don\u2019t use private data or anything that requires access credentials.',
  },
  {
    question: 'How is this different from buying a list on Apollo or ZoomInfo?',
    answer:
      'Those platforms sell static records filtered by firmographics (industry, headcount, location). We deliver intelligence filtered by intent, companies showing active behavior that indicates they need your service now. A ZoomInfo list tells you a company exists. Our report tells you that company posted 3 senior roles last week and is expanding into Germany.',
  },
  {
    question: 'Do I need to buy the full report to see if this works?',
    answer:
      'No. The free Territory Snapshot covers one industry in one region. It\u2019s a real sample of the methodology, not a mockup. If the snapshot is useful, we scope the full report together.',
  },
  {
    question: 'What happens after I get the report?',
    answer:
      'That\u2019s up to you. The workbook is yours, you can hand it to your internal team, give it to another agency, or use it yourself. If you want us to execute outreach against the intelligence, we offer infrastructure build services separately.',
  },
  {
    question: 'How fresh is the data?',
    answer:
      'The report reflects live signals at the time of generation. Job postings, ad activity, and expansion patterns are captured within the week of delivery. For ongoing freshness, we offer periodic refresh cycles as an add-on.',
  },
  {
    question: 'Can you cover markets outside DACH, UK, and Romania?',
    answer:
      'The methodology works for any geography with structured public business data. DACH, UK, and Romania are our primary territories with the deepest expertise. For other markets, we scope feasibility on a case-by-case basis.',
  },
]

export default function MIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-24 md:py-32">
      <Container size="narrow">
        <ScrollReveal>
          <div className="mb-12">
            <p className="font-mono text-xs tracking-[2px] uppercase text-accent-500 mb-4">
              COMMON QUESTIONS
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15]">
              Before you ask
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-t border-primary-800">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="border-b border-primary-800">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full py-5 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="text-base font-medium text-primary-100">
                      {faq.question}
                    </span>
                    <span
                      className="text-primary-500 shrink-0 text-xl leading-none transition-transform duration-200"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-primary-400 leading-[1.75]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
