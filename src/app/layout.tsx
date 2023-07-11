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
  src: [
    {
      path: '../../public/fonts/x/x-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/x/x-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/x/x-medium.woff2',
      weight: '600',
      style: 'normal'
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
        <link rel='manifest' href='/manifest.json' />
        <meta name='viewport' content='viewport-fit=cover' />
      </head>
      <body className={font.className}>
        <AppShell>{children}</AppShell>
      </body>
      <Analytics />
    </html>
  )
}
