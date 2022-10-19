import { Article, ArticleTags } from '@/frontend/shared/types'

export interface BlogPageProps {
  posts: Article[]
  tags: ArticleTags
}
