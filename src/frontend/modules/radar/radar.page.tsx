// Components
import { Gallery, Page, ProjectCard } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { Repository } from '@/shared/types'

// Constants
import { RADAR } from '@/frontend/shared/constants'

interface RadarProps {
  repos: Repository[]
}

export const Radar: NextPage<RadarProps> = ({ repos }) => {
  return (
    <Page title={RADAR.title} description={RADAR.description}>
      <Gallery>
        {repos.map(repo => (
          <ProjectCard target={'_blank'} key={repo.id} {...repo} />
        ))}
      </Gallery>
    </Page>
  )
}
