// Components
import { Box, Button, Stack, Typography, Link } from '@mui/material'
import { Page } from '@/frontend/shared/components'
import NextImage from 'next/image'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Styles
import styles from './Home.module.css'

// Constants
const HOME_PAGE_TITLE = `Hugo Corta`
const HOME_PAGE_DESCRIPTION = `Software developer at @CoverWallet`

export const Home: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
      className={styles.container}
    >
      <Stack justifyContent={'center'} flexDirection={'column'}>
        <Typography m={0} variant={'h2'} component={'span'}>
          {`Hi – I’m `}
          <span className={'gradient-text'}>Hugo</span>
        </Typography>
        <Typography
          m={0}
          variant={'subtitle1'}
          color={'text.primary'}
          component={'span'}
        >
          {HOME_PAGE_DESCRIPTION}
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

      <Box
        display={'block'}
        width={'360px'}
        height={'360px'}
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
