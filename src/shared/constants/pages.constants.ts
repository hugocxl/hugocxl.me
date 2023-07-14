// Components
import { Page, Pages } from '@/shared/types'

import IconHome from '../../../public/icons/home.png'
import IconBlog from '../../../public/icons/blog.png'
import IconProjects from '../../../public/icons/projects.png'
import IconStack from '../../../public/icons/stack.png'
import IconRadar from '../../../public/icons/radar.png'
import IconAbout from '../../../public/icons/about.png'

export const HOME: Page = {
  title: 'Home',
  href: '/',
  icon: IconHome,
  description: ''
}

export const WRITING: Page = {
  title: 'Writing',
  href: '/writing',
  icon: IconBlog,
  description: "I write about stuff I'm interested in"
}

export const BLOG: Page = {
  title: 'Blog',
  href: '/blog',
  icon: IconBlog,
  description: "I write about stuff I'm interested in"
}

export const HANDBOOKS: Page = {
  title: 'Handbooks',
  href: '/handbooks',
  icon: IconBlog,
  description: 'My guides on different topics'
}

export const RADAR: Page = {
  title: 'Radar',
  href: '/radar',
  icon: IconRadar,
  description:
    'I keep myself up-to-date with the latest trends, innovations, and breakthroughs in the dynamic world of software development. Here are some of them'
}

export const PROJECTS: Page = {
  title: 'Projects',
  href: '/projects',
  icon: IconProjects,
  description: 'Some personal projects I work on'
}

export const STACK: Page = {
  title: 'Stack',
  href: '/stack',
  icon: IconStack,
  description:
    "A small review about specific pieces of software or hardware I use. This not a static page, it's a living document with everything that I'm using nowadays."
}

export const ABOUT: Page = {
  title: 'About',
  href: '/about',
  icon: IconAbout,
  description: `Little about me. Also, It's not hard to find my contact, just search hugocxl.`
}

export const PAGES: Pages = [HOME, WRITING, PROJECTS, STACK, RADAR, ABOUT]
