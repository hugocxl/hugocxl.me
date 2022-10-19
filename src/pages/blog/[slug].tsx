// Depedencies
import * as path from 'path'

// Components
import { MarkdownRenderer, ArticlePage } from '@/shared/components'

// Utils
import {
  getMetaFromDocsDir,
  getPathsFromArticles,
  parseMatterFromFile,
  readFileFromDir
} from '@/shared/utils'

// Types
import { ArticleMetadata } from '@/shared/types'
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

interface PostArticlePageProps {
  meta: ArticleMetadata
  content: string
  slug: string
}

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const posts = getMetaFromDocsDir(BLOG_DIR)
    const paths = getPathsFromArticles(posts)

    return {
      paths,
      fallback: false
    }
  }

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<PostArticlePageProps>> => {
  const { slug } = props.params
  const fileName = `${BLOG_DIR}/${slug}.md`
  const file = readFileFromDir(fileName)
  const pageProps = parseMatterFromFile(file)

  return {
    revalidate: 60,
    props: {
      ...pageProps,
      slug: slug as string
    }
  }
}

const PostArticlePage: NextPage<PostArticlePageProps> = ({
  meta,
  content,
  slug
}) => {
  return (
    <ArticlePage {...meta} slug={slug}>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </ArticlePage>
  )
}

export { getStaticPaths, getStaticProps }
export default PostArticlePage
