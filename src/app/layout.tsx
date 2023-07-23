// Deps
import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local'

// Types
import { ReactNode } from 'react'
import { Metadata } from 'next'

// Components
import { Flex, Link, Typography } from '@/shared/components'

// Styles
import '@/shared/styles/global.css'
import '@/shared/styles/notion.css'
import '@/shared/styles/prismjs.css'
import { styled } from '@styled-system/jsx'

const font = localFont({
  preload: true,
  src: [
    {
      path: '../../public/fonts/sf-pro/sf-pro.ttf'
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
      <styled.body
        w={'100%'}
        maxWidth={'content'}
        margin={'0 auto'}
        py={{
          base: '10vh',
          smDown: 'lg'
        }}
        className={font.className}
        px={'md'}
      >
        <styled.main mb={'60px'}>{children}</styled.main>

        <hr />

        <styled.footer
          justifyContent={'space-between'}
          pt={'md'}
          display={'flex'}
          smDown={{
            flexDirection: 'column',
            flexFlow: 'column-reverse'
          }}
        >
          <Typography fontSize={'sm'} color={'text.dimmed'}>
            {'CC BY-NC 4.0 2023 © Hugo Corta.'}
          </Typography>

          <Flex gap={'sm'} alignItems={'center'}>
            <Link
              fontSize={'sm'}
              href={'mailto:corta.hugo@gmail.com'}
              title={'Mail'}
              target={'_blank'}
            >
              {'Mail'}
            </Link>
            <span>•</span>
            <Link
              fontSize={'sm'}
              href={'https://github.com/hugocxl'}
              title={'GitHub @hugocxl'}
              target={'_blank'}
            >
              {'GitHub'}
            </Link>
            <span>•</span>
            <Link
              fontSize={'sm'}
              href={'https://twitter.com/hugocxl'}
              title={'Twitter @hugocxl'}
              target={'_blank'}
            >
              {'Twitter'}
            </Link>
            <span>•</span>
            <Link
              fontSize={'sm'}
              href={'https://www.linkedin.com/in/hugocorta'}
              title={'LinkedIn @hugocorta'}
              target={'_blank'}
            >
              {'LinkedIn'}
            </Link>
          </Flex>
        </styled.footer>
      </styled.body>

      <Analytics />
    </html>
  )
}
