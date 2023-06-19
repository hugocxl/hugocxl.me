// Components
import { Gallery, Card, Page } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { Items } from '@/shared/types'

// Constants
import { BLOG } from '@/frontend/shared/constants'
import { formatTimestamp } from '@/shared/utils'

export interface BlogProps {
  posts: Items
}

export const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Page title={BLOG.title} description={BLOG.description}>
      <Gallery>
        {posts.map(({ slug, name, description, updatedAt, tag, cover }) => {
          const updatedAtLabel = formatTimestamp(updatedAt)

          return (
            <Card
              useNextImage
              tag={tag}
              updatedAt={updatedAtLabel}
              href={`${BLOG.href}/${slug}`}
              key={slug}
              cover={cover}
              name={name}
              description={description}
            />
          )
        })}
      </Gallery>
    </Page>
  )
}
