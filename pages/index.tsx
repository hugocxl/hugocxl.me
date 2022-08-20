// Dependencies
import * as React from 'react'
import { notionClient } from '../lib'

// Components
import { NotionRenderer } from 'react-notion-x'

export const getStaticProps = async () => {
  const rootRecordMap = await notionClient.getPage(process.env.ROOT_PAGE_ID)

  return {
    props: {
      recordMap: rootRecordMap
    }
  }
}

const Home = ({ recordMap }) => {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
  )
}

export default Home
