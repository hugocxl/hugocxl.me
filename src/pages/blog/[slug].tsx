// Depedencies
import * as path from 'path'

// Components
import { MarkdownRenderer, ArticlePage } from 'src/components'

// Utils
import {
  getMetaFromDocsDir,
  getPathsFromArticles,
  parseMatterFromFile,
  readFileFromDir
} from 'src/utils'

// Types
import { ArticleMetadata } from 'src/types'
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
  const fileName = `${BLOG_DIR}/${props.params.slug}.md`
  const file = readFileFromDir(fileName)
  const pageProps = parseMatterFromFile(file)

  return {
    revalidate: 60,
    props: pageProps
  }
}

const PostArticlePage: NextPage<PostArticlePageProps> = ({ meta, content }) => {
  return (
    <ArticlePage {...meta}>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </ArticlePage>
  )
}

export { getStaticPaths, getStaticProps }
export default PostArticlePage
