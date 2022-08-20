import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'
import { notionApi } from '../lib'

export const getStaticProps = async () => {
  const recordMap = await notionApi.getPage(process.env.ROOT_PAGE_ID)
  const notion = new Client({
    auth: process.env.NOTION_INTEGRATION_TOKEN
  })

  return {
    props: {
      recordMap
    }
  }
}

const Home = ({ recordMap }) => {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )
}

export default Home
