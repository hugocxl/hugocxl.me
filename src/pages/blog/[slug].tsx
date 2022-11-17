// Depedencies
import * as path from 'path'

// Components
import { MarkdownRenderer, PagePost } from '@/frontend/shared/components'

// Utils
import {
  createTableOfContentsFromMd,
  getMetaFromDocsDir,
  getPathsFromPosts,
  parseMatterFromFile,
  readFileFromDir
} from '@/frontend/shared/utils'

// Types
import { PostMetadata, PostTableOfContents } from '@/frontend/shared/types'
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next'

// Constants
const BASE_BLOG_PATH = 'blog'
const BLOG_DIR = path.join(process.cwd(), 'docs', BASE_BLOG_PATH)

interface BlogPostPageProps {
  meta: PostMetadata
  content: string
  slug: string
  tableOfContents: PostTableOfContents
}

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const posts = getMetaFromDocsDir(BLOG_DIR)
    const paths = getPathsFromPosts(posts)

    return {
      paths,
      fallback: false
    }
  }

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<BlogPostPageProps>> => {
  const { slug } = props.params
  const fileName = `${BLOG_DIR}/${slug}.md`
  const file = readFileFromDir(fileName)
  const { content, meta } = parseMatterFromFile(file)
  const tableOfContents = createTableOfContentsFromMd(content)

  return {
    revalidate: 60,
    props: {
      content,
      meta,
      tableOfContents,
      slug: slug as string
    }
  }
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({
  meta,
  content,
  slug,
  tableOfContents
}) => {
  return (
    <PagePost
      title={meta.title}
      description={meta.description}
      tableOfContents={tableOfContents}
    >
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </PagePost>
  )
}

export { getStaticPaths, getStaticProps }
export default BlogPostPage
