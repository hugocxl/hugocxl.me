// Components
import { Link, Typography } from '@mui/material'
import NextLink from 'next/link'
import { Page, List } from '../components'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector
} from '@mui/lab'

const About = () => {
  function Section({ title, children }) {
    return (
      <>
        <Typography variant='h4' mt={8}>
          {title}
        </Typography>
        {children}
      </>
    )
  }
  return (
    <Page title='About' description='Get to know a little bit more about me!'>
      <Typography paragraph>
        I'm an experienced Software Engineer with a demonstrated history of
        working in the computer software industry. Skilled in Mobile, Web and
        Server Application Development.
      </Typography>
      <Typography paragraph>
        I am fortunate to develop myself through my career, fulfilling my
        interests by growing professionally.
      </Typography>
      <Typography paragraph>
        I love using my technical skills to build cool and interesting things.
        My superpower is to deliver high-quality products by being able to
        contribute value across different ladders of abstraction, all the way
        from the highest levels of definition down to the lowest levels of
        implementation details.
      </Typography>
      <Typography paragraph>
        If you want to know more, you may{' '}
        <NextLink href={'/stack'}>
          <Link>check out my stack</Link>
        </NextLink>{' '}
        or visit{' '}
        <NextLink href={'/portfolio'}>
          <Link>my portfolio section.</Link>
        </NextLink>
      </Typography>

      <Section title={`What I'm working on`}>
        <List
          items={[
            {
              title: '👷🏻‍♂️ Work',
              description:
                'I am currently working at MetaSoccer as full-stack developer.'
            },
            {
              title: '💻 Open Source',
              description:
                'As a software engineer, I enjoy building open-source software and libraries.'
            },
            {
              title: '✍️ Blog',
              description:
                'On this website I write articles about diverse stuff that I find interesting.'
            },
            {
              title: '👨🏻‍🏫 Teaching',
              description:
                'I teach sometimes about web development at Ironhack BCN.'
            }
          ]}
        />
      </Section>

      <Section title={'Timeline'}>
        <Timeline position='right'>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>
    </Page>
  )
}

export default About
