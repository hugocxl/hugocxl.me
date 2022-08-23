import { PageProps } from '../Page'

export interface ArticlePageProps extends PageProps {
  bannerImage?: string
  date?: string
  tags?: string[]
  children: React.ReactNode
}
