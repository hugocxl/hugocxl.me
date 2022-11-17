// Dependencies
import matter from 'gray-matter'
import { PostMetadata } from '@/frontend/shared/types'

export function parseMatterFromFile(file: string): {
  content: string
  meta: PostMetadata
} {
  const { data: meta, content } = matter(file)

  return {
    content,
    meta
  }
}
