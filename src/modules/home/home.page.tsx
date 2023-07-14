// Components
import { Box, Typography, Container } from '@/shared/components'
import { IconBox, IconHeart } from '@tabler/icons'

// Types
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Hugo Corta · Software Craftsman',
  description: 'Welcome to my personal rambling space'
}

export const Home: NextPage = () => {
  const iconProps = {
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
          corta, hugo.
          <Typography color={'text.primary'}> software craftsman. </Typography>
          unsatisfiably curious. passionate about software design.{' '}
          <Typography color={'text.secondary'}>
            <IconHeart {...iconProps} /> love to craft amazing digital products.
          </Typography>{' '}
          <IconBox {...iconProps} /> open source contributor.
        </Typography>
      </Container>
    </Box>
  )
}
