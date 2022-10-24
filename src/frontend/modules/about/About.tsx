// Components
import NextLink from 'next/link'
import {
  Alert,
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Page, LinkIconButton } from '@/frontend/shared/components'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

// Types
import { NextPage } from 'next'

// Constants
const ABOUT_PAGE_TITLE = `About`
const ABOUT_PAGE_DESCRIPTION = `Get to know more about me`

export const About: NextPage = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

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

  function Item({ title, description, weee = '' }) {
    return (
      <Box
        display={'grid'}
        gap={2}
        mb={2}
        {...(isSmallScreen
          ? { gridTemplateRows: 'auto 1fr auto' }
          : { gridTemplateColumns: 'auto 1fr auto' })}
      >
        <Stack spacing={1} alignItems={'center'}>
          <Typography
            gutterBottom={false}
            variant={'subtitle1'}
            component={'span'}
          >
            {title}
          </Typography>
          <Typography gutterBottom={false}>{weee}</Typography>
        </Stack>

        <Box
          component={'hr'}
          sx={{
            border: 0,
            width: '100%',
            borderBottom: '2px dotted',
            borderColor: 'divider'
          }}
        />
        <Typography gutterBottom={false}>{description}</Typography>
      </Box>
    )
  }

  return (
    <Page title={ABOUT_PAGE_TITLE} description={ABOUT_PAGE_DESCRIPTION}>
      <Typography variant='subtitle1' component={'span'} gutterBottom>
        Hi everyone 👋
      </Typography>
      <Typography paragraph>
        I'm Hugo Corta, an experienced <b>Software Engineer</b> with a
        demonstrated history of working in the computer software industry.{' '}
        Skilled in <b>Mobile, Web and Server Application Development</b>, I am
        fortunate to develop myself through my career, fulfilling my interests
        by growing professionally.
      </Typography>
      <Typography paragraph>
        I love using my technical skills to build cool and interesting things.
        Contributing value across different ladders of abstraction, all the way
        from the highest levels of definition down to the lowest levels of
        implementation details, it's where you'll' find me at my best.
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

      <Section title={`What I'm doing now`}>
        <Item
          title={'Work'}
          description={
            <span>
              I am currently working at <Link>CoverWallet</Link> as a Full Stack
              Developer.
            </span>
          }
        />

        <Item
          title={'Open Source'}
          description={
            <>
              As a software developer, I enjoy building{' '}
              <NextLink href={'/portfolio'}>
                <Link>open-source software and libraries.</Link>
              </NextLink>
            </>
          }
        />

        <Item
          title={'Teaching'}
          description={
            <>
              Sometimes I teach about web development at{' '}
              <Link href={'https://ironhack.com'}>Ironhack</Link>
            </>
          }
        />

        <Item
          title={'Blog'}
          description={
            <>
              On this website{' '}
              <NextLink href={'/blog'}>
                <Link>I write articles</Link>
              </NextLink>{' '}
              about diverse stuff that I find interesting.
            </>
          }
        />
      </Section>

      <Section title={`Experience`}>
        <Item
          title={'CoverWallet'}
          description={'October 2022 - Present'}
          weee={'Full Stack developer'}
        />

        <Item
          title={'MetaSoccer'}
          description={'February 2022 - October 2022'}
          weee={'Full Stack developer'}
        />

        <Item
          title={'Ironhack'}
          description={'September 2021 - October 2021'}
          weee={'Lead Instructor - Design Implementation Course'}
        />

        <Item
          title={'NPAW'}
          description={'June 2019 - February 2022'}
          weee={'Lead FrontEnd Developer'}
        />

        <Item
          title={'Ironhack'}
          description={'October 2019 - November 2019'}
          weee={'Design Implementation Course T.A. x2'}
        />

        <Item
          title={'NPAW'}
          description={'June 2017 - June 2019'}
          weee={'FrontEnd Developer'}
        />

        <Alert sx={{ mt: 4 }} severity='info'>
          <Link
            download
            href={'/docs/Resume of Hugo Corta.pdf'}
            sx={{ fontSize: '16px' }}
          >
            Download my CV here!
          </Link>
        </Alert>
      </Section>

      <Section title={`Get in touch`}>
        <Typography>
          You can reach me out{' '}
          <Link href='mailto:corta.hugo@gmail.com'>through mail</Link> or, if
          you prefer so, you may leave me a message in any of the main social
          plaforms. I'll get back to you as soon as I can.
        </Typography>
        <Stack mt={2} spacing={1}>
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
    </Page>
  )
}
