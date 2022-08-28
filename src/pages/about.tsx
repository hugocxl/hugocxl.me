// Components
import NextLink from 'next/link'
import { Alert, Link, Stack, Typography } from '@mui/material'
import { Page, LinkIconButton } from 'src/components'

// Types
import { NextPage } from 'next'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

// Constants
const ABOUT_PAGE_TITLE = `About`
const ABOUT_PAGE_DESCRIPTION = `Get to know me a little bit more`

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

  function Li({ name, children }) {
    return (
      <li>
        <Stack spacing={1} alignItems={'center'} mb={1}>
          <Typography
            gutterBottom={false}
            variant='subtitle1'
            component={'span'}
          >
            {name}
          </Typography>
          <Typography gutterBottom={false}>{children}</Typography>
        </Stack>
      </li>
    )
  }

  return (
    <Page title={ABOUT_PAGE_TITLE} description={ABOUT_PAGE_DESCRIPTION}>
      <Typography paragraph>
        I'm an experienced <b>Software Engineer</b> with a demonstrated history
        of working in the computer software industry.{' '}
        <b>Skilled in Mobile, Web and Server Application Development.</b>
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
        <Typography>
          You can reach me out{' '}
          <Link href='mailto:corta.hugo@gmail.com'>through mail</Link> or, if
          you prefer so, you may leave me a message in any of the main social
          plaforms. I'll get back to you as soon as I can.
        </Typography>
        <Stack mt={2} spacing={2}>
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

      <Section title={`What I'm doing now`}>
        <ul>
          <Li name={'Work'}>
            I am currently working at MetaSoccer as full-stack developer.
          </Li>

          <Li name={'Open Source'}>
            As a software developer, I enjoy building{' '}
            <NextLink href={'/portfolio'}>
              <Link>open-source software and libraries.</Link>
            </NextLink>
          </Li>

          <Li name={'Teaching'}>
            Sometimes I teach about web development at{' '}
            <Link href={'https://ironhack.com'}>Ironhack</Link>
          </Li>

          <Li name={'Blog'}>
            On this website{' '}
            <NextLink href={'/blog'}>
              <Link>I write articles</Link>
            </NextLink>{' '}
            about diverse stuff that I find interesting.
          </Li>
        </ul>
      </Section>

      <Section title={`My experience timeline`}>
        <ul>
          <li>
            <Typography variant={'h6'} component={'h3'} mt={4}>
              2022
            </Typography>
            <ul>
              <Li name={'@MetaSoccer'}>Full-stack developer</Li>
            </ul>
          </li>
          <li>
            <Typography variant={'h6'} component={'h3'} mt={4}>
              2021
            </Typography>
            <ul>
              <Li name={'@NPAW'}>Lead FrontEnd Developer</Li>
              <Li name={'@Ironhack'}>
                Design Implementation Course Lead Teacher
              </Li>
            </ul>
          </li>

          <li>
            <Typography variant={'h6'} component={'h3'} mt={4}>
              2020
            </Typography>
            <ul>
              <Li name={'@NPAW'}>Lead FrontEnd Developer</Li>
            </ul>
          </li>
          <li>
            <Typography variant={'h6'} component={'h3'} mt={4}>
              2019
            </Typography>
            <ul>
              <Li name={'@NPAW'}>Lead FrontEnd Developer</Li>
              <Li name={'@Ironhack'}>Design Implementation Course T.A. x2</Li>
            </ul>
          </li>
          <li>
            <Typography variant={'h6'} component={'h3'} mt={4}>
              2018
            </Typography>
            <ul>
              <Li name={'@NPAW'}>FrontEnd Developer</Li>
            </ul>
          </li>
          <li>
            <Typography variant={'h6'} component={'h3'} mt={4}>
              2017
            </Typography>
            <ul>
              <Li name={'@NPAW'}>JR. FrontEnd Developer</Li>
              <Li name={'@Ironhack'}>Full Stack Developer Bootcamp</Li>
            </ul>
          </li>
        </ul>

        <Alert sx={{ mt: 8 }} severity='info'>
          <Link
            download
            href={'/docs/Resume of Hugo Corta.pdf'}
            sx={{ fontSize: '16px' }}
          >
            Download my CV here!
          </Link>
        </Alert>
      </Section>
    </Page>
  )
}

export default AboutPage
