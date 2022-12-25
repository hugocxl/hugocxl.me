// Components
import { Page } from '@/frontend/shared/components'
import {
  Title,
  Text,
  Stack,
  SimpleGrid,
  Flex,
  ActionIcon,
  Group
} from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { PAGES } from '@/frontend/shared/constants'
const HOME_PAGE_TITLE = 'Home'
const HOME_PAGE_DESCRIPTION =
  'Curious human. Software Craftsman. Junior Thinker'

export const Home: NextPage = () => {
  const commonHeaderProps = {
    span: true,
    m: '0 !important'
    // lh: '1.25 !important'
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
          {/* <Title opacity={0.2} {...commonHeaderProps}>
            software craftsman.
          </Title>
          <Title opacity={0.2} {...commonHeaderProps}>
            junior thinker.
          </Title>
          <Title opacity={0.2} {...commonHeaderProps}>
            curious human.
          </Title> */}
          <Text fw={'bold'} color={'dimmed'}>
            @hcorta
          </Text>
          <Text color={'dimmed'} mt={'xl'}>
            Welcome. <br /> I am excited to share with you a little bit about
            myself, my interests, and my work. <br /> Please take a look around
            and feel free to reach out.
          </Text>
        </div>

        <SimpleGrid
          cols={3}
          breakpoints={[{ maxWidth: 'sm', cols: 2, spacing: 0 }]}
        >
          {PAGES.map(({ title, href, description, icon: Icon }) => (
            <NextLink href={href} key={href} className={'hoverable'}>
              <Group noWrap>
                <ActionIcon>
                  <Icon />
                </ActionIcon>
                <Stack key={title} spacing={0}>
                  <Title order={5} span m={'0 !important'}>
                    {title}
                  </Title>
                  <Text size={'xs'} color={'dimmed'}>
                    {description}
                  </Text>
                </Stack>
              </Group>
            </NextLink>
          ))}
        </SimpleGrid>
      </Flex>
    </Page>
  )
}
