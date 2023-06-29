// Components
import { Page } from '@/shared/components'
import { NotionRenderer } from '@/shared/components/notion-renderer'

// Types
import { ExtendedNotionItem } from '@/shared/types'

interface ArticleProps extends ExtendedNotionItem {
  goBackHref?: string
}

export function Article({ name, content, goBackHref }: ArticleProps) {
  return (
    <Page title={name} goBackHref={goBackHref}>
      <NotionRenderer content={content} />
    </Page>
  )
}
