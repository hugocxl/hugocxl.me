import { PagePost, MarkdownRenderer } from '@/frontend/shared/components'
import { NextPage } from 'next'
import { ExtendedRecordMap } from 'notion-types'

export interface BlogPostPageProps {
  title: string
  description: string
  recordMap: ExtendedRecordMap
}

export const BlogPostPage: NextPage<BlogPostPageProps> = ({
  title,
  description,
  recordMap
}) => {
  return (
    <PagePost title={title} description={description} recordMap={recordMap} />
  )
}
