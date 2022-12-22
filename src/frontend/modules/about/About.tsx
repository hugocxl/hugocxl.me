// Components
import NextLink from 'next/link'
import { Page } from '@/frontend/shared/components'
import {
  Title,
  Text,
  Timeline,
  Alert,
  Anchor,
  Button,
  Group
} from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFileDownload,
  IconMail
} from '@tabler/icons'

// Types
import { NextPage } from 'next'

// Constants
import { ABOUT } from '@/frontend/shared/constants'

export const About: NextPage = () => {
  return (
    <Page title={ABOUT.title} description={ABOUT.description}>
      <p>
        I'm Hugo Corta, an experienced <b>Software Engineer</b> with a
        demonstrated history of working in the computer software industry.{' '}
        Skilled in <b>Mobile, Web and Server Application Development</b>, I am
        fortunate to develop myself through my career, fulfilling my interests
        by growing professionally.
      </p>
      <p>
        I love using my technical skills to build cool and interesting things.
        Contributing value across different ladders of abstraction, all the way
        from the highest levels of definition down to the lowest levels of
        implementation details, it's where you'll' find me at my best.
      </p>

      <Title order={2}>{`What I'm doing now`}</Title>
      <ul>
        <li>
          <Text weight={'bold'}>Work</Text>
          <Text>
            I am currently working at{' '}
            <Anchor href='https://sygris.com'>Sygris</Anchor> as Lead Frontend
            Engineer.
          </Text>
        </li>
        <li>
          <Text weight={'bold'} mt={'sm'}>
            Blog
          </Text>
          <Text>
            <>
              On this website <NextLink href={'/blog'}>I write posts</NextLink>{' '}
              about diverse stuff that I find interesting.
            </>
          </Text>
        </li>
        <li>
          <Text weight={'bold'} mt={'sm'}>
            Open Source
          </Text>
          <Text>
            <>
              As a software developer, I enjoy building open-source software and
              libraries
            </>
          </Text>
        </li>
        <li>
          <Text weight={'bold'} mt={'sm'}>
            Teaching
          </Text>
          <Text>
            <>
              Sometimes I teach about web development at{' '}
              <Anchor target={'_blank'} href={'https://ironhack.com'}>
                Ironhack
              </Anchor>
            </>
          </Text>
        </li>
      </ul>

      <Title order={2}>Random Facts</Title>
      <ul>
        <li>
          I practice sports daily. My favourite practice is strength training,
          though I also enjoy running, cycling and other sports.
        </li>
        <li>
          I have two degrees in construction (Architectural Engineer and Civil
          Engineer) and worked in the field for a few years before becoming a
          developer.
        </li>
        <li>
          I like sci-fi books, like Dune, The Foundation, and The Three Body
          Problem series.
        </li>
        <li>
          I am kind of good with{' '}
          <a
            target={'_blank'}
            href='https://www.youtube.com/watch?v=l1rjJUkylXw'
          >
            Photoshop
          </a>
          .
        </li>
        <li>
          I love playing the guitar, which I learned to play aged 13. Through my
          teenage years I tried on some groups but (thankfully) I didn't make it
          very far. Nowadays, just some Metallica songs remains as remanent of
          my early heavy metal manners. Shame on me.
        </li>
        <li>
          One of my ever-favorite hobbies when I was young was making electronic
          music. I stopped a few years ago to focus on other interests though.
        </li>
      </ul>

      <Title order={2}>Experience</Title>
      <Timeline active={-1} bulletSize={16} lineWidth={2}>
        <Timeline.Item title={'Frontend Developer at @NPAW'}>
          <Text size={'xs'}>Sep 2017 - Sep 2019</Text>
          <Text color='dimmed' size={'sm'}>
            Development and maintenance of UI company products.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Instructor Assistant at @Ironhack'}>
          <Text size={'xs'}>Apr 2019 - May 2019</Text>
          <Text color='dimmed' size={'sm'}>
            Support students during the learning experience through the design
            implementation course.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Lead Frontend Developer at @NPAW'}>
          <Text size={'xs'}>Sep 2019 - Feb 2022</Text>
          <Text color='dimmed' size={'sm'}>
            Development and maintenance of UI company products.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Instructor Assistant at @Ironhack'}>
          <Text size={'xs'}>Oct 2019 - Nov 2019</Text>
          <Text color='dimmed' size={'sm'}>
            Support students during the learning experience through the design
            implementation course.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Lead Instructor at @Ironhack'}>
          <Text size={'xs'}>Sep 2021 - Oct 2021</Text>
          <Text color='dimmed' size={'sm'}>
            <span>Overseeing the whole academic experience of the course.</span>
            <span>
              Produce my own curriculum for the lessons, that you may consult at
              my Notion.
            </span>
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Full Stack Developer at @Champion Games'}>
          <Text size={'xs'}>Feb 2022 - Sep 2022</Text>
          <Text color='dimmed' size={'sm'}>
            Development and maintenance of company products.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Lead Frontend Engineer at @Sygris'}>
          <Text size={'xs'}>Jan 2022 - Present</Text>
          <Text color='dimmed' size={'sm'}>
            Development and maintenance of company products.
          </Text>
        </Timeline.Item>
      </Timeline>
      <Alert
        sx={{ marginTop: '20px' }}
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
        <Anchor
          href={'mailto:corta.hugo@gmail.com'}
          title={`Mail`}
          target={'_blank'}
        >
          <Button leftIcon={<IconMail size={16} />} variant={'default'}>
            Mail
          </Button>
        </Anchor>
        <Anchor
          href={`https://github.com/hcorta`}
          title={`GitHub @hcorta`}
          target={'_blank'}
        >
          <Button leftIcon={<IconBrandGithub size={16} />} variant={'default'}>
            GitHub
          </Button>
        </Anchor>
        <Anchor
          href={`https://twitter.com/hcorta`}
          title={`Twitter @hcorta`}
          target={'_blank'}
        >
          <Button leftIcon={<IconBrandTwitter size={16} />} variant={'default'}>
            Twitter
          </Button>
        </Anchor>
        <Anchor
          href={`https://www.linkedin.com/in/hugocorta`}
          title={`LinkedIn @hugocorta`}
          target={'_blank'}
        >
          <Button
            leftIcon={<IconBrandLinkedin size={16} />}
            variant={'default'}
          >
            Linkedin
          </Button>
        </Anchor>
      </Group>
    </Page>
  )
}
