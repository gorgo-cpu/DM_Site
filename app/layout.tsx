import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ContactModalProvider from '@/components/layout/ContactModalProvider'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DM Growth | Revenue Infrastructure You Own',
  description: 'We don\'t rent you leads. We install the outbound engine that generates them. Revenue infrastructure for B2B companies targeting DACH, UK, and Romanian markets.',
  icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
  },
  keywords: ['outbound infrastructure', 'B2B lead generation', 'revenue infrastructure', 'DACH outbound', 'UK B2B sales', 'Romania B2B', 'sending infrastructure', 'cold email infrastructure', 'outbound sales'],
  authors: [{ name: 'DataModulator' }],
  openGraph: {
    title: 'DM Growth | Revenue Infrastructure You Own',
    description: 'We don\'t rent you leads. We install the outbound engine that generates them. Revenue infrastructure for B2B companies targeting DACH, UK, and Romanian markets.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DM Growth | Revenue Infrastructure You Own',
    description: 'We don\'t rent you leads. We install the outbound engine that generates them. Revenue infrastructure for B2B companies targeting DACH, UK, and Romanian markets.',
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
      <head>
        {process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' && (
          <script defer data-domain="datamodulator.ro" src="https://plausible.io/js/script.js" />
        )}
      </head>
      <body className={plusJakarta.className}>
        <ContactModalProvider>
          <div id="page-shell" className="page-shell min-h-screen">
            {children}
          </div>
        </ContactModalProvider>
      </body>
    </html>
  )
}
