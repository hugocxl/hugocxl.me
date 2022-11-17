// Types
import { Post, PostTags } from '@/frontend/shared/types'

export function getTagsFromPosts(Posts: Post[]) {
  try {
    const tags: PostTags = Posts.reduce((acc, { meta }) => {
      meta.tags.forEach((tag) => {
        if (!acc.includes(tag)) acc.push(tag)
      }),
        {}
      return acc
    }, [])

    return tags
  } catch (err) {
    console.error(err)
    return []
  }
}
