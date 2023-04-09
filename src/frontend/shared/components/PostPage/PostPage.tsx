// Components
import { NotionRenderer, Page } from '@/frontend/shared/components'

// Types
import { FC } from 'react'
import { ExtendedRecordMap } from 'notion-types'

export interface PagePostProps {
  title: string
  description: string
  recordMap: ExtendedRecordMap
  cover?: string
}

export const PagePost: FC<PagePostProps> = ({
  recordMap,
  title,
  description
}) => {
  return (
    <Page title={title} description={description}>
      <NotionRenderer recordMap={recordMap} />
    </Page>
  )
}
