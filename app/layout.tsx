import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Transform Your Digital Presence | Premium Marketing Solutions',
  description: 'Elevate your brand with data-driven marketing strategies and cutting-edge digital solutions. We deliver measurable results that drive growth.',
  keywords: ['digital marketing', 'brand strategy', 'marketing solutions', 'growth marketing'],
  authors: [{ name: 'DM Site' }],
  openGraph: {
    title: 'Transform Your Digital Presence | Premium Marketing Solutions',
    description: 'Elevate your brand with data-driven marketing strategies and cutting-edge digital solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transform Your Digital Presence',
    description: 'Elevate your brand with data-driven marketing strategies and cutting-edge digital solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>{children}</body>
    </html>
  )
}

