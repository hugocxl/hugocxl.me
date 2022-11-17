// Components
import NextLink from 'next/link'
import { Page } from '@/frontend/shared/components'
import {
  Title,
  Text,
  Divider,
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
const ABOUT_PAGE_TITLE = `About me`
const ABOUT_PAGE_DESCRIPTION = `Get to know more about me`

export const About: NextPage = () => {
  return (
    <Page title={ABOUT_PAGE_TITLE} description={ABOUT_PAGE_DESCRIPTION}>
      <p>Hi there 👋</p>
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
      <p>
        If you want to know more, you may{' '}
        <NextLink href={'/stack'}>
          <Text span variant='link'>
            check out my stack
          </Text>
        </NextLink>{' '}
        or visit{' '}
        <NextLink href={'/portfolio'}>
          <Text span variant='link'>
            my portfolio section.
          </Text>
        </NextLink>
      </p>
      <Divider variant='dotted' />
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
          href={`https://twitter.com/`}
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
      <Divider variant='dotted' mt={'xl'} />
      <Title order={2}>{`What I'm doing now`}</Title>
      <ul>
        <li>
          <Text weight={'bold'}>Work</Text>
          <Text>
            I am currently working at <Anchor>CoverWallet</Anchor> as a Full
            Stack Developer.
          </Text>
        </li>
        <li>
          <Text weight={'bold'} mt={'sm'}>
            Open Source
          </Text>
          <Text>
            <>
              As a software developer, I enjoy building{' '}
              <NextLink href={'/projects'}>
                open-source software and libraries
              </NextLink>
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
        <li>
          <Text weight={'bold'} mt={'sm'}>
            Blog
          </Text>
          <Text>
            <>
              On this website <NextLink href={'/blog'}>I write Posts</NextLink>{' '}
              about diverse stuff that I find interesting.
            </>
          </Text>
        </li>
      </ul>

      <Divider variant='dotted' mt={'xl'} />
      <Title order={2}>Experience</Title>
      <Timeline active={-1} bulletSize={16} lineWidth={2}>
        <Timeline.Item title={'Frontend Developer at NPAW'}>
          <Text size={'xs'}>Sep 2017 - Sep 2019</Text>
          <Text color='dimmed'>
            Development and maintenance of UI company products.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Instructor Assistant at Ironhack'}>
          <Text size={'xs'}>Apr 2019 - May 2019</Text>
          <Text color='dimmed'>
            Support students during the learning experience through the design
            implementation course.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Lead Frontend Developer at NPAW'}>
          <Text size={'xs'}>Sep 2019 - Feb 2022</Text>
          <Text color='dimmed'>
            Development and maintenance of UI company products.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Instructor Assistant at Ironhack'}>
          <Text size={'xs'}>Oct 2019 - Nov 2019</Text>
          <Text color='dimmed'>
            Support students during the learning experience through the design
            implementation course.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Lead Instructor at Ironhack'}>
          <Text size={'xs'}>Sep 2021 - Oct 2021</Text>
          <Text color='dimmed'>
            <li>Overseeing the whole academic experience of the course.</li>
            <li>
              Produce my own curriculum for the lessons, that you may consult at
              my Notion.
            </li>
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Full Stack Developer at Champion Games'}>
          <Text size={'xs'}>Feb 2022 - Sep 2022</Text>
          <Text color='dimmed'>
            Development and maintenance of company products.
          </Text>
        </Timeline.Item>

        <Timeline.Item title={'Full Stack Developer at CoverWallet'}>
          <Text size={'xs'}>Oct 2022 - Present</Text>
          <Text color='dimmed'>
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
    </Page>
  )
}
