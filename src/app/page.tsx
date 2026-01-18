const EXPERIENCE_DATA = [
  {
    date: 'Dec 2023 - Present',
    role: 'Tech Lead',
    company: 'Vitruve',
    description: (
      <>
        Leading product development for{' '}
        <span className='highlight'>sports performance technology</span>.
        Driving{' '}
        <span className='highlight'>technical strategy and team growth</span> in
        a fast-paced startup environment.
      </>
    )
  },
  {
    date: '2023',
    role: 'Lead Frontend Engineer',
    company: 'Sygris',
    description: (
      <>
        Led{' '}
        <span className='highlight'>frontend architecture from scratch</span>{' '}
        for sustainability software.{' '}
        <span className='highlight'>Mentored junior engineers</span> through
        code reviews and technical guidance.
      </>
    )
  },
  {
    date: 'Feb 2022 - Dec 2022',
    role: 'Fullstack Engineer',
    company: 'Champion Games',
    description: (
      <>
        Built <span className='highlight'>React project from inception</span>,
        establishing architecture and tooling. Delivered end-to-end game
        features using <span className='highlight'>Next.js and Nest.js</span>.
      </>
    )
  },
  {
    date: 'Sep 2019 - Feb 2022',
    role: 'Lead Frontend Engineer',
    company: 'NPAW',
    description: (
      <>
        Led a <span className='highlight'>team of 5 engineers</span> in a{' '}
        <span className='highlight'>full rewrite</span> of the company's main
        application. Designed{' '}
        <span className='highlight'>scalable architecture</span> and implemented
        the <span className='highlight'>UI design system</span>.
      </>
    )
  },
  {
    date: '2019, 2021',
    role: 'Instructor',
    company: 'Ironhack',
    description: (
      <>
        Developed and taught the{' '}
        <span className='highlight'>Design Implementation Course</span>{' '}
        curriculum. Delivered lectures and workshops on{' '}
        <span className='highlight'>web development</span> to students of all
        levels.
      </>
    )
  },
  {
    date: 'Sep 2017 - Sep 2019',
    role: 'Frontend Developer',
    company: 'NPAW',
    description: (
      <>
        Developed and maintained{' '}
        <span className='highlight'>UI products using React</span>. Translated
        design concepts into functional web elements following best practices.
      </>
    )
  }
]

const STACK_DATA = [
  {
    name: 'Lofree Flow',
    description: (
      <>
        I love the <span className='highlight'>typing experience</span> this
        keyboard offers
      </>
    )
  },
  {
    name: 'MacBook Air M2',
    description: (
      <>
        The <span className='highlight'>M2 chip</span> just rocks
      </>
    )
  },
  {
    name: 'Apple AirPods Pro',
    description: (
      <>
        I've tried many listening devices and, so far, the{' '}
        <span className='highlight'>best sound quality</span> I could find. The{' '}
        <span className='highlight'>noise cancellation</span> is awesome
      </>
    )
  },
  {
    name: 'Apple iPhone 11 Pro',
    description: (
      <>
        I'm <span className='highlight'>sticking to this phone</span> for many
        years as I don't see much difference with latest models apart from the
        camera
      </>
    )
  },
  {
    name: 'Garmin Tactix Delta',
    description: (
      <>
        My <span className='highlight'>sports watch</span>. It works really well
        for me taking my fitness level into consideration
      </>
    )
  },
  {
    name: 'Kindle Oasis',
    description: (
      <>
        I use it every night.{' '}
        <span className='highlight'>Best reading experience</span> in a digital
        device ever
      </>
    )
  }
]

const OPENSOURCE_DATA = [
  {
    name: '🌐🚀 Terai',
    href: 'https://github.com/teraihq/terai',
    description: (
      <>
        A next-generation <span className='highlight'>i18n framework</span> for
        modern web applications. Provides{' '}
        <span className='highlight'>type-safe translations</span> with automatic
        key extraction and seamless integration with popular frameworks.
      </>
    )
  },
  {
    name: '📜 Git File Timeline',
    href: 'https://github.com/hugocxl/git-file-timeline',
    description: (
      <>
        A <span className='highlight'>VS Code extension</span> that visualizes
        your file's commit history in a{' '}
        <span className='highlight'>navigable timeline</span>. Browse through
        changes with <span className='highlight'>syntax-highlighted diffs</span>
        .
      </>
    )
  },
  {
    name: '📸 React to Image',
    href: 'https://github.com/hugocxl/react-to-image',
    description: (
      <>
        A collection of <span className='highlight'>React hooks</span> that
        convert components into{' '}
        <span className='highlight'>downloadable images</span>. Supports PNG,
        JPEG, and SVG with customizable quality settings.
      </>
    )
  },
  {
    name: '🐳 React ECharts',
    href: 'https://github.com/hugocxl/react-echarts',
    description: (
      <>
        A lightweight React wrapper for{' '}
        <span className='highlight'>Apache ECharts</span>. Offers declarative
        chart components with{' '}
        <span className='highlight'>TypeScript support</span> and{' '}
        <span className='highlight'>optimized re-rendering</span>.
      </>
    )
  },
  {
    name: '💎 Typescript Library Starter',
    href: 'https://github.com/hugocxl/typescript-library-starter',
    description: (
      <>
        A <span className='highlight'>production-ready template</span> for
        building <span className='highlight'>TypeScript libraries</span>.
        Includes modern tooling with ESLint, Prettier, Vitest, and{' '}
        <span className='highlight'>automated releases</span> via GitHub
        Actions.
      </>
    )
  }
]

const CONTACT_DATA = [
  {
    label: 'GitHub',
    handle: '@hugocxl',
    href: 'https://github.com/hugocxl',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z' />
      </svg>
    )
  },
  {
    label: 'Twitter',
    handle: '@hugocxl',
    href: 'https://twitter.com/hugocxl',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    handle: '@hugocxl',
    href: 'https://linkedin.com/in/hugocxl',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    )
  },
  {
    label: 'Email',
    handle: 'corta.hugo@gmail.com',
    href: 'mailto:corta.hugo@gmail.com',
    icon: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
      >
        <rect x='2' y='4' width='20' height='16' rx='2' />
        <path d='M22 7l-10 6L2 7' />
      </svg>
    )
  }
]

function Header() {
  return (
    <header className='hero'>
      <h1 className='hero-title'>
        <span className='light'>Hi, I'm </span>
        <span className='bold'>Hugo.</span>
        <br />
        <span className='light'>I </span>
        <span className='bold'>build </span>
        <span className='light'>digital </span>
        <span className='bold'>products.</span>
      </h1>
      <nav className='hero-social'>
        {CONTACT_DATA.map(item => (
          <a
            key={item.label}
            href={item.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <p className='hero-description'>
        <span className='highlight'>
          I'm a Software Engineer with almost a decade of experience crafting
          digital products—from concept to code. Most folks know me as hugocxl
          online.{' '}
        </span>
      </p>

      <p className='hero-tagline'>
        Currently leading the engineering team at{' '}
        <a href='https://vitruve.fit' target='_blank' rel='noopener noreferrer'>
          @Vitruve
        </a>
      </p>
    </header>
  )
}

function About() {
  return (
    <section>
      <h2>About</h2>
      <p>
        I thrive at the intersection of{' '}
        <span className='highlight'>design and engineering</span>—turning ideas
        into polished experiences that people actually want to use. Whether it's
        leading a team, architecting systems, or getting my hands dirty with
        code, I care deeply about the <span className='highlight'>craft</span>.
      </p>
      <p>
        Away from the keyboard, I'm usually{' '}
        <span className='highlight'>lifting, running, or cycling</span>. I read
        a lot of sci-fi—
        <span className='highlight'>Dune</span>,{' '}
        <span className='highlight'>Foundation</span>, and{' '}
        <span className='highlight'>The Three-Body Problem</span> are favorites.
        Sometimes I pick up my guitar or mess around in Photoshop.
      </p>
    </section>
  )
}

function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <ul>
        {EXPERIENCE_DATA.map(item => (
          <li key={item.date + item.company}>
            <span className='item-title'>
              {item.role} @ {item.company}
            </span>
            <span className='item-description'>{item.description}</span>
            <span className='item-meta'>{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function OpenSource() {
  return (
    <section>
      <h2>Open Source</h2>
      <ul>
        {OPENSOURCE_DATA.map(item => (
          <li key={item.name}>
            <a
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='item-link'
            >
              {item.name}
            </a>
            <p className='item-description'>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Stack() {
  return (
    <section>
      <h2>Stack</h2>
      <ul>
        {STACK_DATA.map(item => (
          <li key={item.name}>
            <span className='item-title'>{item.name}</span>
            <span className='item-description'>{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <section>
      <h2>Connect</h2>
      <ul className='contact-list'>
        {CONTACT_DATA.map(item => (
          <li key={item.label} className='contact-row'>
            <span className='contact-label'>
              <span className='contact-icon'>{item.icon}</span>
              {item.label}
            </span>
            <a href={item.href} target='_blank' rel='noopener noreferrer'>
              {item.handle}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <Header />
      <About />
      <OpenSource />
      <Stack />
      <Experience />
      <Contact />
    </main>
  )
}
