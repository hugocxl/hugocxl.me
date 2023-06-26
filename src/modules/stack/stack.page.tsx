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
import { styled } from '@/shared/styles'

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
          {sortedGroup.map(({ link, cover, name, description }) => (
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
              <Stack direction='row' align={'center'}>
                <styled.img
                  transition={'all 0.17s ease'}
                  objectFit={'cover'}
                  src={cover}
                  minHeight={24}
                  height={24}
                  width={24}
                  minWidth={24}
                  borderRadius={'50%'}
                />
                <Typography color={'text.secondary'} fontWeight={'bold'}>
                  {name}
                </Typography>
              </Stack>
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
