// Components
import { Page, NextImage } from '@/frontend/shared/components'
import {
  Text,
  Flex,
  Stack,
  Anchor,
  Group,
  ActionIcon,
  Title
} from '@mantine/core'

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

const HOME_PAGE_TITLE = 'Hugo Corta · Software Craftsman'
const HOME_PAGE_DESCRIPTION = 'Welcome to my personal rambling space'

export interface HomeProps {
  posts: Items
  handbooks: Items
}

export const Home: NextPage<HomeProps> = ({ posts, handbooks }) => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Flex direction={'column'}>
        <Title order={1} sx={{ margin: '0 !important' }}>
          Hugo Corta
        </Title>
        <Stack spacing={40}>
          <Text>
            Hi, I'm Hugo. I'm the Lead Frontend Developer at{' '}
            <Anchor href='https://sygris.com'>Sygris</Anchor>.
          </Text>
          <Group spacing={'xl'}>
            <NextImage
              sx={{
                // border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%'
              }}
              height={80}
              width={80}
              src={'/img/avatar-big.png'}
              alt={'Profile Picture'}
            />
            <Stack spacing={0}>
              <Anchor className='hoverable' href={BLOG.href}>
                <Text
                  color={'dimmed'}
                  sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <IconPencil size={18} />
                  {posts.length} published articles
                </Text>
              </Anchor>
              <Anchor className='hoverable' href={HANDBOOKS.href}>
                <Text
                  color={'dimmed'}
                  sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <IconBook size={18} />
                  {handbooks.length} written handbooks
                </Text>
              </Anchor>
              <Anchor className='hoverable' href={NOW.href}>
                <Text
                  color={'dimmed'}
                  sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <IconAccessPoint size={18} />
                  Check my Now page
                </Text>
              </Anchor>
            </Stack>
          </Group>
          <Text>
            Welcome to my personal rambling space. I am excited to share with
            you a little bit about myself, my interests, and my work. Please
            take a look around and feel free to reach out.
          </Text>
        </Stack>
        <Group spacing={'md'} mt={'lg'}>
          <Anchor
            href={'mailto:corta.hugo@gmail.com'}
            title={'Mail'}
            target={'_blank'}
            component={'a'}
          >
            <ActionIcon>
              <IconMail size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor
            component={'a'}
            href={'https://github.com/hcorta'}
            title={'GitHub @hcorta'}
            target={'_blank'}
          >
            <ActionIcon>
              <IconBrandGithub size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href={'https://twitter.com/hcorta'}
            title={'Twitter @hcorta'}
            target={'_blank'}
            component={'a'}
          >
            <ActionIcon>
              <IconBrandTwitter size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor
            component={'a'}
            href={'https://www.linkedin.com/in/hugocorta'}
            title={'LinkedIn @hugocorta'}
            target={'_blank'}
          >
            <ActionIcon>
              <IconBrandLinkedin size={18} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Flex>
    </Page>
  )
}
