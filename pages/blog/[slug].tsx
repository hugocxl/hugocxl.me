// Depedencies
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

// Components
import { MarkdownRenderer } from '../../components'

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
  const { title, author, category, date, bannerImage, tags } = meta

  return (
    <main>
      <img src={bannerImage} />
      <h1>{title}</h1>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {tags.join()}
      </h3>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </main>
  )
}
