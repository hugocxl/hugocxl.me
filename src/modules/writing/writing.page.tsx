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
      <Stack gap={'lg'}>
        <Stack gap={'md'}>
          {handbooks.map(handbook => (
            <Item
              key={handbook.id}
              href={`${HANDBOOKS.href}/${handbook.slug}`}
              {...handbook}
            />
          ))}
        </Stack>
        <hr />
        <Stack gap={'md'}>
          {posts.map(post => (
            <Item key={post.id} href={`${BLOG.href}/${post.slug}`} {...post} />
          ))}
        </Stack>
      </Stack>
    </Page>
  )
}

function Item({
  name,
  href,
  updatedAt
}: {
  name: string
  href: string
  updatedAt: string
}) {
  return (
    <Link
      borderRadius={'md'}
      display={'grid'}
      gap={'md'}
      gridTemplateColumns={'auto 1fr auto'}
      alignItems={'center'}
      textDecoration={'none'}
      key={href}
      href={href}
    >
      <Typography>{name}</Typography>
      <Box borderBottom={'secondary'} width={'100%'} />
      <Typography fontWeight={'medium'} color={'text.dimmed'} fontSize={'sm'}>
        {updatedAt}
      </Typography>
    </Link>
  )
}
