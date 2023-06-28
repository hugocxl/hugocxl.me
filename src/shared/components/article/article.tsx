// Components
import { Page } from '@/shared/components'
import { NotionRenderer } from '@/shared/components/notion-renderer'

// Types
import { ExtendedNotionItem } from '@/shared/types'

type ArticleProps = ExtendedNotionItem

export function Article({ name, content }: ArticleProps) {
  return (
    <Page title={name}>
      <NotionRenderer content={content} />
    </Page>
  )
}
