import { notionClient } from '@/backend/shared/lib'
import { getPathsForItems } from '@/backend/shared/utils'
import { BlogPostProps } from '@/frontend/modules/blog'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'

export const blogPostServer = {
  async getStaticPaths(): Promise<GetStaticPathsResult> {
    const posts = await notionClient.getDatabase(process.env.NOTION_BLOG_DB_ID)
    const paths = getPathsForItems(posts)

    return {
      paths,
      fallback: false
    }
  },

  async getStaticProps(props): Promise<GetStaticPropsResult<BlogPostProps>> {
    const { slug } = props.params
    const posts = await notionClient.getDatabase(process.env.NOTION_BLOG_DB_ID)
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
