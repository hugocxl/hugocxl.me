export type ArticleTags = string[]

export interface ArticleMetadata {
  title?: string
  description?: string
  category?: string
  date?: string
  link?: string
  bannerImage?: string
  tags?: ArticleTags
}

export interface Article {
  slug: string
  meta: ArticleMetadata
}

export interface PageParam {
  params: {
    slug: string
  }
}
