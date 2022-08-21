// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import Link from 'next/link'
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider
} from '@mui/material'

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
    <List>
      {posts.map((post) => {
        const { slug, meta } = post
        const { title, author, category, date, bannerImage, tags } = meta

        return (
          <Link href={`/blog/${slug}`}>
            <ListItem key={title}>
              <ListItemText>{title}</ListItemText>
              <ListSubheader>
                <span>{date}</span>
                <span>{category}</span>
                <span>{tags}</span>
              </ListSubheader>
            </ListItem>
          </Link>
        )
      })}
    </List>
  )
}
