// Components
import { PagePostHead, PagePostHeader } from './components'
import { Box } from '@mantine/core'
import { NotionRenderer } from '@/frontend/shared/components'

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
    <Box
      className={'post'}
      component={'main'}
      w={'100%'}
      sx={theme => ({
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl * 4
      })}
    >
      <PagePostHead title={title} description={description} />
      <PagePostHeader title={title} description={description} cover={cover} />
      <NotionRenderer recordMap={recordMap} />
    </Box>
  )
}
