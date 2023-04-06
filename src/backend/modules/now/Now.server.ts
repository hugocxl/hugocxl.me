// Dependencies
import { notionClient } from '@/backend/shared/lib'

export const NowServer = {
  async getStaticProps() {
    const nowsDB = await notionClient.getDatabase(
      process.env.NOTION_NOWS_DB_ID,
      {
        sorts: [
          {
            timestamp: 'created_time',
            direction: 'descending'
          }
        ]
      }
    )

    const nows = await Promise.all(
      nowsDB.map(async now => {
        const recordMap = await notionClient.getPage(now.id)

        return {
          ...now,
          recordMap
        }
      })
    )

    return {
      revalidate: 86400 * 2,
      props: {
        nows
      }
    }
  }
}
