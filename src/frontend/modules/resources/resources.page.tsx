// Components
import { Page } from '@/frontend/shared/components'
import { Anchor, Text, Group, Title, Stack, List, Divider } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'
import { Items } from '@/shared/types'

// Constants
import { RESOURCES } from '@/frontend/shared/constants'

// Utils
import { groupBy } from '@/shared/utils'

interface ResourcesProps {
  resources: Items
}

export const Resources: NextPage<ResourcesProps> = ({ resources }) => {
  const groupedResources = groupBy(resources, 'tag')
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
          <List>
            {groupedResources[tag].map(({ link, cover, name, description }) => (
              <NextLink
                href={link}
                key={name}
                className={'hoverable'}
                target={'_blank'}
              >
                <Group noWrap p={'md'}>
                  <img
                    width={36}
                    height={36}
                    src={cover}
                    alt={name}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '50%',
                      background: 'rgba(160,160,160,0.2)',
                      minWidth: 36,
                      minHeight: 36
                    }}
                  />
                  <Stack spacing={0}>
                    <Text weight={'bold'} color={'primary'}>
                      {name}
                    </Text>
                    <Text size={'sm'} color={'secondary'}>
                      {description}
                    </Text>
                  </Stack>
                </Group>
                <Divider />
              </NextLink>
            ))}
          </List>
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
