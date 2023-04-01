import { notionClient } from '@/backend/shared/lib'
import { getPathsForItems } from '@/backend/shared/utils'
import { HandbookProps } from '@/frontend/modules/handbooks'
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult
} from 'next'

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const posts = await notionClient.getDatabase(
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
): Promise<GetStaticPropsResult<HandbookProps>> => {
  const { slug } = props.params
  const posts = await notionClient.getDatabase(
    process.env.NOTION_HANDBOOKS_DB_ID
  )
  const { name, description, cover, id } = posts.find(
    post => post.slug === slug
  )
  const recordMap = await notionClient.getPage(id)

  return {
    revalidate: 86400 * 3,
    props: {
      title: name,
      cover,
      description,
      recordMap
    }
  }
}

export const HandbookServer = { getStaticPaths, getStaticProps }
