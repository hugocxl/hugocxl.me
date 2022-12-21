import { ResourcesPage } from '@/frontend/modules/resources'
import { notionClient } from '@/frontend/shared/lib'

export async function getStaticProps() {
  const resources = await notionClient.getDatabase(
    process.env.NOTION_RESOURCES_DB_ID
  )

  return {
    revalidate: 86400,
    props: {
      resources
    }
  }
}

export default ResourcesPage
