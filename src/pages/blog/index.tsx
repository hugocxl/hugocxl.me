// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir, getTagsFromArticles } from '@/shared/utils'

// Components
import { Page, Card } from '@/shared/components'
import { Link } from '@mui/material'
import NextLink from 'next/link'

// Types
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import { Article, ArticleTags } from '@/shared/types'

// Constants
const BASE_BLOG_PATH = 'blog'
const BLOG_DIR = path.join(process.cwd(), 'docs', BASE_BLOG_PATH)
const BLOG_PAGE_TITLE = 'Blog'
const BLOG_PAGE_DESCRIPTION = `I like to blog about the stuff I'm interested in. Hopefully you'll find some of it interesting too`

interface BlogPageProps {
  posts: Article[]
  tags: ArticleTags
}

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<BlogPageProps>> => {
  const posts = getMetaFromDocsDir(BLOG_DIR)
  const tags = getTagsFromArticles(posts)

  return {
    revalidate: 60,
    props: {
      posts,
      tags
    }
  }
}

const BlogPage: NextPage<BlogPageProps> = ({ posts, tags }) => {
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

export { getStaticProps }
export default BlogPage
