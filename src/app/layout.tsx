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
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  // colorScheme: 'dark',
  // themeColor: 'black',
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  manifest: 'https://nextjs.org/manifest.json',
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png'
    }
  },
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' data-theme-mode='dark'>
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
      <Analytics />
    </html>
  )
}
