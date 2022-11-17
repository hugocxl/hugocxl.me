// Types
import { Post, PageParam } from '@/frontend/shared/types'

export function getPathsFromPosts(Posts: Post[]): PageParam[] {
  try {
    const paths = Posts.map(({ slug }) => ({
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
