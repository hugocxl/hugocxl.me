// Deps
import { Analytics } from '@vercel/analytics/react'

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
    template: 'hugocxl • %s',
    default: 'hugocxl'
  },
  manifest: '/manifest.json',
  generator: 'Next.js',
  applicationName: 'hugocxl',
  referrer: 'origin-when-cross-origin',
  keywords: ['hugocxl', 'Hugo Corta'],
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
    url: 'https://hugocxl.me/',
    siteName: 'hugocxl',
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'} data-theme-mode={'dark'}>
      <head>
        <link color={'text.dimmed'} rel='manifest' href='/manifest.json' />
        <link
          color={'text.dimmed'}
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          color={'text.dimmed'}
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          color={'text.dimmed'}
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </head>

      <AppShell>{children}</AppShell>

      <Analytics />
    </html>
  )
}
