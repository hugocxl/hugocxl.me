// Components
import { Page } from '@/frontend/shared/components'
import { Title, Text, Stack, SimpleGrid, Flex } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { PAGES } from '@/frontend/shared/constants'
const HOME_PAGE_TITLE = `Home`
const HOME_PAGE_DESCRIPTION = `Curious human. Software Craftsman. Junior Thinker`

export const Home: NextPage = () => {
  const commonHeaderProps = {
    span: true,
    m: '0 !important',
    lh: '1 !important'
  }

  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Flex h={'100%'} direction={'column'} justify={'space-evenly'}>
        <div>
          <Title {...commonHeaderProps}>hugo corta.</Title>
          <Title opacity={0.2} {...commonHeaderProps}>
            software craftsman.
          </Title>
          <Title opacity={0.2} {...commonHeaderProps}>
            junior thinker.
          </Title>
          <Title opacity={0.2} {...commonHeaderProps}>
            curious human.
          </Title>
          <Text fw={'bold'} color={'dimmed'}>
            @hcorta
          </Text>
        </div>

        <div>
          <Text color={'dimmed'}>
            Welcome <br /> I am excited to share with you a little bit about
            myself, my interests, and my work. <br /> Please take a look around
            and feel free to reach out.
          </Text>
        </div>

        <SimpleGrid
          cols={4}
          breakpoints={[{ maxWidth: 'sm', cols: 2, spacing: 0 }]}
        >
          {PAGES.map((page) => (
            <NextLink href={page.href} key={page.href} className={'hoverable'}>
              <Stack key={page.title} spacing={0}>
                <Title order={5} m={'0 !important'}>
                  {page.title}
                </Title>
                <Text size={'xs'} color={'dimmed'}>
                  {page.description}
                </Text>
              </Stack>
            </NextLink>
          ))}
        </SimpleGrid>
      </Flex>
    </Page>
  )
}
