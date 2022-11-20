export type PostTags = string[]

export interface PostMetadata {
  title?: string
  description?: string
  category?: string
  date?: string
  link?: string
  bannerImage?: string
  tags?: PostTags
}

export interface Post {
  slug: string
  meta: PostMetadata
}

export interface PageParam {
  params: {
    slug: string
  }
}

export type PostTableOfContents = {
  label: string
  link: string
  order: number
}[]

export interface RepoItem {
  name: string
  path: string
  children?: RepoItem[]
}

export type RepoTree = RepoItem[]
