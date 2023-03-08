// Components
import { Gallery, Page } from '@/frontend/shared/components'
import {
  Title,
  Text,
  Alert,
  Anchor,
  Button,
  Group,
  Stack,
  Flex,
  Box,
  Card
} from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFileDownload,
  IconMail
} from '@tabler/icons'
import NextImage from 'next/image'

// Types
import { NextPage } from 'next'

// Constants
import { ABOUT } from '@/frontend/shared/constants'

export const About: NextPage = () => {
  function CompanyItem({ title, image, date, description }) {
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
          <Text color={'dimmed'}>{description}</Text>
        </Stack>
      </Box>
    )
  }

  return (
    <Page title={ABOUT.title} description={ABOUT.description}>
      <p>
        I'm an experienced <b>Software Engineer</b> with a demonstrated history
        of working in the computer software industry. Skilled in{' '}
        <b>Mobile, Web and Server Application Development</b>, I am fortunate to
        develop myself through my career, fulfilling my interests by growing
        professionally.
      </p>
      <p>
        I love using my technical skills to build cool and interesting things.
        Contributing value across different ladders of abstraction, all the way
        from the highest levels of definition down to the lowest levels of
        implementation details, it's where you'll' find me at my best.
      </p>

      <Title order={2}>{"What I'm doing now"}</Title>
      <ul>
        <li>
          <b>Work – </b>I am currently working at{' '}
          <Anchor href='https://sygris.com'>Sygris</Anchor> as Lead Frontend
          Engineer.
        </li>
        <li>
          <b>Blog – </b>
          On this website <Anchor href={'/blog'}>I write posts</Anchor> about
          diverse stuff that I find interesting.
        </li>
        <li>
          <b>Open Source – </b>
          As a software developer, I enjoy building open-source software and
          Textbraries
        </li>
        <li>
          <b>Teaching – </b>
          Sometimes I teach about web development at{' '}
          <Anchor target={'_blank'} href={'https://ironhack.com'}>
            Ironhack
          </Anchor>
        </li>
      </ul>

      <Title order={2}>Random Facts</Title>
      <Gallery>
        <Card>
          <Text size={32} align='center'>
            🏋️
          </Text>
          <Text align='center'>
            I practice sports daily. My favourite practice is strength training,
            though I also enjoy running, cycling and other sports.
          </Text>
        </Card>

        <Card>
          <Text size={32} align='center'>
            👷🏻‍♂️
          </Text>
          <Text align='center'>
            I have two degrees in construction (Architectural Engineer and Civil
            Engineer) and worked in the field for a few years before becoming a
            developer.
          </Text>
        </Card>

        <Card>
          <Text size={32} align='center'>
            📚
          </Text>
          <Text align='center'>
            I like sci-fi books, like Dune, The Foundation, and The Three Body
            Problem series.
          </Text>
        </Card>

        <Card>
          <Text size={32} align='center'>
            🌁
          </Text>
          <Text align='center'>
            I am kind of good with{' '}
            <Anchor
              target={'_blank'}
              href='https://www.youtube.com/watch?v=l1rjJUkylXw'
            >
              Photoshop
            </Anchor>
            .
          </Text>
        </Card>

        <Card>
          <Text size={32} align='center'>
            🎸
          </Text>
          <Text align='center'>
            I love playing the guitar, which I learned to play aged 13. I'm not
            very good though.
          </Text>
        </Card>

        <Card>
          <Text size={32} align='center'>
            🎧
          </Text>
          <Text align='center'>
            One of my ever-favorite hobbies when I was young was making
            electronic music. I stopped a few years ago to focus on other
            interests though.
          </Text>
        </Card>
      </Gallery>

      <Title order={2}>Experience</Title>
      <Stack>
        <CompanyItem
          date={'2023'}
          image={'/img/sygris.jpeg'}
          title={'Sygris'}
          description={'Lead Frontend Developer'}
        />
        <CompanyItem
          date={'2022'}
          image={'/img/champion-games.jpeg'}
          title={'Champion Games'}
          description={'FullStack Developer'}
        />
        <CompanyItem
          date={'2019, 2021'}
          image={'/img/ironhack.jpeg'}
          title={'Ironhack'}
          description={'Instructor (part-time)'}
        />
        <CompanyItem
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

      <Title order={2}>Get in touch</Title>
      <p>
        You can reach me out through mail or, if you prefer so, you may leave me
        a message in any of the main social plaforms. I'll get back to you as
        soon as I can.
      </p>
      <Group spacing={'sm'}>
        <Button
          href={'mailto:corta.hugo@gmail.com'}
          title={'Mail'}
          target={'_blank'}
          leftIcon={<IconMail size={18} />}
          component={'a'}
          variant={'subtle'}
        >
          Mail
        </Button>
        <Button
          component={'a'}
          href={'https://github.com/hcorta'}
          title={'GitHub @hcorta'}
          target={'_blank'}
          leftIcon={<IconBrandGithub size={18} />}
          variant={'subtle'}
        >
          GitHub
        </Button>
        <Button
          href={'https://twitter.com/hcorta'}
          title={'Twitter @hcorta'}
          target={'_blank'}
          leftIcon={<IconBrandTwitter size={18} />}
          variant={'subtle'}
          component={'a'}
        >
          Twitter
        </Button>
        <Button
          variant={'subtle'}
          component={'a'}
          href={'https://www.linkedin.com/in/hugocorta'}
          title={'LinkedIn @hugocorta'}
          target={'_blank'}
          leftIcon={<IconBrandLinkedin size={18} />}
        >
          Linkedin
        </Button>
      </Group>
    </Page>
  )
}
