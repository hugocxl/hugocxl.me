// Types
import { HandbookProps } from '@/frontend/modules/handbooks'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'

// Utils
import { getPathsForItems } from '@/backend/shared/utils'

// Libs
import { notionClient } from '@/backend/shared/lib'

export const handbookServer = {
  async getStaticPaths(): Promise<GetStaticPathsResult> {
    const posts = await notionClient.getDatabase(
      process.env.NOTION_HANDBOOKS_DB_ID
    )

    const paths = getPathsForItems(posts)

    return {
      paths,
      fallback: false
    }
  },

  async getStaticProps(props): Promise<GetStaticPropsResult<HandbookProps>> {
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
}
