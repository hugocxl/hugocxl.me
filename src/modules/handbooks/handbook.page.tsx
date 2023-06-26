// Libs
import { notionClient } from '@/shared/lib'

// Utils
import { getPageParams } from '@/shared/utils'

// Constants
import { HANDBOOKS } from '@/shared/constants'

// Types
import { Metadata } from 'next'

// Components
import { NotionRenderer } from '@/shared/components/notion-renderer'
import { Page } from '@/shared/components/page'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: HANDBOOKS.title
}

export async function generateStaticParams() {
  const posts = await notionClient.getDatabase(
    process.env.NOTION_HANDBOOKS_DB_ID,
    null,
    true
  )
  const params = getPageParams(posts)

  return params
}

export async function Handbook({ params }) {
  const [{ name, description, content }] = await notionClient.getPage(
    process.env.NOTION_HANDBOOKS_DB_ID,
    params.slug
  )

  return (
    <Page title={name} description={description}>
      <NotionRenderer content={content} />
    </Page>
  )
}
