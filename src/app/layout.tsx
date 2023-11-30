// Deps
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

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
import { PAGES } from '@/shared/constants'

const font = Inter({ subsets: ['latin'] })

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
      <styled.body
        w={'100%'}
        minHeight={'100dvh'}
        className={font.className}
        p={'md'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <styled.header
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography color={'text.secondary'} fontWeight={'bold'}>
            {'@hugocxl'}
          </Typography>
          <Flex gap={'md'} alignItems={'baseline'}>
            {PAGES.map(page => (
              <Link
                color={'text.dimmed'}
                textDecoration={'none'}
                href={page.href}
                fontSize={'sm'}
                key={page.href}
              >
                {page.title}
              </Link>
            ))}
          </Flex>
        </styled.header>
        <styled.main mb={'60px'}>{children}</styled.main>

        <styled.footer
          justifyContent={'space-between'}
          display={'flex'}
          smDown={{
            flexDirection: 'column',
            flexFlow: 'column-reverse'
          }}
        >
          <Typography fontSize={'sm'} color={'text.dimmed'}>
            {'CC BY-NC 4.0 2023 © Hugo Corta'}
          </Typography>

          <Flex gap={'md'} alignItems={'center'} color={'text.dimmed'}>
            <Link
              color={'text.dimmed'}
              textDecoration={'none'}
              fontSize={'sm'}
              href={'mailto:corta.hugo@gmail.com'}
              title={'Mail'}
              target={'_blank'}
            >
              {'Mail'}
            </Link>
            <Link
              color={'text.dimmed'}
              textDecoration={'none'}
              fontSize={'sm'}
              href={'https://github.com/hugocxl'}
              title={'GitHub @hugocxl'}
              target={'_blank'}
            >
              {'GitHub'}
            </Link>
            <Link
              color={'text.dimmed'}
              textDecoration={'none'}
              fontSize={'sm'}
              href={'https://twitter.com/hugocxl'}
              title={'Twitter @hugocxl'}
              target={'_blank'}
            >
              {'Twitter'}
            </Link>
            <Link
              color={'text.dimmed'}
              textDecoration={'none'}
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
