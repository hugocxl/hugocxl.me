// Components
import { Page, Gallery, ProjectCard } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { Repository } from '@/shared/types'

// Constants
import { PROJECTS } from '@/frontend/shared/constants'

export interface ProjectsProps {
  repos: Repository[]
}

export const Projects: NextPage<ProjectsProps> = ({ repos }) => {
  return (
    <Page title={PROJECTS.title} description={PROJECTS.description}>
      <Gallery>
        {repos.map(repo => (
          <ProjectCard target={'_blank'} key={repo.id} {...repo} />
        ))}
      </Gallery>
    </Page>
  )
}
