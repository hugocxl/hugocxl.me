// Components
import { Button, Link, Stack, Typography } from '@mui/material'
import { Page } from 'src/components'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { PAGES } from 'src/constants'
const HOME_PAGE_TITLE = `Hugo Corta`
const HOME_PAGE_DESCRIPTION = `Software developer and open source author`

const HomePage: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Stack
        spacing={0}
        alignItems={'flex-end'}
        justifyContent={'center'}
        height={'100%'}
        direction={'column'}
      >
        <Typography
          gutterBottom={false}
          variant={'h4'}
          component={'h1'}
        >{`Hi 👋 – I’m Hugo`}</Typography>
        <Typography variant={'subtitle1'} component={'h2'}>
          {HOME_PAGE_DESCRIPTION}
        </Typography>

        <Typography marginTop={4}>
          {'I love creating useful products.'}
        </Typography>
        <Typography>
          Wanna reach out? You can find me on{' '}
          <Link
            href={`https://github.com/hcorta`}
            title={`GitHub @hcorta`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {'GitHub'}
          </Link>{' '}
          or{' '}
          <Link
            href={`https://twitter.com/hcorta`}
            title={`Twitter @hcorta`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {'Twitter'}
          </Link>
          {'.'}
        </Typography>

        <Stack spacing={1} mt={1}>
          {PAGES.map(({ path, label }) => (
            <NextLink href={path}>
              <Button size={'small'} variant={'outlined'}>
                {label}
              </Button>
            </NextLink>
          ))}
        </Stack>
      </Stack>
    </Page>
  )
}

export default HomePage
