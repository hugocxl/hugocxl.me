// Components
import { Page } from '@/frontend/shared/components'
import {
  Title,
  Text,
  Alert,
  Anchor,
  ActionIcon,
  Stack,
  Box,
  Group,
  Divider,
  List
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
import { ABOUT, BLOG, HANDBOOKS, PROJECTS } from '@/frontend/shared/constants'

export const About: NextPage = () => {
  return (
    <Page title={ABOUT.title} description={ABOUT.description}>
      <p>
        Hi, I'm Hugo. Most folks know me as <b>hcorta</b> online.
      </p>

      <p>
        I'm a creative <b>Software Engineer with 6+ years of experience </b>
        offering high-impact web solutions for different organisations.
      </p>

      <p>
        I'm currently the <b>Lead Frontend Engineer at Sygris</b>, where I focus
        on helping my team to develop the core product of the company.
      </p>

      <p>
        I am fortunate to develop myself through my career, fulfilling my
        interests by growing professionally. I love using my technical skills to
        build cool and interesting things. Contributing value across different
        ladders of abstraction, all the way from the highest levels of
        definition down to the lowest levels of implementation details, is where
        you'll find me at my best.
      </p>

      <Group spacing={'xs'}>
        <Anchor
          href={'mailto:corta.hugo@gmail.com'}
          title={'Mail'}
          target={'_blank'}
          component={'a'}
        >
          <ActionIcon variant={'subtle'}>
            <IconMail size={18} />
          </ActionIcon>
        </Anchor>
        <Anchor
          component={'a'}
          href={'https://github.com/hcorta'}
          title={'GitHub @hcorta'}
          target={'_blank'}
        >
          <ActionIcon variant={'subtle'}>
            <IconBrandGithub size={18} />
          </ActionIcon>
        </Anchor>
        <Anchor
          href={'https://twitter.com/hcorta'}
          title={'Twitter @hcorta'}
          target={'_blank'}
          component={'a'}
        >
          <ActionIcon variant={'subtle'}>
            <IconBrandTwitter size={18} />
          </ActionIcon>
        </Anchor>
        <Anchor
          component={'a'}
          href={'https://www.linkedin.com/in/hugocorta'}
          title={'LinkedIn @hugocorta'}
          target={'_blank'}
        >
          <ActionIcon variant={'subtle'}>
            <IconBrandLinkedin size={18} />
          </ActionIcon>
        </Anchor>
      </Group>

      <Divider my={40} />

      <Title order={2}>{"What I'm doing now"}</Title>
      <List>
        <List.Item>
          <b>🧑🏻‍💻 Work </b>I am currently working at{' '}
          <NextLink href='https://sygris.com'>Sygris</NextLink> as Lead Frontend
          Engineer
        </List.Item>
        <List.Item>
          <b>✍️ Blog</b> On this website, I write
          <NextLink href={BLOG.href}> posts</NextLink> and{' '}
          <NextLink href={HANDBOOKS.href}>handbooks</NextLink> about diverse
          stuff that I find interesting
        </List.Item>
        <List.Item>
          <b>📦 Open Source</b> As a software developer, I enjoy
          <NextLink href={PROJECTS.href}> building </NextLink>
          open-source software and libraries
        </List.Item>
        <List.Item>
          <b>👨🏻‍🏫 Teaching</b> Sometimes I teach about web development at{' '}
          <NextLink target={'_blank'} href={'https://ironhack.com'}>
            Ironhack
          </NextLink>
        </List.Item>
      </List>

      <Title order={2}>{'Principles'}</Title>
      <List>
        <List.Item>
          🧵 I am advocate for <b>Software Craftsmanship</b> and I am the #33943
          signer of the{' '}
          <NextLink
            href={'https://manifesto.softwarecraftsmanship.org/'}
            target={'_blank'}
          >
            manifesto
          </NextLink>
        </List.Item>
        <List.Item>
          😍 I am a fan of <b>XP, DDD and TDD</b>
        </List.Item>
        <List.Item>
          👬 I am a <b>team-first player</b>: collaboration and knowledge
          sharing are mandatory for me
        </List.Item>
        <List.Item>
          ✨ I use <b>Value-First</b> as my approach to development
        </List.Item>
        <List.Item>
          🚀 I believe in the importance of the
          <b> essentials of software design</b>: Design Principles, Design
          Patterns, Architectural Patterns, Architectural Styles, etc. and
          you'll often find myself reading some book about it.
        </List.Item>
      </List>

      <Title order={2}>{'Random Facts'}</Title>
      <List>
        <List.Item>🏠 I have lived in 5 different cities</List.Item>
        <List.Item>
          🏋🏻‍♂️ I practice sports daily. My favourite practice is weight lifting,
          though I also enjoy running, cycling and trying other sports
        </List.Item>

        <List.Item>
          👨🏻‍🎓 I have two degrees in construction (Architectural Engineer and
          Civil Engineer) and worked in the field for a few years before
          becoming a developer
        </List.Item>

        <List.Item>
          🪐 I like sci-fi books, like Dune, The Foundation, and The Three Body
          Problem series
        </List.Item>

        <List.Item>
          🌌 I am kind of good with{' '}
          <Anchor
            target={'_blank'}
            href='https://www.youtube.com/watch?v=l1rjJUkylXw'
          >
            Photoshop
          </Anchor>
        </List.Item>

        <List.Item>
          🎸 I play the guitar, which I learned to play aged 13. I'm not very
          good though
        </List.Item>

        <List.Item>
          🎧 One of my ever-favorite hobbies when I was young was making
          electronic music. I stopped a few years ago to focus on other
          interests though
        </List.Item>
      </List>

      <Title order={2}>{'Experience'}</Title>
      <Stack>
        <CompanyItem
          date={'Jan 2023 - Present'}
          image={'/img/sygris.jpeg'}
          company={'Sygris'}
          title={'Lead Frontend Engineer'}
          stack={'Rollup, Nx, Vite, Next, React'}
          description={
            <List withPadding>
              <List.Item>
                Assumed full responsibility for the frontend-side project's
                inception and establishment, orchestrating the complete setup of
                the different repositories involved from scratch
              </List.Item>
              <List.Item>
                Mentored junior engineers, conducting regular code reviews and
                providing technical guidance, leading to an improvement in
                overall code quality and team productivity
              </List.Item>
            </List>
          }
        />
        <CompanyItem
          date={'Feb 2022 - Oct 2022'}
          image={'/img/champion-games.jpeg'}
          company={'Champion Games'}
          title={'FullStack Engineer'}
          stack={'Rollup, Rush, Nest, Next, React, Vue'}
          description={
            <List withPadding>
              <List.Item>
                Assumed full responsibility for the React project's inception
                and establishment, orchestrating the complete setup from scratch
              </List.Item>
              <List.Item>
                Executed end-to-end development of multiple game features,
                encompassing both backend (using Nest.js to implement RESTful
                APIs and backend services) and frontend (using Next.js to create
                engaging UI features) components
              </List.Item>
            </List>
          }
        />
        <CompanyItem
          date={'June 2019 - Feb 2022'}
          image={'/img/npaw.jpg'}
          company={'NPAW'}
          title={'Lead Frontend Engineer'}
          stack={'Webpack, React, Redux'}
          description={
            <List withPadding>
              <List.Item>
                Effectively led and managed a team of 5 software engineers in a
                successful full rewrite of the company's main application
              </List.Item>
              <List.Item>
                Designed and implemented an efficient and scalable architecture,
                resulting in improved system stability and reduced maintenance
                efforts
              </List.Item>
              <List.Item>
                UI Design system definition and implementation
              </List.Item>
              <List.Item>
                Collaborated with cross-functional teams, including product
                managers and designers, to gather requirements, prioritise
                features, and ensure timely delivery of high-quality software.
              </List.Item>
            </List>
          }
        />
        <CompanyItem
          date={'June 2017 - June 2019'}
          image={'/img/npaw.jpg'}
          company={'NPAW'}
          title={'Frontend Developer'}
          stack={'Backbone, React'}
          description={
            <List withPadding>
              <List.Item>
                Utilised React to translate design concepts into functional web
                elements employing best practices
              </List.Item>
            </List>
          }
        />
        <CompanyItem
          date={'2019, 2021'}
          image={'/img/ironhack.jpeg'}
          company={'Ironhack'}
          title={'Lead Instructor'}
          stack={''}
          description={
            <List withPadding>
              <List.Item>
                Development of my own comprehensive and industry-relevant
                curriculum for the Design Implementation Course, ensuring
                alignment with current design trends, tools, and best practices
              </List.Item>
              <List.Item>
                Designed and delivered engaging lectures, workshops, and
                practical exercises, effectively conveying complex design
                implementation concepts and techniques to students of varying
                skill levels
              </List.Item>
            </List>
          }
        />
      </Stack>
      <Alert
        sx={{ marginTop: '40px' }}
        icon={<IconFileDownload size={20} />}
        title='Download my CV'
        color='primary'
      >
        <Anchor download href={'/cv/Hugo_Corta__Resume.pdf'}>
          Click here to download a PDF version of my resume
        </Anchor>
      </Alert>
    </Page>
  )
}

function CompanyItem({ company, title, image, date, description, stack }) {
  return (
    <Stack spacing={0}>
      <Group spacing={'xs'}>
        <Box pos={'relative'} h={24} w={24}>
          <NextImage
            placeholder='blur'
            blurDataURL={image}
            style={{
              marginBottom: 0,
              objectFit: 'cover',
              borderRadius: '50%'
            }}
            fill
            src={image}
            alt={title}
          />
        </Box>
        <Title order={3}>{company}</Title>
      </Group>
      <Group spacing={'xs'} mt={'xs'} align={'flex-end'}>
        <Text color={'primary'} weight={'bolder'}>
          {title}
        </Text>
        <Text sx={{ fontSize: 12 }} color={'dimmed'}>
          {date}
        </Text>
      </Group>
      <Text size={'sm'} color={'blue'}>
        {stack}
      </Text>
      <Box pt={'md'}>{description}</Box>
    </Stack>
  )
}
