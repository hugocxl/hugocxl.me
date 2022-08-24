import { PaperProps } from '@mui/material'

export interface CardProps extends PaperProps {
  date?: string
  description?: string
  tags?: string[]
  title?: string
  bannerImage?: string
}
