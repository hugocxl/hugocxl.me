// Dependencies
import { Link, Stack, Typography } from '@mui/material'
import * as React from 'react'

const Home = () => {
  return (
    <Stack direction={'column'} height={'100%'} justifyContent={'center'}>
      <Typography variant={'h3'}>{`Hi 👋 – I’m Hugo`}</Typography>
      <Typography color={'textSecondary'}>
        <strong>Software developer</strong> at <strong>@Metasoccer</strong>
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
  )
}

export default Home
