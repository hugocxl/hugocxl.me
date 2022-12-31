// Components
import { Page } from '@/frontend/shared/components'
import {
  Title,
  Text,
  Anchor,
  Stack as MnStack,
  Group,
  Image
} from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Utils
import { groupBy, sortBy } from '@/shared/utils'

// Constants
import { STACK } from '@/frontend/shared/constants'

interface StackProps {
  stack: Items
}

export const Stack: NextPage<StackProps> = ({ stack }) => {
  const sortedStack = sortBy(stack, 'tag')
  const groupedStack = groupBy(sortedStack, 'tag')
  const render = getRender()

  function getRender() {
    const render = []
    for (const tag in groupedStack) {
      const sortedGroup = sortBy(groupedStack[tag], 'name')
      render.push(
        <div id={tag} key={tag}>
          <Title order={2}>{tag}</Title>
          <MnStack>
            {sortedGroup.map(({ link, cover, name, description }) => (
              <Anchor
                key={name}
                href={link}
                target={'_blank'}
                className={'hoverable'}
              >
                <Group noWrap align={'center'}>
                  <Image
                    height={60}
                    width={60}
                    style={{ minWidth: 60 }}
                    fit={'cover'}
                    withPlaceholder={true}
                    radius='md'
                    src={cover}
                    alt={name}
                  />
                  <MnStack spacing={0} mb={10}>
                    <Text color={'primary'} weight={'bold'}>
                      {name}
                    </Text>
                    <Text color={'dimmed'}>{description}</Text>
                  </MnStack>
                </Group>
              </Anchor>
            ))}
          </MnStack>
        </div>
      )
    }

    return render
  }

  return (
    <Page title={STACK.title} description={STACK.description}>
      <div className={'stack-list'}>{render}</div>
    </Page>
  )
}
