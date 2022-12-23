import { SimpleGrid, SimpleGridProps } from '@mantine/core'
import { ReactNode } from 'react'

export interface GalleryProps extends SimpleGridProps {
  children: ReactNode
}

export function Gallery({ children, ...props }: GalleryProps) {
  return (
    <SimpleGrid
      cols={3}
      spacing={'lg'}
      breakpoints={[
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' }
      ]}
      {...props}
    >
      {children}
    </SimpleGrid>
  )
}
