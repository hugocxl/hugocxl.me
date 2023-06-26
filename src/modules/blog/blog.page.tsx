// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { BLOG } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page, Box } from '@/shared/components'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: BLOG.title,
  description: BLOG.description
}

export async function Blog() {
  const posts = await notionClient.getDatabase(
    process.env.NOTION_BLOG_DB_ID,
    null,
    true
  )

  return (
    <Page>
      <Stack gap={'sm'}>
        {posts.map(({ name, slug, updatedAt }) => {
          return (
            <Link
              key={slug}
              href={`${BLOG.href}/${slug}`}
              p={'md'}
              gap={'xs'}
              transition={'all 0.2s ease'}
              rounded={'sm'}
              textDecoration={'none'}
              fontWeight={'normal'}
              display={'grid'}
              gridTemplateColumns={'auto 1fr auto'}
              alignItems={'flex-end'}
              _hover={{
                bg: 'bg.secondary'
              }}
            >
              <Typography
                lineHeight={1}
                color={'text.secondary'}
                fontWeight={'bold'}
              >
                {name}
              </Typography>
              <Box w={'100%'} borderBottom={'secondary'}></Box>
              <Typography color={'text.dimmed'} fontSize={'sm'} lineHeight={1}>
                {updatedAt}
              </Typography>
            </Link>
          )
        })}
      </Stack>
    </Page>
  )
}
