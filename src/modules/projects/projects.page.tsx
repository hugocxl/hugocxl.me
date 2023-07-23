// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { PROJECTS } from '@/shared/constants'

// Components
import {
  NotionRenderer,
  Stack,
  Typography,
  Page,
  Title
} from '@/shared/components'

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
    <Page {...PROJECTS}>
      <Stack gap={'lg'}>
        {projects.map(({ id, name, content, description }) => {
          return (
            <Stack key={id}>
              <Title mb={0} variant={'h2'}>
                {name}
              </Title>
              <Typography color={'text.dimmed'} mb={'lg'}>
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
