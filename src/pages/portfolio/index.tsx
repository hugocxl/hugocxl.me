// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '@/frontend/shared/utils'

// Components
import { Portfolio } from '@/frontend/modules/portfolio'

// Types
import { Article } from '@/frontend/shared/types'
import { GetStaticProps, GetStaticPropsResult } from 'next'

// Constants
const BASE_PORTFOLIO_PATH = 'portfolio'
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', BASE_PORTFOLIO_PATH)

interface PortfolioPageProps {
  projects: Article[]
}

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<PortfolioPageProps>> => {
  const projects = getMetaFromDocsDir(PORTFOLIO_DIR)
  const sortedProjects = projects.sort((a, b) => {
    if (a.meta.date > b.meta.date) {
      return -1
    }
    return 1
  })

  return {
    revalidate: 60,
    props: {
      projects: sortedProjects
    }
  }
}

export { getStaticProps }
export default Portfolio
