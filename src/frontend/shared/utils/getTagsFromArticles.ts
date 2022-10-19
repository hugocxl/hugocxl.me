// Types
import { Article, ArticleTags } from '@/frontend/shared/types'

export function getTagsFromArticles(articles: Article[]) {
  try {
    const tags: ArticleTags = articles.reduce((acc, { meta }) => {
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
