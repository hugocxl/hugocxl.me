// Types
import { NextPage } from 'next'

// Components
import NextLink from 'next/link'
import { Page } from '@/frontend/shared/components'
import { Button } from '@mantine/core'

// Constants
const NOTFOUND_PAGE_TITLE = '404 – Hugo Corta'
const NOTFOUND_PAGE_DESCRIPTION = ` Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?`

const NotFound: NextPage = () => {
  return (
    <Page title={NOTFOUND_PAGE_TITLE} description={NOTFOUND_PAGE_DESCRIPTION}>
      <NextLink href='/'>
        <Button variant={'default'}>Return Home</Button>
      </NextLink>
    </Page>
  )
}

export default NotFound
