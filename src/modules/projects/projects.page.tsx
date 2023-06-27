// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { PROJECTS } from '@/shared/constants'

// Components
import { Stack, Typography, Page, Box } from '@/shared/components'
import { NotionRenderer } from '@/shared/components/notion-renderer'

export const revalidate = 86400 * 7
export const metadata: Metadata = {
  title: PROJECTS.title,
  description: PROJECTS.description
}

export async function Projects() {
  const projects = await notionClient.getPages(
    process.env.NOTION_PROJECTS_DB_ID
  )

  return (
    <Page>
      <Stack>
        {projects.map(({ id, name, content, description, createdAt }) => {
          return (
            <Stack key={id} mb={100}>
              <Box
                gap={'xs'}
                transition={'all 0.2s ease'}
                rounded={'sm'}
                textDecoration={'none'}
                fontWeight={'normal'}
                display={'grid'}
                gridTemplateColumns={'auto 1fr auto'}
                alignItems={'flex-end'}
              >
                <Typography
                  lineHeight={1}
                  color={'text.primary'}
                  fontWeight={'bold'}
                >
                  {name}
                </Typography>
                <Box w={'100%'} borderBottom={'secondary'} />
                <Typography
                  color={'text.dimmed'}
                  fontSize={'sm'}
                  lineHeight={1}
                >
                  {createdAt}
                </Typography>
              </Box>
              <Typography mb={'lg'}>{description}</Typography>
              {/* <Image height={'20vh'} mb={'lg'} src={cover} alt={name} /> */}
              <NotionRenderer content={content} />
            </Stack>
          )
        })}
      </Stack>
    </Page>
  )
}
