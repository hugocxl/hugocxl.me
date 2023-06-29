// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { BLOG, HANDBOOKS, WRITING } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page } from '@/shared/components'
import { styled } from '@/shared/styles'

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
      <styled.h2 mt={0} mb={'md'}>
        {HANDBOOKS.title}
      </styled.h2>
      <Stack gap={'md'}>
        {handbooks.map(handbook => (
          <Item
            key={handbook.id}
            href={`${HANDBOOKS.href}/${handbook.slug}`}
            {...handbook}
          />
        ))}
      </Stack>
      <styled.h2 mt={60} mb={'md'}>
        {BLOG.title}
      </styled.h2>
      <Stack gap={'md'}>
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
  href: string
  description: string
}) {
  return (
    <Link
      borderRadius={'md'}
      display={'grid'}
      gap={'md'}
      gridTemplateColumns={'1fr 1fr'}
      alignItems={'flex-start'}
      textDecoration={'none'}
      key={href}
      href={href}
      _hover={{
        opacity: 0.7
      }}
    >
      <Typography>{name}</Typography>
      <Typography fontWeight={'medium'} color={'text.dimmed'} fontSize={'sm'}>
        {description}
      </Typography>
    </Link>
  )
}
