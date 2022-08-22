// Depedencies
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

// Components
import { MarkdownRenderer, ArticlePage } from '../../components'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Constants
const POSTS_DIR = path.join(process.cwd(), 'docs', 'posts')

export async function getStaticPaths() {
  const posts = getMetaFromDocsDir(POSTS_DIR)

  const paths = posts.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`${POSTS_DIR}/${slug}.md`, 'utf-8')
  const { data: meta, content } = matter(fileName)

  return {
    revalidate: 60,
    props: {
      meta,
      content
    }
  }
}

export default function Post({ meta, content }) {
  return (
    <ArticlePage {...meta}>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </ArticlePage>
  )
}
