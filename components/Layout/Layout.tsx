// Types
import { LayoutProps } from './Layout.types'
import { FC } from 'react'

// Constants
import { PAGES } from '../../constants'

// Components
import Link from 'next/link'
import { Stack, Typography, Box } from '@mui/material'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

export const Layout: FC<LayoutProps> = ({ children }) => {
  function Header() {
    return (
      <Stack
        component={'header'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Link href='/'>
          <a>🏡</a>
        </Link>

        <Stack spacing={1}>
          {PAGES.map(({ label, path }) => (
            <Link href={path}>
              <a>{label}</a>
            </Link>
          ))}
        </Stack>
      </Stack>
    )
  }

  function Footer() {
    return (
      <Stack
        component={'footer'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography variant={'body2'}>
          Designed and built by <strong>{'@hcorta'}</strong>
        </Typography>

        <Stack>
          <a
            href={`https://github.com/hcorta`}
            title={`GitHub @hcorta`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub />
          </a>

          <a
            href={`https://twitter.com/hcorta`}
            title={`Twitter @hcorta`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsTwitter />
          </a>

          <a
            href={`https://www.linkedin.com/in/hugocorta`}
            title={`LinkedIn @hugocorta`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsLinkedin />
          </a>
        </Stack>
      </Stack>
    )
  }

  return (
    <Box
      display={'grid'}
      gridTemplateRows={'auto 1fr auto'}
      minHeight={'100vh'}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
