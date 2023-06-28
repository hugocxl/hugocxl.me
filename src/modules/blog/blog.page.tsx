// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { BLOG } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page, Box, Grid } from '@/shared/components'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: BLOG.title,
  description: BLOG.description
}

export async function Blog() {
  const posts = await notionClient.getDatabase(process.env.NOTION_BLOG_DB_ID)

  return (
    <Page title={BLOG.title}>
      <Stack gap={'lg'}>
        {posts.map(({ name, slug, updatedAt }) => {
          return (
            <Grid
              key={slug}
              gap={'sm'}
              gridTemplateColumns={'auto 1fr auto'}
              alignItems={'flex-end'}
            >
              <Link
                lineHeight={1}
                href={`${BLOG.href}/${slug}`}
                textDecoration={'none'}
                _hover={{
                  textDecoration: 'underline'
                }}
              >
                {name}
              </Link>
              <Box w={'100%'} borderBottom={'secondary'}></Box>
              <Typography lineHeight={1} color={'text.dimmed'} fontSize={'sm'}>
                {updatedAt}
              </Typography>
            </Grid>
          )
        })}
      </Stack>
    </Page>
  )
}
