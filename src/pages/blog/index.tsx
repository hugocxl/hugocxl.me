import { BlogServer } from '@/backend/modules/blog'
import { Blog } from '@/frontend/modules/blog'

const { getStaticProps } = BlogServer

export default Blog
export { getStaticProps }
