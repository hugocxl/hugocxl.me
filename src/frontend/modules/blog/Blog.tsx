// Components
import { Page } from '@/frontend/shared/components'
import { Box, Card, Paper, Stack, Table, Text, Title } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'
import { Post, PostTags } from '@/frontend/shared/types'

// Constants
const BASE_BLOG_PATH = 'blog'
const BLOG_PAGE_TITLE = 'Blog'
const BLOG_PAGE_DESCRIPTION = `I like to blog about the stuff I'm interested in. Hopefully you'll find some of it interesting too`

export interface BlogPageProps {
  posts: Post[]
  tags: PostTags
}

export const Blog: NextPage<BlogPageProps> = ({ posts, tags }) => {
  return (
    <Page title={BLOG_PAGE_TITLE} description={BLOG_PAGE_DESCRIPTION}>
      {posts.map((post, i) => {
        const { slug, meta } = post
        const { title, description, tags, date } = meta
        const jsDate = new Date(date)
        const dateLabel = `${jsDate.getMonth()} - ${jsDate.getFullYear()}`

        return (
          <NextLink
            href={`/${BASE_BLOG_PATH}/${slug}`}
            key={slug}
            style={{ color: 'inherit' }}
          >
            <Paper
              withBorder
              py={'lg'}
              radius={0}
              sx={{ borderLeft: 0, borderTop: 0, borderRight: 0 }}
            >
              <Stack spacing={0}>
                <Text variant='link' size={'xs'}>
                  {dateLabel}
                </Text>
                <Text weight={'bold'}>{title}</Text>
                <Text size={'sm'} color={'dimmed'}>
                  {description}
                </Text>
              </Stack>
            </Paper>
          </NextLink>
        )
      })}
    </Page>
  )
}
