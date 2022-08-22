// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import { Page, ArticlesList } from '../../components'
import Masonry from '@mui/lab/Masonry'

// Constants
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', 'portfolio')

export async function getStaticProps() {
  const projects = getMetaFromDocsDir(PORTFOLIO_DIR)

  return {
    revalidate: 60,
    props: {
      projects
    }
  }
}

export default function Portfolio({ projects }) {
  return (
    <Page
      title={'Portfolio'}
      description={`Software developer and open source author, I believe in proof of work. These are my popular works.`}
    >
      <ArticlesList articles={projects} baseUrl={'portfolio'} />
    </Page>
  )
}
