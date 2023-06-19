// Dependencies
import { notionClient } from '@/backend/shared/lib'

export const stackServer = {
  async getStaticProps() {
    const stack = await notionClient.getDatabase(
      process.env.NOTION_STACK_DB_ID,
      {
        sorts: [
          {
            property: 'Tag',
            direction: 'ascending'
          }
        ]
      }
    )

    return {
      revalidate: 86400 * 7,
      props: {
        stack
      }
    }
  }
}
