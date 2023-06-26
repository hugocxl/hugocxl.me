// Utils
import { convertToSlug, formatTimestamp } from '@/shared/utils'

// Types
import { NotionItem } from '@/shared/types'

export const notionAdapters = {
  toNotionItem(entry): NotionItem {
    return {
      id: entry.id,
      slug: convertToSlug(entry.properties.Name?.title[0]?.plain_text) || '',
      cover: entry.cover?.external?.url || entry.cover?.file?.url || '',
      description: entry.properties.Description?.rich_text[0]?.plain_text || '',
      link: entry.properties.Link?.url || '',
      name: entry.properties.Name?.title[0]?.plain_text || '',
      tag: entry.properties.Tag?.select?.name || '',
      properties: entry.properties,
      createdAt:
        (entry.created_time && formatTimestamp(entry.created_time)) || '',
      updatedAt:
        (entry.last_edited_time && formatTimestamp(entry.last_edited_time)) ||
        ''
    }
  }
}
