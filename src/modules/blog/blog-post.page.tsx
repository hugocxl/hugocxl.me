// Libs
import { notionClient } from '@/shared/lib'

// Utils
import { getPageParams } from '@/shared/utils'

// Constants
import { BLOG } from '@/shared/constants'

// Types
import { Metadata } from 'next'

// Components
import { NotionRenderer } from '@/shared/components/notion-renderer'
import { Page } from '@/shared/components/page'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: BLOG.title
}

export async function generateStaticParams() {
  const posts = await notionClient.getDatabase(
    process.env.NOTION_BLOG_DB_ID,
    null,
    true
  )
  const params = getPageParams(posts)

  return params
}

export async function BlogPost({ params }) {
  const [{ name, content }] = await notionClient.getPage(
    process.env.NOTION_BLOG_DB_ID,
    params.slug
  )

  return (
    <Page title={name}>
      <NotionRenderer content={content} />
    </Page>
  )
}
