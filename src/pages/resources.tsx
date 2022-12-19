import { ResourcesPage } from '@/frontend/modules/resources'
import { notionClient } from '@/frontend/shared/lib'

export async function getStaticProps() {
  const resources = await notionClient.getDatabase(
    '696a12eb05354b979e6ab803d356a7a7'
  )

  return {
    props: {
      resources
    }
  }
}

export default ResourcesPage
