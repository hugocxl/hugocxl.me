// Dependencies
import * as path from 'path'
import { useMemo, useState } from 'react'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import { Page } from '../../components'
import {
  Button,
  Chip,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography
} from '@mui/material'
import NextLink from 'next/link'
import { VscArrowRight } from 'react-icons/vsc'

// Constants
const BASE_POST_PATH = 'posts'
const POSTS_DIR = path.join(process.cwd(), 'docs', BASE_POST_PATH)

export async function getStaticProps() {
  const posts = getMetaFromDocsDir(POSTS_DIR)
  const tags = posts.reduce((acc, { meta }) => {
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
        height={'100%'}
        direction={'column'}
        spacing={1}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
      >
        <Typography variant={'subtitle1'}>Tags</Typography>
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
      sidebar={Sidebar}
    >
      <List>
        {filteredPosts.map((post) => {
          const { slug, meta } = post
          const { title, description, tags } = meta

          return (
            <NextLink href={`/blog/${slug}`}>
              <ListItem
                key={title}
                sx={{
                  borderBottom: 1,
                  px: 0,
                  py: 2,
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'background.paper'
                  }
                }}
              >
                <Stack alignItems={'flex-start'} spacing={1}>
                  <Typography variant={'subtitle1'}>{title}</Typography>
                  <IconButton size={'small'} color={'secondary'}>
                    <VscArrowRight />
                  </IconButton>
                </Stack>
                <Stack
                  spacing={2}
                  direction={'column'}
                  justifyContent={'space-between'}
                  width={'100%'}
                >
                  <Typography variant={'body2'}>{description}</Typography>
                  <Stack spacing={1}>
                    {tags.map((tag) => (
                      <Chip label={tag} />
                    ))}
                  </Stack>
                </Stack>
              </ListItem>
            </NextLink>
          )
        })}
      </List>
    </Page>
  )
}
