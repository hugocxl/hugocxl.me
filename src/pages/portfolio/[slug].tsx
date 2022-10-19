// Depedencies
import * as path from 'path'

// Components
import { ArticlePage, MarkdownRenderer } from '@/shared/components'

// Utils
import {
  getMetaFromDocsDir,
  getPathsFromArticles,
  parseMatterFromFile,
  readFileFromDir
} from '@/shared/utils'

// Types
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next'
import { ArticleMetadata } from '@/shared/types'

// Constants
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', 'portfolio')

interface PortfolioArticlePageProps {
  meta: ArticleMetadata
  content: string
  slug: string
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
  const { slug } = props.params
  const fileName = `${PORTFOLIO_DIR}/${slug}.md`
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

const PortfolioArticlePage: NextPage<PortfolioArticlePageProps> = ({
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
export default PortfolioArticlePage
