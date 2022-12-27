// Components
import { Gallery, Page } from '@/frontend/shared/components'
import { Title, Text, Stack, Flex } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { PAGES } from '@/frontend/shared/constants'

const HOME_PAGE_TITLE = 'Hi!'
const HOME_PAGE_DESCRIPTION = 'Welcome to my personal rambling space'

export const Home: NextPage = () => {
  return (
    <Page title={HOME_PAGE_TITLE} description={HOME_PAGE_DESCRIPTION}>
      <Flex direction={'column'}>
        <p>
          I am excited to share with you a little bit about myself, my
          interests, and my work. <br /> Please take a look around and feel free
          to reach out.
        </p>

        <Gallery
          spacing={'xl'}
          mt={80}
          breakpoints={[{ maxWidth: 'sm', cols: 2, spacing: 'sm' }]}
        >
          {PAGES.map(({ title, href, description }) => (
            <NextLink href={href} key={href} className={'hoverable'}>
              <Stack key={title} spacing={0}>
                <Title order={5} span m={'0 !important'}>
                  {title}
                </Title>
                <Text size={'sm'} color={'dimmed'}>
                  {description}
                </Text>
              </Stack>
            </NextLink>
          ))}
        </Gallery>
      </Flex>
    </Page>
  )
}
