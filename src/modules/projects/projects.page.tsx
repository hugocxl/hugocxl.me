// Lib
import { notionClient } from '@/shared/lib'
import { styled } from '@styled-system/jsx'

// Types
import { Metadata } from 'next'

// Constants
import { PROJECTS } from '@/shared/constants'

// Components
import {
  NotionRenderer,
  Stack,
  Page,
  Grid,
  Typography,
  Link
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
      <Stack
        css={{
          '& > div:not(:last-child)': {
            borderBottom: 'secondary'
          }
        }}
      >
        {projects.map(({ id, name, content, description, link }) => {
          return (
            <Grid
              py={'lg'}
              key={id}
              gridTemplateColumns={'0.25fr 1fr'}
              mdDown={{
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'auto 1fr'
              }}
            >
              <Link href={link}>{name}</Link>
              <Stack gap={'lg'}>
                <Typography color={'text.dimmed'}>{description}</Typography>
                <NotionRenderer content={content} />
              </Stack>
            </Grid>
          )
        })}
      </Stack>
    </Page>
  )
}
