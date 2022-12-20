// Components
import { Card, Gallery, Page } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { BLOG } from '@/frontend/shared/constants'

export interface BlogPageProps {
  posts: Items
}

export const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <Page title={BLOG.title} description={BLOG.description}>
      <Gallery>
        {posts.map(({ slug, name, description, createdAt, cover }) => {
          return (
            <Card
              link={`${BLOG.href}/${slug}`}
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
