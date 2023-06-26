// Components
import { Box, Container, Stack, Typography } from '@/shared/components'
import {
  IconMail,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin
} from '@tabler/icons'

// Types
import { Metadata, NextPage } from 'next'

// Constants

export const metadata: Metadata = {
  title: 'Hugo Corta · Software Craftsman',
  description: 'Welcome to my personal rambling space'
}

export const Home: NextPage = () => {
  return (
    <Box
      w={'100%'}
      h={'100dvh'}
      position={'relative'}
      overflow={'hidden'}
      _before={{
        width: '100%',
        height: '100%',
        minHeight: '100dvh',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -9,
        background:
          'radial-gradient(circle,transparent 0%, var(--colors-bg-primary) 100%)'
      }}
      _after={{
        width: '100%',
        height: '100%',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -10,
        opacity: 0.35,
        backgroundImage: 'url(/img/grid.svg)',
        _light: {
          filter: 'invert(100%)'
        }
      }}
    >
      <Container
        gap={'lg'}
        h={'100%'}
        w={'100%'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <span style={{ fontFamily: 'Menlo' }}>@hugoclx</span>
        <Typography color={'text.dimmed'} fontSize={28} lineHeight={1.2}>
          creative software engineer.{' '}
          <b>passionate to craft amazing digital products. </b>
          6+ years of experience offering high-impact web solutions
        </Typography>

        <Stack direction={'row'}>
          <a
            href={'mailto:corta.hugo@gmail.com'}
            title={'Mail'}
            target={'_blank'}
          >
            <button>
              <IconMail size={18} />
            </button>
          </a>
          <a
            href={'https://github.com/hcorta'}
            title={'GitHub @hcorta'}
            target={'_blank'}
          >
            <button>
              <IconBrandGithub size={18} />
            </button>
          </a>
          <a
            href={'https://twitter.com/hcorta'}
            title={'Twitter @hcorta'}
            target={'_blank'}
          >
            <button>
              <IconBrandTwitter size={18} />
            </button>
          </a>
          <a
            href={'https://www.linkedin.com/in/hugocorta'}
            title={'LinkedIn @hugocorta'}
            target={'_blank'}
          >
            <button>
              <IconBrandLinkedin size={18} />
            </button>
          </a>
        </Stack>
      </Container>
    </Box>
  )
}
