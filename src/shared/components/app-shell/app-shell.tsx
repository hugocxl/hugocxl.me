// Dependencies
import { styled } from '@styled-system/jsx'
import localFont from 'next/font/local'

// Components
import { Flex } from '../flex'
import { Link } from '../link'
import { Typography } from '../typography'

// Constants
import { PAGES } from '@/shared/constants'

// Types
import { ReactNode } from 'react'

const font = localFont({
  preload: true,
  src: [
    {
      path: '../../../../public/fonts/sohne/medium.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../../public/fonts/sohne/bold.otf',
      weight: '600',
      style: 'normal'
    }
  ]
})

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <styled.body
      w={'100%'}
      minHeight={'100dvh'}
      maxW={'720px'}
      margin={'0 auto'}
      className={font.className}
      p={'md'}
      display={'grid'}
      gridTemplateRows={'auto 1fr auto'}
    >
      <styled.header
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        pt={'lg'}
        pb={'60px'}
      >
        {/* <Flex gap={'xs'}>
          <Typography color={'text.secondary'} fontWeight={'bold'}>
            {'Hugo Corta'}
          </Typography>
          |
          <Typography color={'text.dimmed'} fontWeight={'bold'}>
            {'Tech Lead'}
          </Typography>
        </Flex> */}
        <Flex gap={'sm'} alignItems={'baseline'}>
          {PAGES.map(page => (
            <Link
              fontWeight={'normal'}
              textStyle={'xl'}
              // color={'text.dimmed'}
              textDecoration={'none'}
              href={page.href}
              // fontSize={'xl'}
              key={page.href}
            >
              {page.title}
            </Link>
          ))}
        </Flex>
      </styled.header>
      <styled.main padding={'xl'}>{children}</styled.main>

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
  )
}
