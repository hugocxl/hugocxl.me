// Depedencies
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

// Components
import { MarkdownRenderer, Page } from '../../components'

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
  const { title, author, category, date, bannerImage, tags, description } = meta

  return (
    <Page title={title} description={description}>
      {/* <img src={bannerImage} />
      <h1>{title}</h1>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {tags.join()}
      </h3> */}
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </Page>
  )
}
