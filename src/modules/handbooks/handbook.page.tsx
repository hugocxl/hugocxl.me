// Libs
import { notionClient } from '@/shared/lib'

// Utils
import { getPageParams } from '@/shared/utils'

// Constants
import { HANDBOOKS } from '@/shared/constants'

// Types
import { Metadata } from 'next'

// Components
import { Article } from '@/shared/components'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: HANDBOOKS.title
}

export async function generateStaticParams() {
  const posts = await notionClient.getDatabase(
    process.env.NOTION_HANDBOOKS_DB_ID
  )
  const params = getPageParams(posts)

  return params
}

export async function Handbook({ params }) {
  const [article] = await notionClient.getPage(
    process.env.NOTION_HANDBOOKS_DB_ID,
    params.slug
  )

  return <Article goBackHref={HANDBOOKS.href} {...article} />
}
