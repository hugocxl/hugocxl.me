// Components
import { PagePostHead, PagePostHeader } from './components'

// Types
import { FC } from 'react'
import { ExtendedRecordMap } from 'notion-types'

// Styles
import { Container } from '@mantine/core'
import { NotionRenderer } from '@/frontend/shared/components'

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
    <Container
      sx={{
        width: '100%',
        paddingBottom: '60px'
      }}
      className={'post'}
    >
      <PagePostHead title={title} description={description} />
      <PagePostHeader title={title} description={description} cover={cover} />
      <NotionRenderer recordMap={recordMap} />
    </Container>
  )
}
