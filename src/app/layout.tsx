// Deps
import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local'

// Types
import { ReactNode } from 'react'
import { Metadata } from 'next'

// Components
import { AppShell } from '@/shared/components'

// Styles
import '@/shared/styles/global.css'
import '@/shared/styles/notion.css'
import '@/shared/styles/prismjs.css'

const font = localFont({
  preload: true,
  src: [
    {
      path: '../../public/fonts/sohne/sohne.woff2'
    }
  ]
})

export const metadata: Metadata = {
  title: {
    template: 'hugocxl • %s',
    default: 'hugocxl'
  },
  manifest: '/manifest.json',
  generator: 'Next.js',
  applicationName: 'hugocxl',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'hugocxl',
    'Hugo Corta',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TDD',
    'DDD'
  ],
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
    title: 'hugocxl',
    description: 'Personal website',
    url: 'https://hugocorta.com/',
    siteName: 'hugocxl',
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'} data-theme-mode={'dark'}>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </head>
      <body className={font.className}>
        <AppShell>{children}</AppShell>
      </body>
      <Analytics />
    </html>
  )
}
