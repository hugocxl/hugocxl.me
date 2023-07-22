// Components
import {
  Box,
  Grid,
  // Image,
  Link,
  Page,
  Stack,
  Typography
} from '@/shared/components'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail
} from '@tabler/icons'

// Types
import { Metadata, NextPage } from 'next'

// Constants
import { ABOUT } from '@/shared/constants'

export const metadata: Metadata = {
  title: ABOUT.title,
  description: ABOUT.description
}

export const About: NextPage = () => {
  return (
    <Page title={ABOUT.title} description={ABOUT.description}>
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

      <Stack direction={'row'}>
        <Link
          href={'mailto:corta.hugo@gmail.com'}
          title={'Mail'}
          target={'_blank'}
        >
          <button>
            <IconMail size={18} />
          </button>
        </Link>
        <Link
          href={'https://github.com/hugocxl'}
          title={'GitHub @hugocxl'}
          target={'_blank'}
        >
          <button>
            <IconBrandGithub size={18} />
          </button>
        </Link>
        <Link
          href={'https://twitter.com/hugocxl'}
          title={'Twitter @hugocxl'}
          target={'_blank'}
        >
          <button>
            <IconBrandTwitter size={18} />
          </button>
        </Link>
        <Link
          href={'https://www.linkedin.com/in/hugocorta'}
          title={'LinkedIn @hugocorta'}
          target={'_blank'}
        >
          <button>
            <IconBrandLinkedin size={18} />
          </button>
        </Link>
      </Stack>

      <h2>{"What I'm doing now"}</h2>
      <p>
        On this website I <b>share posts on a wide range of topics</b> that
        spark my interest. Alongside this, my love for software development
        drives me to
        <b> collaborate on open-source software and libraries</b>, contributing
        to the thriving developer community. As a natural educator, I also find
        joy in <b>teaching web development</b>, sharing my knowledge and
        empowering aspiring developers to embark on their own digital
        adventures.
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
          // image={'/img/sygris.jpeg'}
          company={'InCloudForever'}
          title={'Fullstack Engineer'}
          stack={'Next, Nest'}
          // description={
          //   <ul>
          //     <li>
          //       Assumed full responsibility for the frontend-side project's
          //       inception and establishment, orchestrating the complete setup of
          //       the different repositories involved from scratch
          //     </li>
          //     <li>
          //       Mentored junior engineers, conducting regular code reviews and
          //       providing technical guidance, leading to an improvement in
          //       overall code quality and team productivity
          //     </li>
          //   </ul>
          // }
        />
        <CompanyItem
          date={'Jan 2023 - July 2023'}
          // image={'/img/sygris.jpeg'}
          company={'Sygris'}
          title={'Lead Frontend Engineer'}
          stack={'Rollup, Nx, Vite, Next, React'}
          // description={
          //   <ul>
          //     <li>
          //       Assumed full responsibility for the frontend-side project's
          //       inception and establishment, orchestrating the complete setup of
          //       the different repositories involved from scratch
          //     </li>
          //     <li>
          //       Mentored junior engineers, conducting regular code reviews and
          //       providing technical guidance, leading to an improvement in
          //       overall code quality and team productivity
          //     </li>
          //   </ul>
          // }
        />
        <CompanyItem
          date={'Feb 2022 - Oct 2022'}
          // image={'/img/champion-games.jpeg'}
          company={'Champion Games'}
          title={'Fullstack Engineer'}
          stack={'Rollup, Rush, Nest, Next, React, Vue'}
          // description={
          //   <ul>
          //     <li>
          //       Assumed full responsibility for the React project's inception
          //       and establishment, orchestrating the complete setup from scratch
          //     </li>
          //     <li>
          //       Executed end-to-end development of multiple game features,
          //       encompassing both backend (using Nest.js to implement RESTful
          //       APIs and backend services) and frontend (using Next.js to create
          //       engaging UI features) components
          //     </li>
          //   </ul>
          // }
        />
        <CompanyItem
          date={'June 2019 - Feb 2022'}
          // image={'/img/npaw.jpg'}
          company={'NPAW'}
          title={'Lead Frontend Engineer'}
          stack={'Webpack, React, Redux'}
          // description={
          //   <ul>
          //     <li>
          //       Effectively led and managed a team of 5 software engineers in a
          //       successful full rewrite of the company's main application
          //     </li>
          //     <li>
          //       Designed and implemented an efficient and scalable architecture,
          //       resulting in improved system stability and reduced maintenance
          //       efforts
          //     </li>
          //     <li>UI Design system definition and implementation</li>
          //     <li>
          //       Collaborated with cross-functional teams, including product
          //       managers and designers, to gather requirements, prioritise
          //       features, and ensure timely delivery of high-quality software.
          //     </li>
          //   </ul>
          // }
        />
        <CompanyItem
          date={'2019, 2021'}
          // image={'/img/ironhack.jpeg'}
          company={'Ironhack'}
          title={'Instructor'}
          stack={'HTML, CSS, JS'}
          // description={
          //   <ul>
          //     <li>
          //       Development of my own comprehensive and industry-relevant
          //       curriculum for the Design Implementation Course, ensuring
          //       alignment with current design trends, tools, and best practices
          //     </li>
          //     <li>
          //       Designed and delivered engaging lectures, workshops, and
          //       practical exercises, effectively conveying complex design
          //       implementation concepts and techniques to students of varying
          //       skill levels
          //     </li>
          //   </ul>
          // }
        />
        <CompanyItem
          date={'June 2017 - June 2019'}
          // image={'/img/npaw.jpg'}
          company={'NPAW'}
          title={'Frontend Developer'}
          stack={'Backbone, React'}
          // description={
          //   <ul>
          //     <li>
          //       Utilised React to translate design concepts into functional web
          //       elements employing best practices
          //     </li>
          //   </ul>
          // }
        />
      </div>

      {/* <Link download href={'/cv/Hugo_Corta__Resume.pdf'}>
        Click here to download a PDF version of my resume
      </Link> */}
    </Page>
  )
}

function CompanyItem({
  company,
  title,
  // image,
  date,
  stack
  // description
}) {
  return (
    <Grid
      gap={'sm'}
      mb={'md'}
      gridTemplateColumns={'auto 1fr 200px'}
      alignItems={'baseline'}
    >
      <Stack gap={0}>
        <Typography color={'text.primary'} fontWeight={'bold'}>
          {title}
        </Typography>
        <Typography fontSize={'sm'}>{company}</Typography>
      </Stack>
      <Box borderBottom={'secondary'} width={'100%'} />
      <Stack gap={0}>
        <Typography color={'text.secondary'} fontSize={'sm'}>
          {stack}
        </Typography>
        <Typography color={'text.dimmed'} fontSize={'sm'}>
          {date}
        </Typography>
      </Stack>
    </Grid>
  )
}
