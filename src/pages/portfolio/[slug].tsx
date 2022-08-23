// Depedencies
import * as path from 'path'

// Components
import { ArticlePage, MarkdownRenderer } from 'src/components'

// Utils
import {
  getMetaFromDocsDir,
  getPathsFromArticles,
  parseMatterFromFile,
  readFileFromDir
} from 'src/utils'

// Types
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next'
import { ArticleMetadata } from 'src/types'

// Constants
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', 'portfolio')

interface PortfolioArticlePageProps {
  meta: ArticleMetadata
  content: string
}

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const projects = getMetaFromDocsDir(PORTFOLIO_DIR)
    const paths = getPathsFromArticles(projects)

    return {
      paths,
      fallback: false
    }
  }

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<PortfolioArticlePageProps>> => {
  const fileName = `${PORTFOLIO_DIR}/${props.params.slug}.md`
  const file = readFileFromDir(fileName)
  const pageProps = parseMatterFromFile(file)

  return {
    revalidate: 60,
    props: pageProps
  }
}

const PortfolioArticlePage: NextPage<PortfolioArticlePageProps> = ({
  meta,
  content
}) => {
  return (
    <ArticlePage {...meta}>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </ArticlePage>
  )
}

export { getStaticPaths, getStaticProps }
export default PortfolioArticlePage
