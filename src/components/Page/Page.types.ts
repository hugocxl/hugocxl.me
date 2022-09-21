// Types
import { BoxProps } from '@mui/material'

export interface PageProps extends BoxProps {
  title?: string
  description?: string
  date?: string
  sidebar?: React.ReactNode
  header?: React.ReactNode
  children: React.ReactNode
  tags?: string[]
  showHeader?: boolean
  bannerImage?: string
}
