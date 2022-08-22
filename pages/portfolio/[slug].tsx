// Depedencies
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

// Components
import { ArticlePage, MarkdownRenderer, Page } from '../../components'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Constants
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', 'portfolio')

export async function getStaticPaths() {
  const projects = getMetaFromDocsDir(PORTFOLIO_DIR)

  const paths = projects.map(({ slug }) => ({
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
  const fileName = fs.readFileSync(`${PORTFOLIO_DIR}/${slug}.md`, 'utf-8')
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
