// Types
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { BlogPage, BlogPageProps } from '@/frontend/modules/blog'
import { notionClient } from '@/frontend/shared/lib'

const NOTION_DB_ID = '163470abeada4765b1872d1267e99d77'

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<BlogPageProps>> => {
  const posts = await notionClient.getDatabase(NOTION_DB_ID, {
    filter: {
      property: 'Published',
      checkbox: {
        equals: true
      }
    }
  })

  return {
    revalidate: 60,
    props: {
      posts
    }
  }
}

export { getStaticProps }
export default BlogPage
