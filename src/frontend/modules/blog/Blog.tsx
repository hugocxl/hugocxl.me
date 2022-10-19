// Components
import { Page, Card } from '@/frontend/shared/components'
import { Link } from '@mui/material'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'
import { BlogPageProps } from './Blog.types'

// Constants
const BASE_BLOG_PATH = 'blog'
const BLOG_PAGE_TITLE = 'Blog'
const BLOG_PAGE_DESCRIPTION = `I like to blog about the stuff I'm interested in. Hopefully you'll find some of it interesting too`

export const Blog: NextPage<BlogPageProps> = ({ posts, tags }) => {
  return (
    <Page
      title={BLOG_PAGE_TITLE}
      description={BLOG_PAGE_DESCRIPTION}
      display={'flex'}
      flexDirection={'column'}
    >
      {posts.map((post, i) => {
        const { slug, meta } = post
        const { title, description, tags, date } = meta

        return (
          <NextLink href={`/${BASE_BLOG_PATH}/${slug}`} key={slug}>
            <Link color={'inherit'} underline={'none'}>
              <Card
                position={i}
                title={title}
                description={description}
                // tags={tags}
                date={date}
                key={title}
                slug={slug}
              />
            </Link>
          </NextLink>
        )
      })}
    </Page>
  )
}
