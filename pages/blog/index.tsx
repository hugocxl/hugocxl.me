// Dependencies
import * as path from 'path'
import { useMemo, useState } from 'react'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import { Page, Card } from 'components'
import { Chip, Stack } from '@mui/material'
import { Masonry } from '@mui/lab'
import NextLink from 'next/link'

// Constants
const BASE_POST_PATH = 'posts'
const POSTS_DIR = path.join(process.cwd(), 'docs', BASE_POST_PATH)

export async function getStaticProps() {
  const posts = getMetaFromDocsDir(POSTS_DIR)
  const tags = posts.reduce((acc, { meta }) => {
    // @ts-ignore:next-line
    meta.tags.forEach((tag) => {
      if (!acc.includes(tag)) acc.push(tag)
    }),
      {}
    return acc
  }, [])

  return {
    revalidate: 60,
    props: {
      posts,
      tags
    }
  }
}

export default function Blog({ posts, tags }) {
  const [selectedTag, setTag] = useState('')
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts
    return posts.filter((post) => {
      return post.meta.tags.includes(selectedTag)
    })
  }, [selectedTag])

  function Sidebar() {
    return (
      <Stack
        // height={'100%'}
        // direction={'column'}
        spacing={1}
        marginBottom={4}
      >
        {tags.map((tag) => (
          <Chip
            label={tag}
            onClick={() => setTag(selectedTag === tag ? '' : tag)}
            color={tag === selectedTag ? 'secondary' : 'primary'}
            size={'small'}
            variant={'outlined'}
          />
        ))}
      </Stack>
    )
  }

  return (
    <Page
      title={'Blog'}
      description={`I like to blog about the stuff I'm interested in. Hopefully you'll find some of it interesting too!`}
    >
      <Sidebar />
      <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }} spacing={4}>
        {filteredPosts.map((post, i) => {
          const { slug, meta } = post
          const { title, description, tags, date } = meta

          return (
            <NextLink href={`/${BASE_POST_PATH}/${slug}`} key={slug}>
              <Card
                title={title}
                description={description}
                tags={tags}
                date={date}
                key={title}
              />
            </NextLink>
          )
        })}
      </Masonry>
    </Page>
  )
}
