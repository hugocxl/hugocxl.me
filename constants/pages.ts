import {
  VscAccount,
  VscArchive,
  VscFolderLibrary,
  VscSymbolEvent,
  VscOutput,
  VscLibrary,
  VscNote
} from 'react-icons/vsc'
import { AiOutlineUser } from 'react-icons/ai'

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
    icon: VscSymbolEvent
  },
  {
    label: 'About',
    path: '/about',
    icon: AiOutlineUser
  }
]
