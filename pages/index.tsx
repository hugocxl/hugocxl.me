// Dependencies
import * as React from 'react'

// Components
import { Link, Stack, Typography } from '@mui/material'
import { Page } from '../components'

const Home = () => {
  return (
    <Page>
      <Stack direction={'column'} mt={20}>
        <Typography variant={'h3'}>{`Hi 👋 – I’m Hugo`}</Typography>
        <Typography color={'textSecondary'}>
          Software developer at @Metasoccer
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
        </Typography>
      </Stack>
    </Page>
  )
}

export default Home
