// Components
import { Page, List } from '@/frontend/shared/components'
import { Text, Flex, Stack, Anchor } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { BLOG, HANDBOOKS } from '@/frontend/shared/constants'

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
        <Stack spacing={12} mt={'6rem'} mb={'6rem'}>
          <Text
            sx={{ fontSize: 'xx-large' }}
            fw={'bolder'}
          >{`Hi 👋, I'm Hugo`}</Text>
          <Text color={'secondary'} size={'lg'}>
            Welcome to my personal rambling space. I am excited to share with
            you a little bit about myself, my interests, and my work. Please
            take a look around and feel free to reach out.
          </Text>
          <Text color={'secondary'} mt={'xl'}>
            👉 Building cool things at{' '}
            <Anchor href='https://sygris.com'>Sygris</Anchor>
          </Text>
        </Stack>

        <List
          page={BLOG}
          items={posts}
          id={'Latest posts'}
          title={'Latest posts'}
          subtitle={'See al posts'}
        />

        <List
          page={HANDBOOKS}
          items={handbooks}
          id={'Latest handbooks'}
          title={'Latest handbooks'}
          subtitle={'See al handbooks'}
        />
      </Flex>
    </Page>
  )
}
