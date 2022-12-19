// Components
import { Gallery, Page, Card } from '@/frontend/shared/components'
import { Items } from '@/frontend/shared/types'

// Types
import { NextPage } from 'next'

// Constants
const RESOURCES_PAGE_TITLE = `Resources 🚀`
const RESOURCES_PAGE_DESCRIPTION = `Some useful online resources.`

interface ResourcesPageProps {
  resources: Items
}

export const ResourcesPage: NextPage<ResourcesPageProps> = ({ resources }) => {
  return (
    <Page title={RESOURCES_PAGE_TITLE} description={RESOURCES_PAGE_DESCRIPTION}>
      <Gallery>
        {resources.map(({ link, cover, name, description, createdAt }) => (
          <Card
            link={link || '#'}
            target={'_blank'}
            cover={cover}
            createdAt={createdAt}
            name={name}
            description={description}
          />
        ))}
      </Gallery>
    </Page>
  )
}
