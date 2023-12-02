// Components
import { Flex, Page, Stack, Typography } from '@/shared/components'

// Types
import { Metadata } from 'next'

// Constants
import { WORK } from '@/shared/constants'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: WORK.title,
  description: WORK.description
}

function WorkItem({
  position,
  company,
  description,
  date,
  skills
}: {
  position: string
  company: string
  description: ReactNode
  date: string
  skills: string[]
}) {
  return (
    <Stack borderTop={'primary'} py={'md'}>
      <Typography textStyle={'lg'} fontWeight={'bolder'}>
        {position}
      </Typography>
      <Flex color={'text.dimmed'} gap={'sm'} mb={'md'}>
        <span>{company},</span>
        <span>{date}</span>
      </Flex>
      <p>{description}</p>
      <Typography textStyle={'sm'} color={'text.dimmed'}>
        {skills}
      </Typography>
    </Stack>
  )
}

export function WorkPage() {
  return (
    <Page {...WORK}>
      <Stack>
        <WorkItem
          date={'Jun 2023 - Dec 2023'}
          skills={['Nest', 'Next', 'Graphql']}
          position={'FullStack Engineer'}
          company={'InCloudForever'}
          description={
            <>
              <p>
                In my role, I played a pivotal role in spearheading the
                comprehensive reengineering of backend features, focusing on
                optimizing performance and functionality. This involved
                meticulous analysis and strategic implementation to ensure a
                seamless transition that significantly improved overall system
                efficiency.
              </p>
              <p>
                Additionally, I took charge of leading the successful migration
                to the latest version of Next.js, a move that not only kept our
                technology stack up-to-date but also resulted in tangible
                enhancements to project efficiency and performance.{' '}
              </p>
              <p>
                On the frontend, I implemented crucial organizational
                improvements that transformed the project's structure, making it
                more scalable and maintainable. This initiative not only
                streamlined workflows but also contributed to long-term
                sustainability by introducing best practices and standards.
                Through these efforts, I demonstrated a commitment to driving
                technological innovation and organizational efficiency, ensuring
                our projects not only meet but exceed industry standards.
              </p>
            </>
          }
        />
        <WorkItem
          date={'Jan 2023 - Jun 2023'}
          skills={['Rollup', 'Nx', 'Vite', 'Next', 'React']}
          position={'Lead Frontend Engineer'}
          company={'Sygris'}
          description={
            <>
              <p>
                Taking on the role of spearheading the frontend-side project
                from its inception, I assumed full responsibility for its
                establishment, orchestrating the complete setup of various
                repositories from scratch. This involved meticulous planning,
                from the initial ideation phase to the implementation of a
                robust infrastructure, ensuring a solid foundation for the
                project's success.
              </p>
              <p>
                In addition to my responsibilities as a project lead, I actively
                contributed to the growth and skill development of our team. I
                took on the role of a mentor to junior engineers, conducting
                regular and constructive code reviews. Through these sessions, I
                provided valuable technical guidance, fostering an environment
                of continuous improvement. The result was a tangible enhancement
                in overall code quality and team productivity. By investing in
                the professional development of my colleagues, I aimed not only
                to meet project objectives but to cultivate a collaborative and
                high-performing team.
              </p>
            </>
          }
        />
        <WorkItem
          date={'Feb 2022 - Oct 2022'}
          skills={['Rollup', 'Rush', 'Nest', 'Next', 'React', 'Vue']}
          position={'FullStack Engineer'}
          company={'Champion Games'}
          description={
            <>
              <p>
                As the driving force behind the React project, I took on the
                significant responsibility of its inception and establishment,
                orchestrating a complete setup from scratch. This encompassed
                every aspect of the project lifecycle, from initial ideation to
                the implementation of a robust infrastructure, ensuring a solid
                foundation for success.
              </p>
              <p>
                In addition to overseeing the project's establishment, I
                actively contributed to its development by executing end-to-end
                implementation of multiple game features. This involved a
                comprehensive approach, including backend development using
                Nest.js to implement RESTful APIs and backend services, as well
                as frontend development using Next.js to craft engaging UI
                features. This dual-focus approach allowed me to ensure seamless
                integration and a cohesive user experience across the entire
                application. Through these efforts, I not only demonstrated
                technical proficiency but also a commitment to delivering a
                holistic and high-quality gaming experience to users.
              </p>
            </>
          }
        />
        <WorkItem
          date={'June 2019 - Feb 2022'}
          skills={['Webpack', 'React', 'Redux']}
          position={'Lead Frontend Engineer'}
          company={'NPAW'}
          description={
            <>
              <p>
                In my role as a team leader, I successfully led and managed a
                team of 5 software engineers through a transformative project —
                the full rewrite of the company's main applications. This
                endeavor required not only technical expertise but also
                effective coordination and leadership to ensure the project's
                success.
              </p>
              <p>
                Central to the project's accomplishment was the design and
                implementation of an efficient and scalable architecture. This
                strategic decision not only bolstered the system's stability but
                also significantly reduced maintenance efforts, ensuring a more
                sustainable and resilient software infrastructure.
              </p>
              <p>
                Additionally, I played a key role in the development of a UI
                Design system, contributing to the creation and implementation
                of a cohesive and visually appealing user interface. This system
                not only enhanced the overall user experience but also provided
                a standardized framework for future development, ensuring
                consistency and efficiency.
              </p>
              <p>
                Moreover, my responsibilities extended beyond technical aspects
                to effective collaboration with cross-functional teams. I
                actively engaged with product managers and designers,
                participating in requirements gathering sessions and feature
                prioritization. This collaborative approach facilitated the
                timely delivery of high-quality software, emphasizing the
                importance of communication and teamwork in achieving project
                goals.
              </p>
            </>
          }
        />
        <WorkItem
          date={'June 2017 - June 2019'}
          skills={['React', 'Backbone']}
          position={'Frontend Developer'}
          company={'NPAW'}
          description={
            <>
              <p>
                I specialize in translating design concepts into functional web
                elements, utilizing industry best practices. By seamlessly
                blending creative vision with technical expertise, I bring to
                life the visual concepts crafted by designers, ensuring a
                harmonious and effective implementation on the web. My approach
                is rooted in adhering to established best practices,
                guaranteeing that the end result not only meets aesthetic
                standards but also aligns with optimal functionality and
                usability. This commitment to excellence ensures that the web
                elements I create are not only visually compelling but also
                adhere to the highest standards of performance and user
                experience.
              </p>
            </>
          }
        />
      </Stack>
    </Page>
  )
}
