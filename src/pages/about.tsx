// Components
import NextLink from 'next/link'
import { Alert, Link, Stack, Typography } from '@mui/material'
import { Page, List, LinkIconButton } from 'src/components'

// Types
import { NextPage } from 'next'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

// Constants
const ABOUT_PAGE_TITLE = `About`
const ABOUT_PAGE_DESCRIPTION = `Get to know me a little bit more.`

const AboutPage: NextPage = (props) => {
  function Section({ title, children }) {
    return (
      <>
        <Typography variant='h5' component={'h2'} mt={12}>
          {title}
        </Typography>
        {children}
      </>
    )
  }
  return (
    <Page title={ABOUT_PAGE_TITLE} description={ABOUT_PAGE_DESCRIPTION}>
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

      <Section title={`Get in touch`}>
        <Stack>
          <LinkIconButton
            icon={BsGithub}
            href={`https://github.com/hcorta`}
            title={`GitHub @hcorta`}
          />
          <LinkIconButton
            icon={BsTwitter}
            href={`https://twitter.com/`}
            title={`Twitter @hcorta`}
          />
          <LinkIconButton
            icon={BsLinkedin}
            href={`https://www.linkedin.com/in/hugocorta`}
            title={`LinkedIn @hugocorta`}
          />
        </Stack>
      </Section>

      <Section title={`What I'm working on`}>
        <List
          items={[
            {
              title: 'Work',
              description:
                'I am currently working at MetaSoccer as full-stack developer.'
            },
            {
              title: 'Open Source',
              description:
                'As a software engineer, I enjoy building open-source software and libraries.'
            },
            {
              title: 'Teaching',
              description:
                'I teach sometimes about web development at Ironhack BCN.'
            },
            {
              title: 'Blog',
              description:
                'On this website I write articles about diverse stuff that I find interesting.'
            }
          ]}
        />
      </Section>

      <Section title={`My experience`}>
        <Typography mt={4} variant={'h6'}>
          2017
        </Typography>
        <List
          items={[
            {
              title: 'Ironhack',
              description: 'Full Stack Bootcamp'
            },
            {
              title: 'NPAW',
              description: 'Junior FrontEnd Developer'
            }
          ]}
        />
        <Typography mt={4} variant={'h6'}>
          2018
        </Typography>
        <List
          items={[
            {
              title: 'NPAW',
              description: 'FrontEnd Developer'
            }
          ]}
        />
        <Typography mt={4} variant={'h6'}>
          2019
        </Typography>
        <List
          items={[
            {
              title: 'Ironhack',
              description: 'Design Implementation Course T.A. x2'
            },
            {
              title: 'NPAW',
              description: 'Lead FrontEnd Developer'
            }
          ]}
        />
        <Typography mt={4} variant={'h6'}>
          2020
        </Typography>
        <List
          items={[
            {
              title: 'NPAW',
              description: 'Lead FrontEnd Developer'
            }
          ]}
        />
        <Typography mt={4} variant={'h6'}>
          2021
        </Typography>
        <List
          items={[
            {
              title: 'Ironhack',
              description: 'Design Implementation Course Lead Teacher'
            },
            {
              title: 'NPAW',
              description: 'Lead FrontEnd Developer'
            }
          ]}
        />
        <Typography mt={4} variant={'h6'}>
          2022
        </Typography>
        <List
          items={[
            {
              title: 'MetaSoccer',
              description: 'Full-stack developer'
            }
          ]}
        />

        <Alert sx={{ mt: 4 }} severity='info'>
          <Link download href={'/docs/Resume of Hugo Corta.pdf'}>
            Download my CV here!
          </Link>
        </Alert>
      </Section>
    </Page>
  )
}

export default AboutPage
