// Components
import { Gallery, Page } from '@/frontend/shared/components'
import { Box, Stack, Text, Title } from '@mantine/core'
import NextImage from 'next/image'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { BOOKS } from '@/frontend/shared/constants'

interface BooksProps {
  books: any
}

export const Books: NextPage<BooksProps> = ({ books }) => {
  return (
    <Page title={BOOKS.title} description={BOOKS.description}>
      <Gallery cols={4}>
        {books.map(({ cover, title, author, link }) => {
          return (
            <NextLink href={link} key={title}>
              <Stack spacing={0}>
                <Box
                  mb={'md'}
                  pos={'relative'}
                  h={240}
                  sx={{ borderRadius: '8px', overflow: 'hidden' }}
                >
                  <NextImage
                    placeholder='blur'
                    blurDataURL={cover}
                    style={{ objectFit: 'cover' }}
                    fill
                    src={cover}
                    alt={title}
                  />
                </Box>
                <Title span order={6} m={'0 !important'}>
                  {title}
                </Title>
                <Text color={'dimmed'} size={'sm'}>
                  {author}
                </Text>
              </Stack>
            </NextLink>
          )
        })}
      </Gallery>
    </Page>
  )
}
