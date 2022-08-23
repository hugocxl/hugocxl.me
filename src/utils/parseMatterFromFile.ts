// Dependencies
import matter from 'gray-matter'
import { ArticleMetadata } from 'src/types'

export function parseMatterFromFile(file: string): {
  content: string
  meta: ArticleMetadata
} {
  const { data: meta, content } = matter(file)

  return {
    content,
    meta
  }
}
