// Dependencies
import { notionClient } from '@/frontend/shared/lib'

// Types
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { HandbooksPage, HandbooksPageProps } from '@/frontend/modules/handbooks'

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HandbooksPageProps>
> => {
  const handbooks = await notionClient.getPublishedEntriesInDb(
    process.env.NOTION_HANDBOOKS_DB_ID
  )

  return {
    revalidate: 86400,
    props: {
      handbooks
    }
  }
}

export { getStaticProps }
export default HandbooksPage
