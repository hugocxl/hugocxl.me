import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Hugo Corta',
  description: 'Creative Software Engineer',
  openGraph: {
    title: 'Hugo Corta',
    description: 'Creative Software Engineer',
    url: 'https://hugocxl.me',
    siteName: 'Hugo Corta',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Hugo Corta',
    description: 'Creative Software Engineer'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={ebGaramond.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
