// Components
import { NotionRenderer, Page } from '@/frontend/shared/components'
import { Stack, Text } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Item } from '@/frontend/shared/types'
import { ExtendedRecordMap } from 'notion-types'

// Constants
import { NOW } from '@/frontend/shared/constants'

// Utils
import { formatTimestamp } from '@/shared/utils'

interface ItemWithRecord extends Item {
  recordMap: ExtendedRecordMap
}

interface NowProps {
  nows: ItemWithRecord[]
}

export const Now: NextPage<NowProps> = ({ nows }) => {
  return (
    <Page title={NOW.title} description={NOW.description}>
      {nows.map(now => (
        <Stack key={now.id} mb={'xl'} spacing={0}>
          <Text fw={'bold'} color={'primary'}>
            {formatTimestamp(now.createdAt)}
          </Text>
          <NotionRenderer recordMap={now.recordMap} />
        </Stack>
      ))}
    </Page>
  )
}
