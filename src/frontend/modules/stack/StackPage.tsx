// Components
import { Page } from '@/frontend/shared/components'
import { Title, Text, Anchor, Stack, Group, Image } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Utils
import { groupBy, sortBy } from '@/frontend/shared/utils'

// Constants
import { STACK } from '@/frontend/shared/constants'

interface StackPageProps {
  stack: Items
}

export const StackPage: NextPage<StackPageProps> = ({ stack }) => {
  const sortedStack = sortBy(stack, 'tags')
  const groupedStack = groupBy(sortedStack, 'tags')
  const render = getRender()

  function getRender() {
    const render = []
    for (let tag in groupedStack) {
      const sortedGroup = sortBy(groupedStack[tag], 'name')
      render.push(
        <div id={tag} key={tag}>
          <Title order={2}>{tag}</Title>
          <Stack>
            {sortedGroup.map(({ link, cover, name, description }) => (
              <Anchor
                key={name}
                href={link}
                target={'_blank'}
                className={'hoverable'}
              >
                <Group noWrap align={'center'}>
                  <Image
                    height={72}
                    width={72}
                    style={{ minWidth: 72 }}
                    fit={'cover'}
                    withPlaceholder={true}
                    radius='md'
                    src={cover}
                    alt={name}
                  />
                  <Stack spacing={0} mb={10}>
                    <Title span order={4} m={'0 !important'}>
                      {name}
                    </Title>
                    <Text color={'dimmed'}>{description}</Text>
                  </Stack>
                </Group>
              </Anchor>
            ))}
          </Stack>
        </div>
      )
    }

    return render
  }

  return (
    <Page title={STACK.title} description={STACK.description}>
      <div className={'stack-list'}>
        {render}
        </div>
    </Page>
  )
}
