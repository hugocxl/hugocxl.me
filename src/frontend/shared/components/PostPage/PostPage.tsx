// Components
import { NotionRenderer, Page } from '@/frontend/shared/components'
import { PagePostHeader } from './components'

// Types
import { FC } from 'react'
import { ExtendedRecordMap } from 'notion-types'
import { Divider } from '@mantine/core'

export interface PagePostProps {
  title: string
  description: string
  recordMap: ExtendedRecordMap
  cover?: string
}

export const PagePost: FC<PagePostProps> = ({
  recordMap,
  title,
  description,
  cover
}) => {
  return (
    <Page title={title} description={description} showHeader={false}>
      <PagePostHeader title={title} description={description} cover={cover} />
      <NotionRenderer recordMap={recordMap} />

      <Divider />

      <script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5123386198574844'
        crossOrigin='anonymous'
      ></script>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-5123386198574844'
        data-ad-slot='1274320855'
        data-ad-format='auto'
        data-full-width-responsive='true'
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </Page>
  )
}
