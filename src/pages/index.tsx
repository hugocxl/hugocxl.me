// Components
import { Box, Stack, Typography } from '@mui/material'
import { LinkIconButton, Page } from '@/shared/components'
import NextImage from 'next/image'
import {
  BsFillEnvelopeFill,
  BsGithub,
  BsTwitter,
  BsLinkedin
} from 'react-icons/bs'

// Types
import { NextPage } from 'next'

// Constants
const HOME_PAGE_TITLE = `Hugo Corta`
const HOME_PAGE_DESCRIPTION = `Software developer and open source author`

const HomePage: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack justifyContent={'center'} flexDirection={'column'}>
        <Typography mb={0} variant={'h1'} component={'span'}>
          {`Hi – I’m `}
          <span className={'gradient-text'}>Hugo</span>
        </Typography>
        <Typography
          variant={'h4'}
          color={'text.primary'}
          component={'span'}
          mb={4}
        >
          {HOME_PAGE_DESCRIPTION}
        </Typography>
        <Typography fontSize={'20px'} lineHeight={'32px'} mb={1}>
          This website is supposed to be part portfolio, part rambling space. A
          place where I’ll try to show my skills and projects, check it out!
        </Typography>

        <Stack spacing={1}>
          <LinkIconButton
            icon={BsFillEnvelopeFill}
            href={`mailto: corta.hugo@gmail.com`}
            title={`Mail corta.hugo@gmail.com`}
          />
          <LinkIconButton
            icon={BsGithub}
            href={`https://github.com/hcorta`}
            title={`GitHub @hcorta`}
          />
          <LinkIconButton
            icon={BsTwitter}
            href={`https://twitter.com/`}
            title={`Twitter @hcorta`}
          />
          <LinkIconButton
            icon={BsLinkedin}
            href={`https://www.linkedin.com/in/hugocorta`}
            title={`LinkedIn @hugocorta`}
          />
        </Stack>
      </Stack>
      <Box
        display={'block'}
        width={'400px'}
        height={'400px'}
        position={'relative'}
      >
        <NextImage
          layout={'fill'}
          objectFit={'cover'}
          placeholder={'blur'}
          alt={'Hugo Corta'}
          title={'Hugo Corta'}
          src={'/img/avatar.png'}
          blurDataURL={'/img/avatar.png'}
        />
      </Box>
    </Page>
  )
}

export default HomePage
