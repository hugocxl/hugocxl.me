// Components
import { Page } from '@/frontend/shared/components'
import {
  Title,
  Text,
  ActionIcon,
  Anchor,
  Group,
  Stack,
  Box
} from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin
} from '@tabler/icons'

// Types
import { NextPage } from 'next'

// Constants
const HOME_PAGE_TITLE = `Hugo Corta`
const HOME_PAGE_DESCRIPTION = `Curious human. Software Craftsman. Junior Thinker`

export const Home: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Box pos={'relative'}>
        <Title
          span
          sx={{
            fontSize: '6rem !important',
            lineHeight: '0.7 !important',
            '@media (max-width: 600px)': {
              fontSize: '4rem !important'
            }
          }}
        >
          hugo corta
        </Title>
        <Text fw={'bold'} color={'dimmed'}>
          @hcorta
        </Text>
        <Text
          mt={16}
          sx={{
            textTransform: 'uppercase'
          }}
        >
          Curious human. Software Craftsman. Junior Thinker
        </Text>

        <Text mt={80} color={'dimmed'}>
          Welcome to my website! 👋
        </Text>
        <Text color={'dimmed'}>
          I am excited to share with you a little bit about myself, my
          interests, and my work. Please take a look around and feel free to
          reach out if you have any questions or just want to say hello.
        </Text>

        <Group spacing={'sm'} mt={20}>
          <Anchor
            href={`https://twitter.com/hcorta`}
            title={`Twitter @hcorta`}
            target={'_blank'}
          >
            <ActionIcon variant={'subtle'}>
              <IconBrandTwitter size={24} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href={`https://github.com/hcorta`}
            title={`GitHub @hcorta`}
            target={'_blank'}
          >
            <ActionIcon variant={'subtle'}>
              <IconBrandGithub size={24} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href={`https://www.linkedin.com/in/hugocorta`}
            title={`LinkedIn @hugocorta`}
            target={'_blank'}
          >
            <ActionIcon variant={'subtle'}>
              <IconBrandLinkedin size={24} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Box>
    </Page>
  )
}
