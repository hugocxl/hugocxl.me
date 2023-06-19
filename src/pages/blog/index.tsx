import { blogServer } from '@/backend/modules/blog'
import { Blog } from '@/frontend/modules/blog'

const { getStaticProps } = blogServer

export default Blog
export { getStaticProps }
