// Components
import { Gallery, Page, Card } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { RESOURCES } from '@/frontend/shared/constants'
interface ResourcesPageProps {
  resources: Items
}

export const ResourcesPage: NextPage<ResourcesPageProps> = ({ resources }) => {
  return (
    <Page title={RESOURCES.title} description={RESOURCES.description}>
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
