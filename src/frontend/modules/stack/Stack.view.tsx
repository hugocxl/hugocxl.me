// Components
import { Card, Page } from '@/frontend/shared/components'
import { Title, Stack as MStack } from '@mantine/core'

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
          <MStack spacing={'xl'} mb={'5rem'}>
            {sortedGroup.map(({ link, cover, name, description }) => (
              <Card
                cover={cover}
                useNextImage={false}
                link={link}
                key={name}
                name={name}
                description={description}
                target={'_blank'}
              />
            ))}
          </MStack>
        </div>
      )
    }

    return render
  }

  return (
    <Page title={STACK.title} description={STACK.description}>
      {render}
    </Page>
  )
}
