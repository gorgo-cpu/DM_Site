'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import ContactModal, { type ContactPreset } from '@/components/layout/ContactModal'
import { trackEvent } from '@/lib/analytics'

type ContactModalContextType = {
  openModal: (preset?: ContactPreset) => void
}

const ContactModalContext = createContext<ContactModalContextType>({
  openModal: () => {},
})

export function useContactModal() {
  return useContext(ContactModalContext)
}

export default function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [preset, setPreset] = useState<ContactPreset>('general')

  const openModal = useCallback((p: ContactPreset = 'general') => {
    trackEvent('contact_modal_open', { preset: p })
    setPreset(p)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <ContactModalContext.Provider value={{ openModal }}>
      {children}
      <ContactModal isOpen={isOpen} preset={preset} onClose={closeModal} />
    </ContactModalContext.Provider>
  )
}
