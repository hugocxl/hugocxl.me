import { notionClient } from '@/backend/shared/lib'
import { BlogProps } from '@/frontend/modules/blog'
import { GetStaticProps, GetStaticPropsResult } from 'next'

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<BlogProps>
> => {
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

export const BlogServer = {
  getStaticProps
}
