// Components
import { Card, Gallery, Page } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
const BASE_BLOG_PATH = 'blog'
const BLOG_PAGE_TITLE = 'Blog ✍️'
const BLOG_PAGE_DESCRIPTION = `I write about stuff I'm interested in.`

export interface BlogPageProps {
  posts: Items
}

export const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <Page title={BLOG_PAGE_TITLE} description={BLOG_PAGE_DESCRIPTION}>
      <Gallery>
        {posts.map(({ slug, name, description, createdAt, cover }) => {
          return (
            <Card
              link={`/${BASE_BLOG_PATH}/${slug}`}
              key={slug}
              name={name}
              description={description}
              createdAt={createdAt}
              cover={cover}
            />
          )
        })}
      </Gallery>
    </Page>
  )
}
