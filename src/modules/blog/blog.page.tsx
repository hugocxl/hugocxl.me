// Libs
import { notionClient } from '@/shared/lib'

// Utils
import { getPageParams } from '@/shared/utils'

// Constants
import { WRITING } from '@/shared/constants'

// Types
import { Metadata } from 'next'

// Components
import { Article } from '@/shared/components'

export const revalidate = 86400 * 3

export async function generateStaticParams() {
  const posts = await notionClient.getDatabase(process.env.NOTION_BLOG_DB_ID)
  const params = getPageParams(posts)

  return params
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const article = await notionClient.getDatabaseItem(
    process.env.NOTION_BLOG_DB_ID,
    params.slug
  )

  return {
    title: article.name,
    description: article.description
  }
}

export async function Blog({ params }) {
  const article = await notionClient.getPage(
    process.env.NOTION_BLOG_DB_ID,
    params.slug
  )

  return <Article goBackHref={WRITING.href} {...article} />
}
