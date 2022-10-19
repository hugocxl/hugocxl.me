// Components
import { Box, Stack, Typography } from '@mui/material'
import { LinkIconButton, Page } from '@/shared/components'
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
      flexDirection={'column'}
      height={'100%'}
      position={'relative'}
    >
      <Typography
        align={'center'}
        gutterBottom={false}
        variant={'h2'}
        className={'gradient-text'}
        component={'span'}
      >{`Hi, I’m Hugo`}</Typography>
      <Typography variant={'h4'} component={'span'} align={'center'}>
        {HOME_PAGE_DESCRIPTION}
      </Typography>
      <Typography fontSize={'20px'} lineHeight={'32px'} mb={4} align={'center'}>
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
    </Page>
  )
}

export default HomePage
