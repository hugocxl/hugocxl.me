// Components
import { Page } from '@/frontend/shared/components'
import { Anchor, Stack, Text } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { BLOG } from '@/frontend/shared/constants'

export interface BlogProps {
  posts: Items
}

export const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Page title={BLOG.title} description={BLOG.description}>
      <Stack spacing={'xl'}>
        {posts.map(({ slug, name, description, updatedAt }) => {
          const date = new Date(updatedAt)
          const updatedAtLabel = `Last updated: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

          return (
            <Anchor
              className='hoverable'
              href={`${BLOG.href}/${slug}`}
              key={slug}
            >
              <Stack spacing={0}>
                <Text color={'primary'} fw={'bold'}>
                  {name}
                </Text>
                <Text color={'secondary'}>{description}</Text>
                <Text color={'link'} size={'xs'}>
                  {updatedAtLabel}
                </Text>
              </Stack>
            </Anchor>
          )
        })}
      </Stack>
    </Page>
  )
}
