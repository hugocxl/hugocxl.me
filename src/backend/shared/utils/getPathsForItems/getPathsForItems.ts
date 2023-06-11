// Types
import { PageParam, Items } from '@/frontend/shared/types'

export function getPathsForItems(posts: Items): PageParam[] {
  try {
    const paths = posts
      .filter(item => item.slug.length)
      .map(({ slug }) => ({
        params: {
          slug
        }
      }))

    return paths
  } catch (err) {
    console.error(err)
    return []
  }
}
