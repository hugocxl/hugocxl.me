// Components
import { VscLibrary, VscLayers, VscArchive } from 'react-icons/vsc'
import { AiOutlineUser, AiOutlineEdit } from 'react-icons/ai'
import { Page, Pages } from '@/frontend/shared/types'

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

export const STACK: Page = {
  title: 'Stack',
  href: '/stack',
  icon: VscLayers,
  description: "What tech I'm currently using"
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
  description: ''
}

export const PAGES: Pages = [BLOG, HANDBOOKS, STACK, RESOURCES, ABOUT]
