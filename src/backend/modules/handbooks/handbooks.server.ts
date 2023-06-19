import { notionClient } from '@/backend/shared/lib'
import { HandbooksProps } from '@/frontend/modules/handbooks'
import { GetStaticPropsResult } from 'next'

export const handbooksServer = {
  async getStaticProps(): Promise<GetStaticPropsResult<HandbooksProps>> {
    const handbooks = await notionClient.getPublishedEntriesInDb(
      process.env.NOTION_HANDBOOKS_DB_ID,
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
        handbooks
      }
    }
  }
}
