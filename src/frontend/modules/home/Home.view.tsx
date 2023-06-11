// Components
import { Page, NextImage } from '@/frontend/shared/components'
import { Text, Anchor, Group, ActionIcon } from '@mantine/core'

// Types
import { NextPage } from 'next'

// Constants
import {
  IconMail,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin
} from '@tabler/icons'

const HOME_PAGE_TITLE = 'Hugo Corta · Software Craftsman'
const HOME_PAGE_DESCRIPTION = 'Welcome to my personal rambling space'

export const Home: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '0 !important'
      }}
    >
      <NextImage
        sx={{
          border: '4px solid grey',
          borderRadius: '50%'
        }}
        height={100}
        width={100}
        src={'/img/avatar-big.png'}
        alt={'Profile Picture'}
      />
      <Text sx={{ fontSize: 24 }} fw={600} color={'primary'} mt={'lg'}>
        Hi, I'm Hugo
      </Text>
      <Text>
        Lead Frontend Engineer at{' '}
        <Anchor href='https://sygris.com'>Sygris</Anchor>
      </Text>
      <Group spacing={0}>
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
      <Text
        fw={'bolder'}
        sx={{ fontSize: '5ch', lineHeight: 1 }}
        mt={60}
        align={'center'}
        color={'primary'}
      >
        Passionate to craft amazing digital products
      </Text>
      <Text mt={60} align={'center'}>
        Creative Software Engineer offering 7+ years of experience offering
        high-impact web solutions for different organizations. Welcome to my
        personal rambling space. I am excited to share with you a little bit
        about myself, my interests, and my work. Please take a look around and
        feel free to reach out
      </Text>
    </Page>
  )
}
