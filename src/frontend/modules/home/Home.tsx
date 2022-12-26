// Components
import { Gallery, Page } from '@/frontend/shared/components'
import { Title, Text, Stack, Flex } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { PAGES } from '@/frontend/shared/constants'

const HOME_PAGE_TITLE = 'Home'
const HOME_PAGE_DESCRIPTION = 'Lead Software Engineer'

export const Home: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Flex direction={'column'}>
        <p>
          Welcome. <br /> I am excited to share with you a little bit about
          myself, my interests, and my work. <br /> Please take a look around
          and feel free to reach out.
        </p>

        <Gallery spacing={'xl'} mt={80}>
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
