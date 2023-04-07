// Components
import { Page } from '@/frontend/shared/components'
import {
  Title,
  Text,
  Alert,
  Anchor,
  ActionIcon,
  Stack,
  Flex,
  Box,
  Group,
  Divider
} from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFileDownload,
  IconMail
} from '@tabler/icons'
import NextImage from 'next/image'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { ABOUT, BLOG, HANDBOOKS, NOW } from '@/frontend/shared/constants'

export const About: NextPage = () => {
  function CompanyItem({ title, image, date, description, location }) {
    return (
      <Box sx={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 12 }}>
        <Box pos={'relative'} h={48} w={48}>
          <NextImage
            placeholder='blur'
            blurDataURL={image}
            style={{
              marginBottom: 0,
              objectFit: 'cover',
              borderRadius: 8
            }}
            fill
            src={image}
            alt={title}
          />
        </Box>
        <Stack spacing={0} w={'100%'}>
          <Flex justify={'space-between'}>
            <Text weight={'bold'}>{title}</Text>
            <Text color={'dimmed'}>{date}</Text>
          </Flex>
          <Text color={'dimmed'}>
            {description} ({location})
          </Text>
        </Stack>
      </Box>
    )
  }

  return (
    <Page title={ABOUT.title} description={ABOUT.description}>
      <p>Hey, I'm Hugo. Most folks know me as hcorta online.</p>

      <p>
        I'm currently the Lead Frontend Engineer at Sygris, where I focus on
        helping my team to develop the core product of the company.
      </p>

      <p>
        I love using my technical skills to build cool and interesting things.
        Contributing value across different ladders of abstraction, all the way
        from the highest levels of definition down to the lowest levels of
        implementation details, it's where you'll' find me at my best.
      </p>

      <Group spacing={'md'}>
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

      <Divider my={40} />

      <Title order={2}>{"What I'm doing now"}</Title>
      <Stack>
        <Text>
          <b>Now</b> • Check my timeline at my{' '}
          <NextLink href={NOW.href}>Now page</NextLink>.
        </Text>
        <Text>
          <b>Work</b> • I am currently working at{' '}
          <Anchor href='https://sygris.com'>Sygris</Anchor> as Lead Frontend
          Engineer.
        </Text>
        <Text>
          <b>Blog</b> • On this website{' '}
          <Anchor href={BLOG.href}>I write posts</Anchor> and{' '}
          <Anchor href={HANDBOOKS.href}>handbooks</Anchor> about diverse stuff
          that I find interesting.
        </Text>
        <Text>
          <b>Open Source</b> • As a software developer, I enjoy building
          open-source software and libraries
        </Text>
        <Text>
          <b>Teaching</b> • Sometimes I teach about web development at{' '}
          <Anchor target={'_blank'} href={'https://ironhack.com'}>
            Ironhack
          </Anchor>
        </Text>
      </Stack>

      <Title order={2}>{'Random Facts'}</Title>
      <Stack>
        <Text>
          I practice sports daily. My favourite practice is weight lifting,
          though I also enjoy running, cycling and trying other sports.
        </Text>

        <Text>
          I have two degrees in construction (Architectural Engineer and Civil
          Engineer) and worked in the field for a few years before becoming a
          developer.
        </Text>

        <Text>
          I like sci-fi books, like Dune, The Foundation, and The Three Body
          Problem series.
        </Text>

        <Text>
          I am kind of good with{' '}
          <Anchor
            target={'_blank'}
            href='https://www.youtube.com/watch?v=l1rjJUkylXw'
          >
            Photoshop
          </Anchor>
          .
        </Text>

        <Text>
          I love playing the guitar, which I learned to play aged 13. I'm not
          very good though.
        </Text>

        <Text>
          One of my ever-favorite hobbies when I was young was making electronic
          music. I stopped a few years ago to focus on other interests though.
        </Text>
      </Stack>

      <Title order={2}>{'Experience'}</Title>
      <Stack>
        <CompanyItem
          location={'Madrid'}
          date={'2023'}
          image={'/img/sygris.jpeg'}
          title={'Sygris'}
          description={'Lead Frontend Developer'}
        />
        <CompanyItem
          location={'Remote'}
          date={'2022'}
          image={'/img/champion-games.jpeg'}
          title={'Champion Games'}
          description={'FullStack Developer'}
        />
        <CompanyItem
          location={'Barcelona'}
          date={'2019, 2021'}
          image={'/img/ironhack.jpeg'}
          title={'Ironhack'}
          description={'Instructor'}
        />
        <CompanyItem
          location={'Barcelona'}
          date={'2017 - 2022'}
          image={'/img/npaw.jpeg'}
          title={'NPAW'}
          description={'Frontend Developer | Lead Frontend Developer'}
        />
      </Stack>
      <Alert
        sx={{ marginTop: '40px' }}
        icon={<IconFileDownload size={20} />}
        title='Download my CV'
        color='primary'
      >
        <Anchor download href={'/cv/Resume of Hugo Corta.pdf'}>
          Click here to download a PDF version of my resume.
        </Anchor>
      </Alert>
    </Page>
  )
}
