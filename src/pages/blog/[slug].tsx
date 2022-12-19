// Utils
import { getPathsForItems } from '@/frontend/shared/utils'

// Types
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult
} from 'next'
import { BlogPostPageProps, BlogPostPage } from '@/frontend/modules/blog'
import { notionClient } from '@/frontend/shared/lib'

// Constants
const NOTION_DB_ID = '163470abeada4765b1872d1267e99d77'

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const posts = await notionClient.getPublishedEntriesInDb(NOTION_DB_ID)
    const paths = getPathsForItems(posts)

    return {
      paths,
      fallback: false
    }
  }

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<BlogPostPageProps>> => {
  const { slug } = props.params
  const posts = await notionClient.getPublishedEntriesInDb(NOTION_DB_ID)
  const post = posts.find((post) => post.slug === slug)
  const recordMap = await notionClient.getPage(post.id)

  return {
    revalidate: 86400,
    props: {
      title: post.name,
      description: post.description,
      recordMap
    }
  }
}

export { getStaticPaths, getStaticProps }
export default BlogPostPage
