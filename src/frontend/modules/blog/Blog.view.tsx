// Components
import { Card, Gallery, Page } from '@/frontend/shared/components'

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
      <Gallery>
        {posts.map(({ slug, name, description, updatedAt, cover, tag }) => {
          return (
            <Card
              tag={tag}
              link={`${BLOG.href}/${slug}`}
              key={slug}
              name={name}
              description={description}
              updatedAt={updatedAt}
              cover={cover}
              useNextImage={true}
            />
          )
        })}
      </Gallery>
    </Page>
  )
}
