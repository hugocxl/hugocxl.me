// Components
import { NextImage, Page } from '@/frontend/shared/components'
import { Card, Group, Stack, Text } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { BLOG } from '@/frontend/shared/constants'
import { formatTimestamp } from '@/shared/utils'

export interface BlogProps {
  posts: Items
}

export const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Page title={BLOG.title} description={BLOG.description}>
      <Stack spacing={'xl'}>
        {posts.map(({ slug, name, description, updatedAt, tag, cover }) => {
          const updatedAtLabel = formatTimestamp(updatedAt)

          return (
            <NextLink
              className='hoverable'
              href={`${BLOG.href}/${slug}`}
              key={slug}
            >
              <Card withBorder>
                <Stack spacing={'xs'}>
                  <Group>
                    <NextImage
                      sx={{
                        borderRadius: '50%'
                      }}
                      width={40}
                      height={40}
                      src={cover}
                      alt={name}
                    />
                    <Stack spacing={0}>
                      <Text color={'primary'} fw={'bold'}>
                        {name}
                      </Text>
                      <Group>
                        <Text fw={'bold'} color={'dimmed'} size={'xs'}>
                          {tag}
                        </Text>
                        <Text color={'secondary'} size={'xs'}>
                          {updatedAtLabel}
                        </Text>
                      </Group>
                    </Stack>
                  </Group>
                  <Text lineClamp={2} mt={'xs'} size={'sm'} color={'secondary'}>
                    {description}
                  </Text>
                </Stack>
              </Card>
            </NextLink>
          )
        })}
      </Stack>
    </Page>
  )
}
