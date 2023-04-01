import { notionClient } from '@/backend/shared/lib'
import { HomeProps } from '@/frontend/modules/home'
import { GetStaticProps, GetStaticPropsResult } from 'next'

const commonReqArgs = {
  page_size: 3,
  sorts: [
    {
      timestamp: 'last_edited_time',
      direction: 'descending'
    }
  ]
}

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const posts = await notionClient.getPublishedEntriesInDb(
    process.env.NOTION_BLOG_DB_ID,
    commonReqArgs
  )

  const handbooks = await notionClient.getPublishedEntriesInDb(
    process.env.NOTION_HANDBOOKS_DB_ID,
    commonReqArgs
  )

  return {
    revalidate: 86400 * 3,
    props: {
      posts,
      handbooks
    }
  }
}

export const HomeServer = {
  getStaticProps
}
