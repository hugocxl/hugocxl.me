import { notionClient } from '@/backend/shared/lib'
import { HandbooksProps } from '@/frontend/modules/handbooks'
import { GetStaticProps, GetStaticPropsResult } from 'next'

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HandbooksProps>
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

export const HandbooksServer = {
  getStaticProps
}
