// Components
import { Gallery, Page, Card } from '@/frontend/shared/components'
import { Title, Text, Stack, Flex, Card as MnCard } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { BLOG, PAGES } from '@/frontend/shared/constants'
import { Items } from '@/frontend/shared/types'

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

        <Title order={2}>Explore</Title>
        <Gallery
          cols={3}
          spacing={'xl'}
          breakpoints={[{ maxWidth: 'sm', cols: 2, spacing: 'sm' }]}
        >
          {PAGES.map(({ title, href }) => (
            <NextLink href={href} key={href} className={'hoverable'}>
              <MnCard h={'100%'}>
                <Stack key={title} spacing={0}>
                  <Title order={6} span m={'0 !important'}>
                    {title}
                  </Title>
                </Stack>
              </MnCard>
            </NextLink>
          ))}
        </Gallery>

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
      </Flex>
    </Page>
  )
}
