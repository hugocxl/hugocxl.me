// Components
import { StackPage } from '@/frontend/modules/stack'

// Lib
import { notionClient } from '@/frontend/shared/lib'

export async function getStaticProps() {
  const stack = await notionClient.getDatabase(process.env.NOTION_STACK_DB_ID, {
    sorts: [
      {
        property: 'Tags',
        direction: 'ascending'
      }
    ]
  })

  return {
    revalidate: 86400 * 7,
    props: {
      stack
    }
  }
}

export default StackPage
