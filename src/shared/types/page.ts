import { StaticImageData } from 'next/image'

export interface Page {
  title: string
  href: string
  icon: StaticImageData
  description: string
}
