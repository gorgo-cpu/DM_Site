'use client'

import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import { trackEvent } from '@/lib/analytics'

export type ContactPreset =
  | 'territory-snapshot'
  | 'infrastructure-audit'
  | 'full-proposal'
  | 'market-intelligence'
  | 'general'

const presetConfig: Record<ContactPreset, { heading: string; message: string }> = {
  'territory-snapshot': {
    heading: 'Request a Territory Snapshot',
    message: "I'd like a free Territory Snapshot for [industry] in [region].",
  },
  'infrastructure-audit': {
    heading: 'Book an Infrastructure Audit',
    message: "I'd like an infrastructure audit of our current outbound setup.",
  },
  'full-proposal': {
    heading: 'Request a Proposal',
    message: "We're interested in a full infrastructure proposal.",
  },
  'market-intelligence': {
    heading: 'Market Intelligence Report',
    message: "I'd like to discuss a Market Intelligence report for our target territory.",
  },
  general: {
    heading: 'Get in touch',
    message: '',
  },
}

type ContactModalProps = {
  isOpen: boolean
  preset: ContactPreset
  onClose: () => void
}

export default function ContactModal({ isOpen, preset, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')
  const panelRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      const config = presetConfig[preset]
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: config.message,
        honeypot: '',
      })
      setErrors({})
      setStatus('idle')
      setServerError('')
      setTimeout(() => firstInputRef.current?.focus(), 100)
    }
  }, [isOpen, preset])

  useEffect(() => {
    if (!mounted) return
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, mounted])

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => onClose(), 2000)
      return () => clearTimeout(timer)
    }
  }, [status, onClose])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen || !panelRef.current) return
    const panel = panelRef.current
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    panel.addEventListener('keydown', trapFocus)
    return () => panel.removeEventListener('keydown', trapFocus)
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setServerError('')

    const result = contactFormSchema.safeParse(form)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData
        if (!fieldErrors[field]) fieldErrors[field] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      if (res.ok) {
        trackEvent('contact_form_submit', { preset })
        setStatus('success')
      } else if (res.status === 429) {
        setServerError('Too many requests. Please try again in a few minutes.')
        setStatus('error')
      } else {
        const data = await res.json().catch(() => ({}))
        setServerError(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (!mounted) return null

  const config = presetConfig[preset]

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 transition-opacity duration-10 ease-in ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={config.heading}
    >
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-primary-950/80 backdrop-blur-lg transition-opacity duration-100 ease-out" />
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-400 ease-out bg-[radial-gradient(circle_at_center,rgba(10,13,30,0)_35%,rgba(6,8,20,0.82)_70%,rgba(6,8,20,0.95)_100%)] ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div
        ref={panelRef}
        className={`relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-primary-800 bg-primary-950 shadow-2xl transition-transform transition-opacity duration-150 ease-out will-change-transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
        }`}
      >
        <div className="flex items-center justify-between border-b border-primary-800 px-6 py-5">
          <div>
            <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-accent-500">
              CONTACT
            </p>
            <h3 className="text-lg font-semibold text-primary-50 mt-1">
              {config.heading}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-primary-400 hover:text-primary-200 hover:bg-primary-800 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-6">
          {status === 'success' ? (
            <div className="text-center py-8">
              <p className="text-lg font-semibold text-primary-50 mb-2">
                Message sent
              </p>
              <p className="text-sm text-primary-400 mb-6">
                We&apos;ll get back to you within one business day.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 text-sm font-semibold rounded-full border border-primary-600 text-primary-200 hover:border-primary-400 transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.honeypot}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cm-firstName" className="block text-xs font-medium text-primary-400 mb-1.5">
                    First name *
                  </label>
                  <input
                    ref={firstInputRef}
                    id="cm-firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-primary-700 bg-primary-900 text-sm text-primary-100 placeholder:text-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-colors"
                    placeholder="Jane"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="cm-lastName" className="block text-xs font-medium text-primary-400 mb-1.5">
                    Last name *
                  </label>
                  <input
                    id="cm-lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-primary-700 bg-primary-900 text-sm text-primary-100 placeholder:text-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-colors"
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="cm-email" className="block text-xs font-medium text-primary-400 mb-1.5">
                  Work email *
                </label>
                <input
                  id="cm-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-primary-700 bg-primary-900 text-sm text-primary-100 placeholder:text-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-colors"
                  placeholder="jane@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="cm-phone" className="block text-xs font-medium text-primary-400 mb-1.5">
                  Phone <span className="text-primary-600">(optional)</span>
                </label>
                <input
                  id="cm-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-primary-700 bg-primary-900 text-sm text-primary-100 placeholder:text-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-colors"
                  placeholder="+49 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="cm-message" className="block text-xs font-medium text-primary-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="cm-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg border border-primary-700 bg-primary-900 text-sm text-primary-100 placeholder:text-primary-600 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-colors resize-none"
                  placeholder="Tell us about your target market and current outbound setup..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {serverError && (
                <p className="text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-3">
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 text-sm font-semibold rounded-full bg-accent-500 text-primary-950 transition-all duration-300 hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? 'Sending...' : 'Send message'}
              </button>

              <p className="text-xs text-primary-600 text-center">
                We respond within one business day. No automated follow-ups.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
