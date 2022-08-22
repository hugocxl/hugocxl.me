// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import { Page, ArticlesList } from '../../components'

// Constants
const POSTS_DIR = path.join(process.cwd(), 'docs', 'posts')

export async function getStaticProps() {
  const posts = getMetaFromDocsDir(POSTS_DIR)

  return {
    revalidate: 60,
    props: {
      posts
    }
  }
}

export default function Blog({ posts }) {
  return (
    <Page
      title={'Blog'}
      description={`I like to blog about the stuff I'm interested in. Hopefully you'll find some of it interesting too!`}
    >
      <ArticlesList articles={posts} baseUrl={'blog'} />
    </Page>
  )
}
