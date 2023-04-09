// Components
import { Page } from '@/frontend/shared/components'
import { Text, Flex, Stack, Anchor, Group, ActionIcon } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { BLOG, HANDBOOKS, NOW } from '@/frontend/shared/constants'
import {
  IconMail,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBook,
  IconAccessPoint,
  IconPencil
} from '@tabler/icons'

const HOME_PAGE_TITLE = '👋'
const HOME_PAGE_DESCRIPTION = (
  <>
    Hi, I'm Hugo. I'm the Lead Frontend Developer at{' '}
    <Anchor href='https://sygris.com'>Sygris</Anchor>.
  </>
)

export interface HomeProps {
  posts: Items
  handbooks: Items
}

export const Home: NextPage<HomeProps> = ({ posts, handbooks }) => {
  return (
    <Page title={HOME_PAGE_TITLE} description={HOME_PAGE_DESCRIPTION}>
      <Flex direction={'column'} h={'100%'} justify={'center'}>
        <Stack spacing={'xl'}>
          <Group spacing={'xl'}>
            <Text sx={{ fontSize: 80 }}>🧑🏻‍💻</Text>
            <Stack spacing={0}>
              <NextLink className='hoverable' href={BLOG.href}>
                <Text
                  color={'dimmed'}
                  sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <IconPencil size={18} />
                  {posts.length} published articles
                </Text>
              </NextLink>
              <NextLink className='hoverable' href={HANDBOOKS.href}>
                <Text
                  color={'dimmed'}
                  sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <IconBook size={18} />
                  {handbooks.length} written handbooks
                </Text>
              </NextLink>
              <NextLink className='hoverable' href={NOW.href}>
                <Text
                  color={'dimmed'}
                  sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <IconAccessPoint size={18} />
                  Check what I'm doing
                </Text>
              </NextLink>
            </Stack>
          </Group>
          <Text>
            Welcome to my personal rambling space. I am excited to share with
            you a little bit about myself, my interests, and my work. Please
            take a look around and feel free to reach out.
          </Text>
        </Stack>
        <Group spacing={0} mt={'lg'}>
          <Anchor
            href={'mailto:corta.hugo@gmail.com'}
            title={'Mail'}
            target={'_blank'}
          >
            <ActionIcon variant='subtle'>
              <IconMail size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href={'https://github.com/hcorta'}
            title={'GitHub @hcorta'}
            target={'_blank'}
          >
            <ActionIcon variant='subtle'>
              <IconBrandGithub size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href={'https://twitter.com/hcorta'}
            title={'Twitter @hcorta'}
            target={'_blank'}
          >
            <ActionIcon variant='subtle'>
              <IconBrandTwitter size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href={'https://www.linkedin.com/in/hugocorta'}
            title={'LinkedIn @hugocorta'}
            target={'_blank'}
          >
            <ActionIcon variant='subtle'>
              <IconBrandLinkedin size={18} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Flex>
    </Page>
  )
}
