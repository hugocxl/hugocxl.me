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
      height={'100%'}
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Stack
        spacing={0}
        justifyContent={'center'}
        height={'100%'}
        direction={'column'}
      >
        <Typography
          gutterBottom={false}
          variant={'h2'}
          component={'span'}
          className={'gradient-text'}
        >{`Hi!– I’m Hugo`}</Typography>
        <Typography variant={'h4'} component={'span'}>
          {HOME_PAGE_DESCRIPTION}
        </Typography>

        <Typography marginTop={1} fontSize={'24px'} lineHeight={'40px'}>
          I love creating useful products. Wanna reach out? You can find me on{' '}
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

        <Stack spacing={1} mt={4}>
          {PAGES.map(({ path, label }) => (
            <NextLink href={path} key={path}>
              <Button variant={'contained'}>{label}</Button>
            </NextLink>
          ))}
        </Stack>
      </Stack>
    </Page>
  )
}

export default HomePage
