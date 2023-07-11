// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { PROJECTS } from '@/shared/constants'

// Components
import { Stack, Typography, Page, Image } from '@/shared/components'
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
        {projects.map(({ id, name, content, description, cover }) => {
          return (
            <Stack key={id} mb={40} gap={'md'}>
              <Image
                border={'secondary'}
                height={'20vh'}
                src={cover}
                alt={name}
              />
              <Typography textAlign={'center'} color={'text.dimmed'}>
                {description}
              </Typography>
              <NotionRenderer content={content} />
            </Stack>
          )
        })}
      </Stack>
    </Page>
  )
}
