// Components
import { VscLibrary, VscLayers } from 'react-icons/vsc'
import { AiOutlineUser, AiOutlineEdit } from 'react-icons/ai'

export const PAGES = [
  {
    label: 'Blog',
    path: '/blog',
    icon: AiOutlineEdit
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: VscLibrary
  },
  {
    label: 'Stack',
    path: '/stack',
    icon: VscLayers
  },
  {
    label: 'About',
    path: '/about',
    icon: AiOutlineUser
  }
]
