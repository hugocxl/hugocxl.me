// Components
import Head from 'next/head'

// Types
import { FC } from 'react'
import { PageHeadProps } from './PageHead.types'

export const PageHead: FC<PageHeadProps> = ({ title, description, date }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='theme-color' content='#000000' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={'hugocorta.com'} />
      <meta name='twitter:creator' content={`@hcorta`} />
      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
        </>
      )}
      {date && (
        <>
          <meta name='date' content={date} />
          <meta property='og:date' content={date} />
        </>
      )}
      <title>{title}</title>
    </Head>
  )
}
