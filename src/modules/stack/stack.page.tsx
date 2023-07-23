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
          <Grid gridTemplateColumns={'90px 1fr'}>
            <div
              style={{
                gridRow: `span ${sortedGroup.length}`
              }}
            >
              <Typography fontWeight={'bold'} color={'text.primary'}>
                {tag}
              </Typography>
            </div>
            {sortedGroup.map(({ link, name, description }) => (
              <Stack gap={0} key={link}>
                <Link href={link}>{name}</Link>
                <Typography fontWeight={'medium'} color={'text.dimmed'}>
                  {description}
                </Typography>
              </Stack>
            ))}
          </Grid>
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
