// Components
import { Card, Page } from '@/frontend/shared/components'
import { Title, Stack } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { BLOG } from '@/frontend/shared/constants'

// Utils
import { groupBy } from '@/shared/utils'

export interface BlogProps {
  posts: Items
}

export const Blog: NextPage<BlogProps> = ({ posts }) => {
  const groupedResources = groupBy(posts, 'tag')
  const render = getRender()

  function getRender() {
    const render = []
    for (const tag in groupedResources) {
      render.push(
        <div id={tag} key={tag}>
          <Title order={2}>{tag}</Title>
          <Stack>
            {groupedResources[tag].map(
              ({ slug, updatedAt, name, description }) => (
                <Card
                  link={`${BLOG.href}/${slug}`}
                  key={slug}
                  name={name}
                  description={description}
                  updatedAt={updatedAt}
                />
              )
            )}
          </Stack>
        </div>
      )
    }
    return render
  }

  return (
    <Page title={BLOG.title} description={BLOG.description}>
      {render}
    </Page>
  )
}
