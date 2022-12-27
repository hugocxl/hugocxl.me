import { BlogPost } from '@/frontend/modules/blog'
import { BlogPostServer } from '@/backend/modules/blog'

const { getStaticPaths, getStaticProps } = BlogPostServer

export default BlogPost
export { getStaticPaths, getStaticProps }
