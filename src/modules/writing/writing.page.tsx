// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { BLOG, HANDBOOKS, WRITING } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page, Box, Grid } from '@/shared/components'
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
      <Stack gap={'lg'}>
        {handbooks.map(handbook => (
          <Item
            key={handbook.id}
            href={`${WRITING.href}/${HANDBOOKS.href}/${handbook.slug}`}
            {...handbook}
          />
        ))}
      </Stack>
      <styled.h2 mt={60} mb={'md'}>
        {BLOG.title}
      </styled.h2>
      <Stack gap={'lg'}>
        {posts.map(post => (
          <Item
            key={post.id}
            href={`${WRITING.href}/${BLOG.href}/${post.slug}`}
            {...post}
          />
        ))}
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
    <Grid
      gap={'md'}
      gridTemplateColumns={'auto 1fr auto'}
      alignItems={'center'}
    >
      <Link
        href={href}
        textDecoration={'none'}
        _hover={{
          textDecoration: 'underline'
        }}
      >
        {name}
      </Link>
      <Box w={'100%'} borderBottom={'secondary'}></Box>
      <Typography color={'text.dimmed'} fontSize={'sm'}>
        {updatedAt}
      </Typography>
    </Grid>
  )
}
