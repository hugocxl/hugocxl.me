// Components
import { Button, Stack, Typography, Link, Box } from '@mui/material'
import { Page } from '@/frontend/shared/components'
import NextImage from 'next/image'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
const HOME_PAGE_TITLE = `Hugo Corta`
const HOME_PAGE_DESCRIPTION = `Software developer at @CoverWallet`

export const Home: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        height={'100%'}
      >
        <Box
          mb={4}
          display={'block'}
          width={'140px'}
          height={'140px'}
          position={'relative'}
        >
          <NextImage
            fill={true}
            placeholder={'blur'}
            alt={'Hugo Corta'}
            title={'Hugo Corta'}
            src={'/img/avatar.png'}
            blurDataURL={'/img/avatar.png'}
          />
        </Box>

        <Typography
          fontWeight={'bolder'}
          color={'text.primary'}
          align='center'
          m={0}
          variant={'h4'}
          component={'span'}
        >
          Hi, I'm Hugo.
        </Typography>
        <Typography align='center' m={0} variant={'h1'} component={'span'}>
          I turn ideas into <br /> real life{' '}
          <span className={'gradient-text'}>{'products.'}</span>
        </Typography>

        <Stack spacing={2} my={8}>
          <NextLink href={'/blog'}>
            <Button variant={'contained'}>Read the blog</Button>
          </NextLink>
          <NextLink href={'/portfolio'}>
            <Button variant={'outlined'}>See my projects</Button>
          </NextLink>
        </Stack>

        <NextLink href={'/about'}>
          <Link color={'primary'}>{'Learn more about me ->'}</Link>
        </NextLink>
      </Stack>
    </Page>
  )
}
