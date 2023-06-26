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
  _cache: {
    databases: {},
    pages: {}
  },
  getDatabase: async (
    databaseId: string,
    options: Record<any, any> = {},
    onlyPublished: boolean = false
  ): Promise<NotionItem[]> => {
    if (
      process.env.NODE_ENV === 'development' &&
      notionClient._cache.databases[databaseId]
    ) {
      return notionClient._cache.databases[databaseId]
    }

    let output = []
    await getEntries()
    async function getEntries(cursor = undefined): Promise<void> {
      const response = await notionOfficialClient.databases.query({
        database_id: databaseId,
        start_cursor: cursor,
        ...(onlyPublished && {
          filter: { property: 'Published', checkbox: { equals: true } }
        }),
        sorts: [
          {
            timestamp: 'last_edited_time',
            direction: 'descending'
          }
        ],
        ...options
      })
      const results = response.results as NotionEntry[]
      const items = results.map(entry => notionAdapters.toNotionItem(entry))

      output = [...output, ...items]

      if (response.has_more) {
        if (!options.page_size || output.length < options.page_size) {
          await getEntries(response.next_cursor)
        }
      }
    }

    notionClient._cache.databases[databaseId] = output
    return output
  },
  getPage: async (
    databaseId: string,
    slug: string
  ): Promise<[ExtendedNotionItem, NotionItem[]]> => {
    if (
      process.env.NODE_ENV === 'development' &&
      notionClient._cache.pages[slug]
    ) {
      return [notionClient._cache.pages[slug], []]
    }

    const collection = await notionClient.getDatabase(databaseId, null, true)
    const item = collection.find(entry => entry.slug === slug)
    const content = await notionUnofficialClient.getPage(item.id)
    const page = {
      ...item,
      content
    }

    notionClient._cache.pages[slug] = page
    return [page, collection]
  }
}
