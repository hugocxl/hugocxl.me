export type PostTableOfContents = {
  label: string
  link: string
  order: number
}[]

export interface PageParam {
  params: {
    slug: string
  }
}

export * from './Item'
export * from './Items'
