// Dependencies
import { NotionRenderer } from 'react-notion-x'
import { getAllPagesInSpace } from 'notion-utils'

// Lib
import { notionClient } from '../lib'

export const getStaticPaths = async () => {
  const pagesTree = await getAllPagesInSpace(
    process.env.ROOT_PAGE_ID,
    null,
    notionClient.getPage.bind(notionClient)
  )

  const paths = Object.keys(pagesTree).map((slug) => ({
    // params: { slug: slugify(slug) }
    params: { slug }
  }))

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params: { slug } }) => {
  const recordMap = await notionClient.getPage(slug)

  return {
    props: {
      recordMap
    },
    revalidate: 60
  }
}

const DynamicPage = ({ recordMap }) => {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
  )
}

export default DynamicPage
