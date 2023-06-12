// Components
import { NotionRenderer, Page } from '@/frontend/shared/components'
import { PagePostHeader } from './components'

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
  description,
  cover
}) => {
  return (
    <Page title={title} description={description} showHeader={false}>
      <PagePostHeader title={title} description={description} cover={cover} />
      <NotionRenderer recordMap={recordMap} />
    </Page>
  )
}
