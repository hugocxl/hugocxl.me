// Dependencies
import * as path from 'path'
import { useMemo, useState } from 'react'

// Utils
import { getMetaFromDocsDir, getTagsFromArticles } from '../../utils'

// Components
import { Page, Card } from '../../components'
import { Chip, Grow, Stack } from '@mui/material'
import { Masonry } from '@mui/lab'
import NextLink from 'next/link'

// Types
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import { Article, ArticleTags } from '../../types'

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
  const [selectedTag, setTag] = useState('')
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts
    return posts.filter((post) => {
      return post.meta.tags.includes(selectedTag)
    })
  }, [selectedTag])

  // function Sidebar() {
  //   return (
  //     <Stack
  //       // height={'100%'}
  //       // direction={'column'}
  //       spacing={1}
  //       marginBottom={4}
  //     >
  //       {tags.map((tag) => (
  //         <Chip
  //           label={tag}
  //           onClick={() => setTag(selectedTag === tag ? '' : tag)}
  //           color={tag === selectedTag ? 'secondary' : 'primary'}
  //           size={'small'}
  //           variant={'outlined'}
  //         />
  //       ))}
  //     </Stack>
  //   )
  // }

  return (
    <Page title={BLOG_PAGE_TITLE} description={BLOG_PAGE_DESCRIPTION}>
      {/* <Sidebar /> */}
      <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }} spacing={4}>
        {filteredPosts.map((post, i) => {
          const { slug, meta } = post
          const { title, description, tags, date } = meta

          return (
            <NextLink href={`/${BASE_BLOG_PATH}/${slug}`} key={slug}>
              <Grow in timeout={i * 200 + 200}>
                <div>
                  <Card
                    title={title}
                    description={description}
                    tags={tags}
                    date={date}
                    key={title}
                  />
                </div>
              </Grow>
            </NextLink>
          )
        })}
      </Masonry>
    </Page>
  )
}

export { getStaticProps }
export default BlogPage
