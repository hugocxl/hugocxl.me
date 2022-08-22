// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import { Page, ArticlesList } from '../../components'
import { Chip, Link, List, ListItem, Stack, Typography } from '@mui/material'
import NextLink from 'next/link'

// Constants
const BASE_POST_PATH = 'posts'
const POSTS_DIR = path.join(process.cwd(), 'docs', BASE_POST_PATH)

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
    <Page
      title={'Blog'}
      description={`I like to blog about the stuff I'm interested in. Hopefully you'll find some of it interesting too!`}
    >
      <List>
        {posts.map((post) => {
          const { slug, meta } = post
          const { title, date, tags } = meta

          return (
            <NextLink href={`/blog/${slug}`}>
              <ListItem
                key={title}
                sx={{
                  px: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  borderBottom: 1,
                  borderColor: 'divider',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'background.paper'
                  }
                }}
              >
                <Typography variant={'subtitle1'}>{title}</Typography>
                <Stack
                  spacing={1}
                  direction={'column'}
                  justifyContent={'space-between'}
                  width={'100%'}
                >
                  <Typography variant={'body2'}>{date}</Typography>
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
