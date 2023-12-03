// Dependencies
import { styled } from '@styled-system/jsx'
import localFont from 'next/font/local'

// Components
import { Flex } from '../flex'
import { Link } from '../link'
import { Typography } from '../typography'
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX
} from '@tabler/icons-react'

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

const linkProps = {
  color: 'text.dimmed',
  textDecoration: 'none',
  fontSize: 'sm',
  target: '_blank',
  fontWeight: 'medium'
}

export function AppShell({ children }: AppShellProps) {
  return (
    <styled.body
      w={'100%'}
      minHeight={'100dvh'}
      className={font.className}
      display={'grid'}
      gridTemplateRows={'1fr auto'}
    >
      <styled.main
        w={'100%'}
        maxW={'720px'}
        margin={'0 auto'}
        px={'md'}
        py={'15dvh'}
        mdDown={{
          py: '10dvh'
        }}
        smDown={{
          py: '5dvh'
        }}
      >
        {children}
      </styled.main>

      <styled.footer borderTop={'primary'} width={'100%'}>
        <Flex
          maxW={'720px'}
          py={'sm'}
          px={'md'}
          margin={'0 auto'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography fontSize={'sm'} color={'text.dimmed'}>
            {'CC BY-NC 4.0 2023 © Hugo Corta'}
          </Typography>

          <Flex gap={'sm'} alignItems={'center'}>
            <Link
              {...linkProps}
              href={'mailto:corta.hugo@gmail.com'}
              title={'Mail'}
            >
              <IconMail size={'16px'} color='currentColor' strokeWidth={1} />
            </Link>
            <Link
              {...linkProps}
              href={'https://github.com/hugocxl'}
              title={'GitHub @hugocxl'}
            >
              <IconBrandGithub
                size={'16px'}
                color='currentColor'
                strokeWidth={1}
              />
            </Link>
            <Link
              {...linkProps}
              href={'https://twitter.com/hugocxl'}
              title={'Twitter @hugocxl'}
            >
              <IconBrandX size={'16px'} color='currentColor' strokeWidth={1} />
            </Link>
            <Link
              {...linkProps}
              href={'https://www.linkedin.com/in/hugocorta'}
              title={'LinkedIn @hugocorta'}
            >
              <IconBrandLinkedin
                size={'16px'}
                color='currentColor'
                strokeWidth={1}
              />
            </Link>
          </Flex>
        </Flex>
      </styled.footer>
    </styled.body>
  )
}
