// Components
import { Gallery, Page, Card, NextImage } from '@/frontend/shared/components'
import { Title, Text, Flex, Group, Stack, Anchor } from '@mantine/core'
import { ContactCard } from './components'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { BLOG } from '@/frontend/shared/constants'

const HOME_PAGE_TITLE = 'Hugo Corta · Lead Software Engineer'
const HOME_PAGE_DESCRIPTION = 'Welcome to my personal rambling space'

export interface HomeProps {
  posts: Items
}

export const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Flex direction={'column'}>
        <Group spacing={'xl'}>
          <NextImage
            sx={{
              background: 'rgb(150,150,150)',
              borderRadius: '50%'
            }}
            height={80}
            width={80}
            src={'/img/avatar-big3.png'}
            alt={'Profile Picture'}
          />
          <Stack spacing={0}>
            <Text color={'primary'} weight={'bolder'} size={'xl'}>
              {'Hugo Corta'}
            </Text>
            <Text color={'dimmed'}>{'@hcorta'}</Text>
          </Stack>
        </Group>
        <Text size={'lg'} mt={'xl'} sx={{ lineHeight: '1.40' }}>
          Welcome to my personal rambling space. I am excited to share with you
          a little bit about myself, my interests, and my work. Please take a
          look around and feel free to reach out.
        </Text>
        <Text color={'dimmed'} mt={'sm'}>
          Building cool things at{' '}
          <Anchor href='https://sygris.com'>@Sygris</Anchor>
        </Text>

        <Flex align={'flex-end'} justify={'space-between'}>
          <Title order={2}>Latest Posts</Title>
          <NextLink href={BLOG.href}>
            <Text mb={'sm'} color={'dimmed'}>
              {'See all posts >'}
            </Text>
          </NextLink>
        </Flex>
        <Gallery spacing={'xl'} mb={'xl'}>
          {posts.map(({ slug, name, description, cover }) => {
            return (
              <Card
                link={`${BLOG.href}/${slug}`}
                key={slug}
                name={name}
                description={description}
                cover={cover}
                useNextImage={true}
              />
            )
          })}
        </Gallery>
        <ContactCard />
      </Flex>
    </Page>
  )
}
