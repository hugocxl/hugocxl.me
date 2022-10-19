// Dependencies
import * as path from 'path'

// Utils
import {
  getMetaFromDocsDir,
  getTagsFromArticles
} from '@/frontend/shared/utils'

// Types
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { Blog, BlogPageProps } from '@/frontend/modules/blog'

// Constants
const BASE_BLOG_PATH = 'blog'
const BLOG_DIR = path.join(process.cwd(), 'docs', BASE_BLOG_PATH)

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<BlogPageProps>> => {
  const posts = getMetaFromDocsDir(BLOG_DIR)
  const tags = getTagsFromArticles(posts)

  return {
    revalidate: 60,
    props: {
      posts,
      tags
    }
  }
}

export { getStaticProps }
export default Blog
