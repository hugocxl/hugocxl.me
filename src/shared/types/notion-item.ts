import { ExtendedRecordMap } from 'notion-types'
import { TableOfContentsEntry } from 'notion-utils'

export interface NotionItem {
  id: string
  slug: string
  cover: string
  createdAt: string
  description: string
  link: string
  name: string
  properties: Record<string, any>
  tag: string
  updatedAt: string
}

export interface ExtendedNotionItem extends NotionItem {
  content: ExtendedRecordMap
  tableOfContents: TableOfContentsEntry[]
}
