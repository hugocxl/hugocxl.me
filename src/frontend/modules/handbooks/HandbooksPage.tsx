// Components
import { Gallery, Page, Card } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { HANDBOOKS } from '@/frontend/shared/constants'

export interface HandbooksPageProps {
  handbooks: Items
}

export const HandbooksPage: NextPage<HandbooksPageProps> = ({ handbooks }) => {
  return (
    <Page title={HANDBOOKS.title} description={HANDBOOKS.description}>
      <Gallery>
        {handbooks.map(({ slug, name, description, cover }) => {
          return (
            <Card
              link={`${HANDBOOKS.href}/${slug}`}
              key={slug}
              name={name}
              description={description}
              cover={cover}
              useNextImage={true}
            />
          )
        })}
      </Gallery>
    </Page>
  )
}
