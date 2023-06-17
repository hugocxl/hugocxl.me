// Components
import { Page, NextImage } from '@/frontend/shared/components'
import { Text, Anchor, Group, ActionIcon, Button } from '@mantine/core'
import NextLink from 'next/link'
import {
  IconMail,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin
} from '@tabler/icons'

// Types
import { NextPage } from 'next'

// Constants

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
        height: '100%'
      }}
    >
      <NextImage
        sx={{
          borderRadius: '50%',
          background: 'rgb(155,163,194)'
        }}
        mt={'xl'}
        height={140}
        width={140}
        src={'/img/avatar-big.png'}
        alt={'Profile Picture'}
      />
      <Text sx={{ fontSize: 24 }} fw={600} color={'primary'} mt={'lg'}>
        Hi, I'm Hugo
      </Text>
      <Text>Lead Frontend Engineer at Sygris</Text>
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
        mt={40}
        align={'center'}
        color={'primary'}
      >
        Passionate to craft <br /> amazing digital products
      </Text>
      <Text
        color={'dimmed'}
        sx={{ fontSize: '2ch', lineHeight: 1.5 }}
        my={'xl'}
        align={'center'}
      >
        Creative Software Engineer with 6+ years of experience <br /> offering
        high-impact web solutions for different organizations
      </Text>
      <NextLink href={'/about'}>
        <Button variant={'light'} title={'Mail'}>
          {'More about me'}
        </Button>
      </NextLink>
    </Page>
  )
}
