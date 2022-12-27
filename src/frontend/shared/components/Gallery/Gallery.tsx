import { SimpleGrid, SimpleGridProps } from '@mantine/core'
import { ReactNode } from 'react'

export interface GalleryProps extends SimpleGridProps {
  children: ReactNode
}

export function Gallery({ children, ...props }: GalleryProps) {
  return (
    <SimpleGrid
      cols={4}
      spacing={'lg'}
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'sm' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' }
      ]}
      {...props}
    >
      {children}
    </SimpleGrid>
  )
}
