import { notionAdapters } from './adapters'
import { Client } from '@notionhq/client'
import { Items } from '@/frontend/shared/types'

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'

// you can optionally pass an authToken to access private notion resources
const notionApi = new NotionAPI({
  authToken:
    '92d4dc0523a3ae2d2cb2e28a18d3818971be460eb4ecb672003c5a754fba1a1293b8e3769e0ab9d4103b4a20971e4e26ed0c7bd894fdf6d9de66f850423ac7e1608b05fe27cbae0cd00139d6cde3'
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
  getDatabase: async (
    databaseId: string,
    options: Record<any, any> = {}
  ): Promise<Items> => {
    const response = await notion.databases.query({
      database_id: databaseId,
      ...options
    })
    const results = response.results as NotionEntry[]
    const items = results.map((entry) => notionAdapters.toItem(entry))

    return items
  },
  getPage: async (pageId: string): Promise<ExtendedRecordMap> => {
    const response = await notionApi.getPage(pageId)

    return response
  },
  getPublishedEntriesInDb: async (databaseId: string): Promise<Items> => {
    const response = await notion.databases.query({
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
