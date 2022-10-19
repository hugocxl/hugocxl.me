// Types
import { Article, PageParam } from '@/frontend/shared/types'

export function getPathsFromArticles(articles: Article[]): PageParam[] {
  try {
    const paths = articles.map(({ slug }) => ({
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
