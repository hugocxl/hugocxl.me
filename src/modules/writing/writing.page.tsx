// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { BLOG, HANDBOOKS, WRITING } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page, Flex, Grid } from '@/shared/components'

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
    <Page {...WRITING}>
      <Stack gap={'md'}>
        {handbooks.map(handbook => (
          <Item
            key={handbook.id}
            href={`${HANDBOOKS.href}/${handbook.slug}`}
            {...handbook}
          />
        ))}
        {posts.map(post => (
          <Item key={post.id} href={`${BLOG.href}/${post.slug}`} {...post} />
        ))}
      </Stack>
    </Page>
  )
}

function Item({
  name,
  href,
  description
}: {
  name: string
  description: string
  href: string
  updatedAt: string
}) {
  return (
    <Grid
      gridTemplateColumns={'0.5fr 1fr'}
      mdDown={{
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr'
      }}
    >
      <Link href={href} whiteSpace={'nowrap'}>
        {name}
      </Link>
      <Typography fontWeight={'medium'} color={'text.dimmed'}>
        {description}
      </Typography>
    </Grid>
  )
}
