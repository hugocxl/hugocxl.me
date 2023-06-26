// Deps
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

// Types
import { ReactNode } from 'react'
import { Metadata } from 'next'

// Components
import { AppShell } from '@/shared/components'

// Styles
import '@/shared/styles/global.css'
import '@/shared/styles/notion.css'
import '@/shared/styles/prismjs.css'

export const metadata: Metadata = {
  title: {
    template: 'hugoclx • %s',
    default: 'hugoclx'
  },
  manifest: '/manifest.json',
  generator: 'Next.js',
  applicationName: 'hugoclx',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'TDD', 'DDD'],
  creator: 'Hugo Corta',
  publisher: 'Hugo Corta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png'
  },
  openGraph: {
    title: 'hugoclx',
    description: 'Personal website',
    url: 'https://hugocorta.com/',
    siteName: 'hugoclx',
    locale: 'en_US',
    type: 'website'
  }
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' data-theme-mode='dark'>
      <head>
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
      <Analytics />
    </html>
  )
}
