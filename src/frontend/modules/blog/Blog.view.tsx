// Components
import { List, Page } from '@/frontend/shared/components'

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
        <List
          id={tag}
          key={tag}
          page={BLOG}
          items={groupedResources[tag]}
          title={tag}
        />
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
