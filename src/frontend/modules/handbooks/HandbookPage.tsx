// Components
import { PagePost } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { ExtendedRecordMap } from 'notion-types'

export interface HandbookPageProps {
  title: string
  description: string
  cover: string
  recordMap: ExtendedRecordMap
}

export const HandbookPage: NextPage<HandbookPageProps> = ({
  title,
  description,
  cover,
  recordMap
}) => {
  return (
    <PagePost
      title={title}
      description={description}
      recordMap={recordMap}
      cover={cover}
    />
  )
}
