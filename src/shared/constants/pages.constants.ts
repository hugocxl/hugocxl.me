// Components
import { Page, Pages } from '@/shared/types'

export const HOME: Page = {
  title: 'Hugo Corta',
  href: '/',
  description: ''
}

export const WRITING: Page = {
  title: 'writing',
  href: '/writing',
  description: "I write about stuff I'm interested in"
}

export const BLOG: Page = {
  title: 'blog',
  href: '/blog',
  description: "I write about stuff I'm interested in"
}

export const WORK: Page = {
  title: 'work',
  href: '/work',
  description: 'My work experience'
}

export const HANDBOOKS: Page = {
  title: 'handbooks',
  href: '/handbooks',
  description: 'My guides on different topics'
}

export const PROJECTS: Page = {
  title: 'projects',
  href: '/projects',
  description: 'Some personal projects I work on'
}

export const STACK: Page = {
  title: 'stack',
  href: '/stack',
  description:
    'A small review about specific pieces of software or hardware I use'
}

export const ABOUT: Page = {
  title: 'about',
  href: '/about',
  description: `Little about me. Also, It's not hard to find my contact, just search hugocxl`
}

export const PAGES: Pages = [WRITING, PROJECTS, STACK, WORK, ABOUT]
