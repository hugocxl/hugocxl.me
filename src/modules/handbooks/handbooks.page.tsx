// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { HANDBOOKS } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page, Box } from '@/shared/components'

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
    <Page>
      <Stack gap={'sm'}>
        {handbooks.map(({ name, slug, updatedAt }) => {
          return (
            <Link
              key={slug}
              href={`${HANDBOOKS.href}/${slug}`}
              p={'md'}
              transition={'all 0.17s ease'}
              rounded={'sm'}
              gap={'sm'}
              display={'grid'}
              gridTemplateColumns={'auto 1fr auto'}
              alignItems={'flex-end'}
              textDecoration={'none'}
              fontWeight={'normal'}
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
