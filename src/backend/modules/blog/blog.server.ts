import { notionClient } from '@/backend/shared/lib'
import { BlogProps } from '@/frontend/modules/blog'
import { GetStaticPropsResult } from 'next'

export const blogServer = {
  async getStaticProps(): Promise<GetStaticPropsResult<BlogProps>> {
    const posts = await notionClient.getPublishedEntriesInDb(
      process.env.NOTION_BLOG_DB_ID,
      {
        sorts: [
          {
            timestamp: 'last_edited_time',
            direction: 'descending'
          }
        ]
      }
    )

    return {
      revalidate: 86400 * 3,
      props: {
        posts
      }
    }
  }
}
