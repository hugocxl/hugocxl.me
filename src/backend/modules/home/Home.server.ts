import { notionClient } from '@/backend/shared/lib'
import { HomeProps } from '@/frontend/modules/home'
import { GetStaticProps, GetStaticPropsResult } from 'next'

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const posts = await notionClient.getPublishedEntriesInDb(
    process.env.NOTION_BLOG_DB_ID,
    {
      page_size: 3,
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

export const HomeServer = {
  getStaticProps
}
