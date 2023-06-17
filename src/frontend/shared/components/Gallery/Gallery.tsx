import { SimpleGrid, SimpleGridProps } from '@mantine/core'
import { ReactNode } from 'react'

export interface GalleryProps extends SimpleGridProps {
  children: ReactNode
}

export function Gallery({ children, ...props }: GalleryProps) {
  return (
    <SimpleGrid
      cols={3}
      spacing={'xl'}
      breakpoints={[
        { maxWidth: 'sm', cols: 2, spacing: 'xl' },
        { maxWidth: 'xs', cols: 1, spacing: 'xl' }
      ]}
      {...props}
    >
      {children}
    </SimpleGrid>
  )
}
