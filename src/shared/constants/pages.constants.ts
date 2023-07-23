// Components
import { Page, Pages } from '@/shared/types'

export const HOME: Page = {
  title: 'Home',
  href: '/',
  description: ''
}

export const WRITING: Page = {
  title: 'Writing',
  href: '/writing',
  description: "I write about stuff I'm interested in"
}

export const BLOG: Page = {
  title: 'Blog',
  href: '/blog',
  description: "I write about stuff I'm interested in"
}

export const HANDBOOKS: Page = {
  title: 'Handbooks',
  href: '/handbooks',
  description: 'My guides on different topics'
}

export const PROJECTS: Page = {
  title: 'Projects',
  href: '/projects',
  description: 'Some personal projects I work on'
}

export const STACK: Page = {
  title: 'Stack',
  href: '/stack',
  description:
    "A small review about specific pieces of software or hardware I use. This not a static page, it's a living document with everything that I'm using nowadays."
}

export const PHOTOS: Page = {
  title: 'Photos',
  href: '/photos',
  description: `Some pics`
}

export const ABOUT: Page = {
  title: 'About',
  href: '/about',
  description: `Little about me. Also, It's not hard to find my contact, just search hugocxl.`
}

export const PAGES: Pages = [HOME, WRITING, PROJECTS, PHOTOS, STACK, ABOUT]
