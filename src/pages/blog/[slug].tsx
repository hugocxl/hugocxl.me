import { BlogPost } from '@/frontend/modules/blog'
import { blogPostServer } from '@/backend/modules/blog'

const { getStaticPaths, getStaticProps } = blogPostServer

export default BlogPost
export { getStaticPaths, getStaticProps }
