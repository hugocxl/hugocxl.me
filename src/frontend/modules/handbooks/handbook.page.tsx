// Components
import { PagePost } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { ExtendedRecordMap } from 'notion-types'

export interface HandbookProps {
  title: string
  description: string
  cover: string
  recordMap: ExtendedRecordMap
}

export const Handbook: NextPage<HandbookProps> = ({
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
