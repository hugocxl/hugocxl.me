// Components
import { VscLibrary, VscLayers, VscArchive } from 'react-icons/vsc'
import { AiOutlineUser, AiOutlineEdit } from 'react-icons/ai'

export const BLOG = {
  title: 'Blog',
  href: '/blog',
  icon: AiOutlineEdit,
  description: `I write about stuff I'm interested in.`
}

export const HANDBOOKS = {
  title: 'Handbooks',
  href: '/handbooks',
  icon: VscLibrary,
  description: 'My guides on diverse topics.'
}

export const RESOURCES = {
  title: 'Resources',
  href: '/resources',
  icon: VscArchive,
  description: 'Some useful online resources.'
}

export const STACK = {
  title: 'Stack',
  href: '/stack',
  icon: VscLayers,
  description: `Here's what tech I'm currently using for coding and working.`
}

export const ABOUT = {
  title: 'About',
  href: '/about',
  icon: AiOutlineUser,
  description: `I'm a software engineer based in Madrid.`
}

export const PAGES = [BLOG, HANDBOOKS, RESOURCES, STACK, ABOUT]
