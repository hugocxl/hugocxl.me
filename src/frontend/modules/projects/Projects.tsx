// Components
import NextLink from 'next/link'
import { CardBox, Page } from '@/frontend/shared/components'
import { SimpleGrid } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Post } from '@/frontend/shared/types'

// Constants
const BASE_PROJECTS_PATH = 'projects'
const PROJECTS_PAGE_TITLE = 'Projects'
const PROJECTS_PAGE_DESCRIPTION = `Software developer and open source author, I believe in proof of work. These are some of my works.`

export interface ProjectsPageProps {
  projects: Post[]
}

export const Projects: NextPage<ProjectsPageProps> = ({ projects }) => {
  return (
    <Page title={PROJECTS_PAGE_TITLE} description={PROJECTS_PAGE_DESCRIPTION}>
      <SimpleGrid
        cols={3}
        spacing={'lg'}
        breakpoints={[
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' }
        ]}
      >
        {projects.map((project, i) => {
          const { slug, meta } = project
          const { title, description, tags, date, bannerImage } = meta

          return (
            <NextLink
              key={slug}
              href={`/${BASE_PROJECTS_PATH}/${project.slug}`}
            >
              <CardBox
                imageUrl={bannerImage}
                date={date}
                title={title}
                description={description}
                tags={tags}
              />
            </NextLink>
          )
        })}
      </SimpleGrid>
    </Page>
  )
}
