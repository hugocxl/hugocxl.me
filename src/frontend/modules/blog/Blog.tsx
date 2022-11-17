// Components
import { Page } from '@/frontend/shared/components'
import NextLink from 'next/link'
import { Card, Table, Text } from '@mantine/core'

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
      <Card
        withBorder
        p={'xl'}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
        })}
      >
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, i) => {
              const { slug, meta } = post
              const { title, description, tags, date } = meta

              return (
                <tr>
                  <td>
                    <Text size={'xs'}>{date}</Text>
                  </td>
                  <td>
                    <NextLink href={`/${BASE_BLOG_PATH}/${slug}`} key={slug}>
                      <Text variant={'link'}>{title}</Text>
                    </NextLink>
                  </td>
                  <td>
                    <Text maw={'280px'}>{description}</Text>
                  </td>
                  <td>{tags}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Card>
    </Page>
  )
}
