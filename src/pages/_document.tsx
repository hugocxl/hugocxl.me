// Dependencies
import * as React from 'react'
import { createGetInitialProps } from '@mantine/next'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

// Constants
const DOCUMENT_TITLE = 'Hugo Corta'

const getInitialProps = createGetInitialProps()
class Document extends NextDocument {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta property='og:site_name' content={DOCUMENT_TITLE} />
          <meta property='og:title' content={DOCUMENT_TITLE} />
          <link rel='shortcut icon' href='/favicon.png' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5123386198574844'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
