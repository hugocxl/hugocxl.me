// Adapaters
import { notionAdapters } from './notion-client.adapters'

// Dependencies
import { Client } from '@notionhq/client'
import { NotionCompatAPI } from 'notion-compat'

// Types
import { NotionEntry } from './notion-client.types'
import { ExtendedNotionItem, NotionItem } from '@/shared/types'

const notionOfficialClient = new Client({
  auth: process.env.NOTION_EXTENSION_TOKEN,
  fetch
})

const notionUnofficialClient = new NotionCompatAPI(
  new Client({ auth: process.env.NOTION_EXTENSION_TOKEN, fetch })
)

export const notionClient = {
  getDatabase: async (databaseId: string): Promise<NotionItem[]> => {
    let output = []
    await getEntries()
    async function getEntries(cursor = undefined): Promise<void> {
      const response = await notionOfficialClient.databases.query({
        database_id: databaseId,
        start_cursor: cursor,
        filter: { property: 'Published', checkbox: { equals: true } },
        sorts: [
          {
            timestamp: 'last_edited_time',
            direction: 'descending'
          }
        ]
      })
      const results = response.results as NotionEntry[]
      const items = results.map(entry => notionAdapters.toNotionItem(entry))

      output = [...output, ...items]

      if (response.has_more) {
        await getEntries(response.next_cursor)
      }
    }

    return output
  },
  getDatabaseItem: async (
    databaseId: string,
    slug: string
  ): Promise<NotionItem> => {
    const collection = await notionClient.getDatabase(databaseId)
    return collection.find(entry => entry.slug === slug)
  },
  getPage: async (
    databaseId: string,
    slug: string
  ): Promise<ExtendedNotionItem> => {
    const item = await notionClient.getDatabaseItem(databaseId, slug)
    const content = await notionUnofficialClient.getPage(item.id)
    const page = {
      ...item,
      content
    }

    return page
  },
  getPages: async (databaseId: string): Promise<ExtendedNotionItem[]> => {
    const collection = await notionClient.getDatabase(databaseId)
    const pages = await Promise.all(
      collection.map(async page => {
        const content = await notionUnofficialClient.getPage(page.id)
        return {
          ...page,
          content
        }
      })
    )

    return pages
  }
}
