import { notionClient } from '@/backend/shared/lib'

export const ResourcesServer = {
  async getStaticProps() {
    const resources = await notionClient.getDatabase(
      process.env.NOTION_RESOURCES_DB_ID
    )

    return {
      revalidate: 86400 * 7,
      props: {
        resources
      }
    }
  }
}
