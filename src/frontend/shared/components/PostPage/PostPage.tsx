// Components
import { PagePostHead, PagePostHeader } from './components'

// Types
import { FC } from 'react'

// Styles
import { Container } from '@mantine/core'
import { PostTableOfContents } from '@/frontend/shared/types'
import { TableOfContents } from '@/frontend/shared/components/TableOfContents'

export interface PagePostProps {
  title: string
  description: string
  children: React.ReactNode
  tableOfContents?: PostTableOfContents
}

export const PagePost: FC<PagePostProps> = ({
  children,
  title,
  description,
  tableOfContents
}) => {
  return (
    <Container sx={{ paddingTop: '24px', position: 'relative' }}>
      <PagePostHead title={title} description={description} />
      <PagePostHeader title={title} description={description} />
      <TableOfContents links={tableOfContents} />
      {children}
    </Container>
  )
}
