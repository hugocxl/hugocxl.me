// Components
import { Box, Typography, Container } from '@/shared/components'
import { IconBox, IconMoon } from '@tabler/icons'

// Types
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Hugo Corta · Software Craftsman',
  description: 'Welcome to my personal rambling space'
}

export const Home: NextPage = () => {
  const iconsProps = {
    size: 20,
    style: {
      display: 'inline !important'
    }
  }

  return (
    <Box w={'100%'} h={'100dvh'} position={'relative'} overflow={'hidden'}>
      <Container
        gap={'md'}
        h={'100%'}
        w={'100%'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <b>@hugocxl</b>
        <Typography color={'text.dimmed'}>
          <Typography color={'text.primary'}>software craftsman. </Typography>
          unsatisfiably curious.{' '}
          <span>
            <IconMoon style={{ display: 'inline !important' }} />
          </span>
          passionate about software design. love to craft amazing digital
          products. open source contributor{' '}
          <IconBox style={{ display: 'inline !important' }} />. currently
          full-stack at @incloud.
        </Typography>
      </Container>
    </Box>
  )
}
