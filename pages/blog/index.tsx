// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import Link from 'next/link'

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
    <div>
      {posts.map((post) => {
        const { slug, meta } = post
        const { title, author, category, date, bannerImage, tags } = meta

        return (
          <Link href={`/blog/${slug}`}>
            <article key={title}>
              <h1>{title}</h1>
              <h3>{date}</h3>
              <h3>{category}</h3>
              <h3>{tags}</h3>
            </article>
          </Link>
        )
      })}
    </div>
  )
}
