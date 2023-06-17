import { Item } from '@/shared/types'
import { toSlug } from '@/shared/utils'

export const notionAdapters = {
  toItem(entry): Item {
    return {
      cover: entry.cover?.external?.url || entry.cover?.file?.url || null,
      createdAt: entry.created_time || '',
      description:
        entry.properties.Description?.rich_text[0]?.plain_text || null,
      id: entry.id,
      link: entry.properties.Link?.url || null,
      name: entry.properties.Name?.title[0]?.plain_text || null,
      tag: entry.properties.Tag?.select?.name || null,
      properties: entry.properties,
      slug: toSlug(entry.properties.Name?.title[0]?.plain_text) || '',
      updatedAt: entry.last_edited_time || ''
    }
  }
}
