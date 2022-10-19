// Types
import { Button, Stack, Typography } from '@mui/material'
import { NextPage } from 'next'

// Components
import Link from 'next/link'
import { Page } from '@/frontend/shared/components'

// Constants
const NOTFOUND_PAGE_TITLE = `404 – Hugo Corta`
const NOTFOUND_PAGE_DESCRIPTION = `Page not found`

const NotFound: NextPage = () => {
  return (
    <Page
      showHeader={false}
      title={NOTFOUND_PAGE_TITLE}
      description={NOTFOUND_PAGE_DESCRIPTION}
    >
      <Stack
        direction={'column'}
        alignItems={'flex-start'}
        height={'100%'}
        justifyContent={'center'}
      >
        <Typography variant={'h4'} component={'h1'}>
          404 – Page not found
        </Typography>
        <Typography>
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </Typography>
        <Link href='/'>
          <Button sx={{ mt: 4 }} variant='contained'>
            Return Home
          </Button>
        </Link>
      </Stack>
    </Page>
  )
}

export default NotFound
