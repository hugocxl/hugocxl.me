import { NotionAPI } from 'notion-client'

export const notionClient = new NotionAPI({
  authToken: process.env.NOTION_TOKEN,
  activeUser: process.env.NOTION_USER
})
