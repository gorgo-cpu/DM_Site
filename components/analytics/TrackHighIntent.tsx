'use client'

import { useEffect } from 'react'
import { trackHighIntentPage } from '@/lib/analytics'

export default function TrackHighIntent({ page }: { page: string }) {
  useEffect(() => {
    trackHighIntentPage(page)
  }, [page])

  return null
}
