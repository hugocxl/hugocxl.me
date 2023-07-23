// Components
import { Grid, Page, Stack, Typography } from '@/shared/components'

// Types
import { Metadata } from 'next'

// Constants
import { ABOUT } from '@/shared/constants'

export const metadata: Metadata = {
  title: ABOUT.title,
  description: ABOUT.description
}

export function About() {
  return (
    <Page {...ABOUT}>
      <p>
        Hi, I'm Hugo. Most folks know me as <b>hugocxl</b> online.
      </p>

      <p>
        I'm a creative <b>Software Engineer with 6+ years of experience </b>
        offering high-impact web solutions for different organisations.
      </p>

      <p>
        I count myself fortunate for embarking on
        <b> a career that aligns with my passions</b>, constantly pushing me to
        grow both personally and professionally. There's an indescribable joy in
        utilizing my technical skills to conjure up cool and captivating
        creations. From the highest realms of conceptualization to the
        nitty-gritty depths of implementation, I thrive when I contribute value
        across every rung of abstraction.
      </p>

      <p>
        You can gain further insights into my background and interests through
        my written works, projects, and various social media profiles.
      </p>

      <h2>{'Principles'}</h2>
      <p>
        As an advocate for
        <b> Software Craftsmanship </b>
        <i>(#33943 signer of the manifesto)</i>, I am dedicated to promoting the
        art of software development. I am passionate about
        <b> XP, DDD, and TDD,</b> constantly striving for excellence in my work.
        Emphasizing
        <b> teamwork, collaboration, and knowledge sharing</b>, I believe in the
        power of collective effort. With a <b>Value-First approach</b> to
        development, I prioritize delivering meaningful solutions. Additionally,
        I recognize the significance of software design essentials, including
        Design Principles, Design Patterns, Architectural Patterns, and
        Architectural Styles. It's no surprise to find me immersed in books on
        these topics, constantly expanding my knowledge.
      </p>

      <h2>{'Random Facts'}</h2>
      <p>
        I embrace an <b>active lifestyle</b> by practicing sports daily. Weight
        lifting is my favorite, but I also find joy in running, cycling, and
        exploring various other sports. With <b>two degrees in engineering </b>
        <i>(Architectural Engineer and Civil Engineer)</i>, I spent some years
        working in the field before transitioning into the realm of development.
        When it comes to literature, sci-fi books like Dune, The Foundation, and
        The Three Body Problem series captivate my imagination. Additionally, I
        possess a knack for Photoshop, and while my guitar skills are modest
        from learning at the age of 13, I still enjoy playing. In my younger
        days, one of my beloved hobbies was creating electronic music, although
        I shifted my focus to other interests a few years ago.
      </p>

      <h2>{'Experience'}</h2>
      <div>
        <CompanyItem
          date={'July 2023 - Present'}
          company={'InCloudForever'}
          title={'Fullstack Engineer'}
          stack={'Next, Nest'}
        />
        <CompanyItem
          date={'Jan 2023 - July 2023'}
          company={'Sygris'}
          title={'Lead Frontend Engineer'}
          stack={'Rollup, Nx, Vite, Next, React'}
        />
        <CompanyItem
          date={'Feb 2022 - Oct 2022'}
          company={'Champion Games'}
          title={'Fullstack Engineer'}
          stack={'Rollup, Rush, Nest, Next, React, Vue'}
        />
        <CompanyItem
          date={'June 2019 - Feb 2022'}
          company={'NPAW'}
          title={'Lead Frontend Engineer'}
          stack={'Webpack, React, Redux'}
        />
        <CompanyItem
          date={'2019, 2021'}
          company={'Ironhack'}
          title={'Instructor'}
          stack={'HTML, CSS, JS'}
        />
        <CompanyItem
          date={'June 2017 - June 2019'}
          company={'NPAW'}
          title={'Frontend Developer'}
          stack={'Backbone, React'}
        />
      </div>
    </Page>
  )
}

function CompanyItem({ company, title, date, stack }) {
  return (
    <Grid
      rounded={'md'}
      bg={'bg.secondary'}
      gap={'sm'}
      p={'md'}
      mb={'md'}
      columns={2}
      alignItems={'baseline'}
    >
      <Stack gap={0}>
        <Typography color={'text.primary'} fontWeight={'bold'}>
          {title}
        </Typography>
        <Typography color={'text.dimmed'} fontSize={'sm'}>
          {company}
        </Typography>
      </Stack>

      <Stack gap={0} textAlign={'right'}>
        <Typography color={'text.secondary'}>{stack}</Typography>
        <Typography color={'text.dimmed'} fontSize={'sm'}>
          {date}
        </Typography>
      </Stack>
    </Grid>
  )
}
