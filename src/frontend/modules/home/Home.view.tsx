// Components
import { Gallery, Page, Card } from '@/frontend/shared/components'
import { Title, Text, Flex } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { BLOG } from '@/frontend/shared/constants'

const HOME_PAGE_TITLE = 'Hi!'
const HOME_PAGE_DESCRIPTION = 'Welcome to my personal rambling space'

export interface HomeProps {
  posts: Items
}

export const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Page title={HOME_PAGE_TITLE} description={HOME_PAGE_DESCRIPTION}>
      <Flex direction={'column'}>
        <Text>
          I am excited to share with you a little bit about myself, my
          interests, and my work. <br /> Please take a look around and feel free
          to reach out.
        </Text>

        <Title order={2}>Featured Posts</Title>
        <Gallery spacing={'xl'}>
          {posts.map(({ slug, name, description, createdAt, cover }) => {
            return (
              <Card
                link={`${BLOG.href}/${slug}`}
                key={slug}
                name={name}
                description={description}
                createdAt={createdAt}
                cover={cover}
                useNextImage={true}
              />
            )
          })}
        </Gallery>
        <NextLink href={'/blog'} className={'hoverable'}>
          <Text color={'dimmed'}>{'Explore all posts >'}</Text>
        </NextLink>
      </Flex>
    </Page>
  )
}
