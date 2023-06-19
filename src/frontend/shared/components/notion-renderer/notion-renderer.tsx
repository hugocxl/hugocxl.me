import { useThemeMode } from '@/frontend/shared/hooks'
import dynamic from 'next/dynamic'
import { NotionRenderer as ReactNotionX } from 'react-notion-x'
import { Tweet } from 'react-tweet'
import Image from 'next/image'
import Link from 'next/link'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(m => m.Code)
)

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(m => m.Collection)
)

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then(m => m.Equation)
)

const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then(m => m.Pdf),
  {
    ssr: false
  }
)

const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then(m => m.Modal),
  {
    ssr: false
  }
)

export const NotionRenderer = ({ recordMap }) => {
  const [mode] = useThemeMode()

  return (
    <ReactNotionX
      darkMode={mode === 'dark'}
      recordMap={recordMap}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
        Tweet,
        nextImage: Image,
        nextLink: Link
      }}
    />
  )
}
