// Types
import { LayoutProps } from './Layout.types'
import { FC } from 'react'

// Constants
import { PAGES } from '../../constants'

// Components
import NextLink from 'next/link'
import { Stack, Typography, Container, Link } from '@mui/material'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

export const Layout: FC<LayoutProps> = ({ children }) => {
  function Header() {
    return (
      <Stack
        py={2}
        position={'sticky'}
        top={0}
        borderBottom={1}
        borderColor={'divider'}
        component={'header'}
        bgcolor={'background.default'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <NextLink href='/'>
          <Typography fontWeight={900}>Hugo C.</Typography>
        </NextLink>

        <Stack spacing={1}>
          {PAGES.map(({ label, path }) => (
            <NextLink href={path}>
              <Link>{label}</Link>
            </NextLink>
          ))}
        </Stack>
      </Stack>
    )
  }

  function Footer() {
    return (
      <Stack
        py={2}
        borderTop={1}
        borderColor={'divider'}
        component={'footer'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography variant={'body2'} fontWeight={'bolder'}>
          {`@hcorta @ ${new Date().getFullYear()}`}
        </Typography>

        <Stack spacing={2}>
          <Link
            href={`https://github.com/hcorta`}
            title={`GitHub @hcorta`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub />
          </Link>

          <Link
            href={`https://twitter.com/hcorta`}
            title={`Twitter @hcorta`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsTwitter />
          </Link>

          <Link
            href={`https://www.linkedin.com/in/hugocorta`}
            title={`LinkedIn @hugocorta`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsLinkedin />
          </Link>
        </Stack>
      </Stack>
    )
  }

  return (
    <Container
      fixed={false}
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100vh'
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
