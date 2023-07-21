// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { BLOG, HANDBOOKS, WRITING } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page, Box } from '@/shared/components'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: WRITING.title,
  description: WRITING.description
}

export async function Writing() {
  const posts = await notionClient.getDatabase(process.env.NOTION_BLOG_DB_ID)
  const handbooks = await notionClient.getDatabase(
    process.env.NOTION_HANDBOOKS_DB_ID
  )

  return (
    <Page title={WRITING.title}>
      <h2>{HANDBOOKS.title}</h2>
      <ul>
        {handbooks.map(handbook => (
          <li key={handbook.id}>
            <Item href={`${HANDBOOKS.href}/${handbook.slug}`} {...handbook} />
          </li>
        ))}
      </ul>
      <h2>{BLOG.title}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Item href={`${BLOG.href}/${post.slug}`} {...post} />
          </li>
        ))}
      </ul>
    </Page>
  )
}

function Item({
  name,
  href,
  updatedAt,
  description
}: {
  name: string
  href: string
  description: string
  updatedAt: string
}) {
  return (
    <Link
      display={'flex'}
      flexDirection={'column'}
      textDecoration={'none'}
      key={href}
      href={href}
    >
      <Typography fontWeight={'bold'} color={'text.primary'}>
        {name}
      </Typography>
      <Typography fontWeight={'medium'} color={'text.dimmed'}>
        {description}
      </Typography>
    </Link>
  )
}
