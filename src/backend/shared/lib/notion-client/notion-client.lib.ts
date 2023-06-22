// Adapaters
import { notionAdapters } from './notion-client.adapters'

// Dependencies
import { Client } from '@notionhq/client'
import { NotionCompatAPI } from 'notion-compat'

// Types
import { ExtendedRecordMap } from 'notion-types'
import { Items } from '@/shared/types'
import { NotionEntry } from './notion-client.types'

const notionOfficialClient = new Client({
  auth: process.env.NOTION_EXTENSION_TOKEN
})

const notionUnofficialClient = new NotionCompatAPI(
  new Client({ auth: process.env.NOTION_EXTENSION_TOKEN })
)

export const notionClient = {
  getPage: async (pageId: string): Promise<ExtendedRecordMap> => {
    const response = await notionUnofficialClient.getPage(pageId)

    return response
  },
  getDatabase: async (
    databaseId: string,
    options: Record<any, any> = {}
  ): Promise<Items> => {
    let output = []
    await getEntries()
    async function getEntries(cursor = undefined): Promise<void> {
      const response = await notionOfficialClient.databases.query({
        database_id: databaseId,
        start_cursor: cursor,
        ...options
      })
      const results = response.results as NotionEntry[]
      const items = results.map(entry => notionAdapters.toItem(entry))

      output = [...output, ...items]

      if (response.has_more) {
        if (!options.page_size || output.length < options.page_size) {
          await getEntries(response.next_cursor)
        }
      }
    }

    return output
  },
  getPublishedEntriesInDb: async (
    databaseId: string,
    options: Record<any, any> = {}
  ): Promise<Items> => {
    return await notionClient.getDatabase(databaseId, {
      ...options,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true
        }
      }
    })
  }
}
