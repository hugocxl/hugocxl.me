// Adapaters
import { notionAdapters } from './adapters'

// Dependencies
import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

// Types
import { ExtendedRecordMap } from 'notion-types'
import { Items } from '@/frontend/shared/types'

const notionOfficialClient = new Client({
  auth: process.env.NOTION_EXTENSION_TOKEN
})

const notionUnofficialClient = new NotionAPI({
  authToken: process.env.NOTION_BROWSER_TOKEN
})

interface NotionEntry {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: { object: string; id: string }
  last_edited_by: { object: string; id: string }
  cover: null
  icon: null
  parent: {
    type: string
    database_id: string
  }
  archived: false
  properties: Record<any, any>
  url: string
}

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
      const items = results.map((entry) => notionAdapters.toItem(entry))

      output = [...output, ...items]

      if (response.has_more) {
        await getEntries(response.next_cursor)
      }
    }

    return output
  },
  getPublishedEntriesInDb: async (databaseId: string): Promise<Items> => {
    const response = await notionOfficialClient.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true
        }
      }
    })
    const results = response.results as NotionEntry[]
    const items = results.map((entry) => notionAdapters.toItem(entry))

    return items
  }
}
