// Lib
import { notionClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { STACK } from '@/shared/constants'

// Components
import { Link, Stack, Typography, Page, Grid } from '@/shared/components'

// Utils
import { groupBy, sortBy } from '@/shared/utils'
import { styled } from '@styled-system/jsx'

export const revalidate = 86400 * 7
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
        <div key={tag}>
          <styled.h2 mt={0}>{tag}</styled.h2>
          <Stack gap={'md'}>
            {sortedGroup.map(({ link, name, description }) => (
              <Grid gridTemplateColumns={'0.5fr 1fr'} key={link}>
                <Link href={link} target={'_blank'}>
                  {name}
                </Link>
                <Typography fontWeight={'medium'}>{description}</Typography>
              </Grid>
            ))}
          </Stack>
        </div>
      )
    }

    return render
  }

  return (
    <Page {...STACK}>
      <Stack gap={60}>{render}</Stack>
    </Page>
  )
}
