// Dependencies
import { notionClient } from '@/frontend/shared/lib'

// Utils
import { getPathsForItems } from '@/frontend/shared/utils'

// Types
import { HandbookPageProps, HandbookPage } from '@/frontend/modules/handbooks'
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult
} from 'next'

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const posts = await notionClient.getPublishedEntriesInDb(
      process.env.NOTION_HANDBOOKS_DB_ID
    )
    const paths = getPathsForItems(posts)

    return {
      paths,
      fallback: false
    }
  }

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<HandbookPageProps>> => {
  const { slug } = props.params
  const posts = await notionClient.getPublishedEntriesInDb(
    process.env.NOTION_HANDBOOKS_DB_ID
  )
  const { name, description, cover, id } = posts.find(
    post => post.slug === slug
  )
  const recordMap = await notionClient.getPage(id)

  return {
    revalidate: 86400,
    props: {
      title: name,
      cover,
      description,
      recordMap
    }
  }
}

export { getStaticPaths, getStaticProps }
export default HandbookPage
