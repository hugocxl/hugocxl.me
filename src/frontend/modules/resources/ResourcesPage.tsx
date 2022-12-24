// Components
import { Gallery, Page, Card } from '@/frontend/shared/components'
import { Anchor, Text, Group, Title } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { RESOURCES } from '@/frontend/shared/constants'

// Utils
import { groupBy } from '@/frontend/shared/utils'
interface ResourcesPageProps {
  resources: Items
}

export const ResourcesPage: NextPage<ResourcesPageProps> = ({ resources }) => {
  const groupedResources = groupBy(resources, 'tags')
  const [render, tags] = getRender()

  function getRender() {
    const render = []
    const tags = []
    for (const tag in groupedResources) {
      tags.push(
        <Anchor key={tag} href={'#' + tag} className={'hoverable'}>
          <Text color={'dimmed'} size='sm'>
            {tag}
          </Text>
        </Anchor>
      )
      render.push(
        <div id={tag} key={tag}>
          <Title order={2}>{tag}</Title>
          <Gallery>
            {groupedResources[tag].map(({ link, cover, name, description }) => (
              <Card
                link={link || '#'}
                target={'_blank'}
                cover={cover}
                name={name}
                key={name}
                description={description}
              />
            ))}
          </Gallery>
        </div>
      )
    }
    return [render, tags]
  }

  return (
    <Page title={RESOURCES.title} description={RESOURCES.description}>
      <Group spacing={'xs'}>{tags}</Group>
      {render}
    </Page>
  )
}
