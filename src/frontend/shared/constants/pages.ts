// Components
import { VscLibrary, VscLayers } from 'react-icons/vsc'
import { AiOutlineUser, AiOutlineEdit } from 'react-icons/ai'

export const PAGES = [
  {
    label: 'Blog',
    href: '/blog',
    icon: AiOutlineEdit
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: VscLibrary
  },
  {
    label: 'Stack',
    href: '/stack',
    icon: VscLayers
  },
  {
    label: 'About',
    href: '/about',
    icon: AiOutlineUser
  }
]
