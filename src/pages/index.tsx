// Components
import { Link, Stack, Typography } from '@mui/material'
import { Page } from 'src/components'

// Types
import { NextPage } from 'next'

// Constants
const HOME_PAGE_TITLE = `Hugo Corta`
const HOME_PAGE_DESCRIPTION = `Software developer and open source author`

const HomePage: NextPage = (props) => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Stack direction={'column'} height={'100%'} justifyContent={'center'}>
        <Typography variant={'h3'}>{`Hi – I’m Hugo`}</Typography>
        <Typography variant={'subtitle1'}>Software developer</Typography>
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

export default HomePage
