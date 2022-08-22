import {
  VscAccount,
  VscArchive,
  VscFolderLibrary,
  VscRocket,
  VscOutput,
  VscLibrary,
  VscNote
} from 'react-icons/vsc'

export const PAGES = [
  {
    label: 'Blog',
    path: '/blog',
    icon: VscNote
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: VscLibrary
  },
  {
    label: 'Stack',
    path: '/stack',
    icon: VscRocket
  },
  {
    label: 'About',
    path: '/about',
    icon: VscAccount
  }
]
