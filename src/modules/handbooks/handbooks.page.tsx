// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { HANDBOOKS } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page, Box, Grid } from '@/shared/components'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: HANDBOOKS.title,
  description: HANDBOOKS.description
}

export async function Handbooks() {
  const handbooks = await notionClient.getDatabase(
    process.env.NOTION_HANDBOOKS_DB_ID
  )

  return (
    <Page title={HANDBOOKS.title}>
      <Stack gap={'lg'}>
        {handbooks.map(({ name, slug, updatedAt }) => {
          return (
            <Grid
              key={slug}
              gap={'sm'}
              gridTemplateColumns={'auto 1fr auto'}
              alignItems={'flex-end'}
            >
              <Link
                lineHeight={1}
                href={`${HANDBOOKS.href}/${slug}`}
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
