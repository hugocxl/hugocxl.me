// Dependencies
import { notionClient } from '@/frontend/shared/lib'

// Types
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { BlogPage, BlogPageProps } from '@/frontend/modules/blog'

const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<BlogPageProps>
> => {
  const posts = await notionClient.getPublishedEntriesInDb(
    process.env.NOTION_BLOG_DB_ID
  )

  return {
    revalidate: 86400,
    props: {
      posts
    }
  }
}

export { getStaticProps }
export default BlogPage
