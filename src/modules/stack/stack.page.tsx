// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { STACK } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page } from '@/shared/components'

// Utils
import { groupBy, sortBy } from '@/shared/utils'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: STACK.title,
  description: STACK.description
}

export async function StackPage() {
  const stack = await notionClient.getDatabase(process.env.NOTION_STACK_DB_ID)
  const sortedStack = sortBy(stack, 'tag')
  const groupedStack = groupBy(sortedStack, 'tag')
  const render = getRender()

  function getRender() {
    const render = []
    for (const tag in groupedStack) {
      const sortedGroup = sortBy(groupedStack[tag], 'name')
      render.push(
        <Stack gap={0} key={tag}>
          {sortedGroup.map(({ link, name, description }) => (
            <Link
              key={name}
              href={link}
              p={'md'}
              transition={'all 0.17s ease'}
              rounded={'sm'}
              gap={'sm'}
              display={'grid'}
              gridTemplateColumns={'1fr 1fr'}
              alignItems={'flex-start'}
              textDecoration={'none'}
              fontWeight={'normal'}
              _hover={{
                bg: 'bg.secondary'
              }}
            >
              <Typography color={'text.secondary'} fontWeight={'bold'}>
                {name}
              </Typography>
              <Typography color={'text.dimmed'} fontSize={'sm'}>
                {description}
              </Typography>
            </Link>
          ))}
        </Stack>
      )
    }

    return render
  }

  return (
    <Page>
      <Stack gap={0}>{render}</Stack>
    </Page>
  )
}
