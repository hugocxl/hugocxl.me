// Components
import { Link, Page } from '@/shared/components'

// Constants
import { HOME } from '@/shared/constants'

// Types
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hugo Corta · Software Craftsman',
  description: 'Welcome to my personal rambling space'
}

export function Home() {
  return (
    <Page title={HOME.title}>
      <p>
        <b>Corta, Hugo.</b> Software craftsman. Unsatisfiably curious.
        Passionate about software design and crafting digital products. Open
        source contributor.
      </p>

      <h2>{'Now'}</h2>
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
      <h2>Radar</h2>
      <p>
        I keep myself up-to-date with the latest trends, innovations, and
        breakthroughs in the dynamic world of software development.{' '}
        <Link
          href={'https://github.com/hugocxl?tab=stars'}
          title='GitHub Stars'
        >
          Check my stars on GitHub
        </Link>
      </p>
      <h2>Connect</h2>
      <p>
        Reach me at{' '}
        <Link
          href={'https://twitter.com/hugocxl'}
          title={'Twitter @hugocxl'}
          target={'_blank'}
        >
          {'@hugocxl'}
        </Link>{' '}
        or{' '}
        <Link
          href={'mailto:corta.hugo@gmail.com'}
          title={'Mail'}
          target={'_blank'}
        >
          {'corta.hugo@gmail.com'}
        </Link>
      </p>
    </Page>
  )
}
