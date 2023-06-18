// Components
import { VscLibrary, VscLayers, VscArchive } from 'react-icons/vsc'
import { AiOutlineUser, AiOutlineEdit } from 'react-icons/ai'
import { Page, Pages } from '@/shared/types'
import { IconRadar } from '@tabler/icons'

export const BLOG: Page = {
  title: 'Blog',
  href: '/blog',
  icon: AiOutlineEdit,
  description: "I write about stuff I'm interested in"
}

export const HANDBOOKS: Page = {
  title: 'Handbooks',
  href: '/handbooks',
  icon: VscLibrary,
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
  icon: VscLayers,
  description: 'Some personal projects I work on'
}

export const STACK: Page = {
  title: 'Stack',
  href: '/stack',
  icon: VscArchive,
  description:
    "A small review about specific pieces of software or hardware I use. This not a static page, it's a living document with everything that I'm using nowadays."
}

export const BOOKS: Page = {
  title: 'Books',
  href: '/books',
  icon: VscArchive,
  description: `Here are some of my favorite books I've read or have on my bookshelf`
}

export const RESOURCES: Page = {
  title: 'Resources',
  href: '/resources',
  icon: VscArchive,
  description: 'Some useful online resources'
}
export const ABOUT: Page = {
  title: 'About',
  href: '/about',
  icon: AiOutlineUser,
  description: `Here's some additional information about me.`
}

export const PAGES: Pages = [
  BLOG,
  HANDBOOKS,
  PROJECTS,
  STACK,
  RADAR,
  RESOURCES,
  ABOUT
]
