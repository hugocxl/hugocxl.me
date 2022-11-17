// Types
import { NextPage } from 'next'

// Components
import NextLink from 'next/link'
import { Page } from '@/frontend/shared/components'
import { Stack, Button, Title } from '@mantine/core'

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
      <Stack align={'flex-start'} h={'100%'} justify={'center'}>
        <Title order={2}>404 – Page not found</Title>
        <p>
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <NextLink href='/'>
          <Button variant={'default'} sx={{ mt: 4 }}>
            Return Home
          </Button>
        </NextLink>
      </Stack>
    </Page>
  )
}

export default NotFound
