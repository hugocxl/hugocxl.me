// Dependencies
import * as React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const DOCUMENT_TITLE = '@hcorta 🚀 '

class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta property='og:site_name' content={DOCUMENT_TITLE} />
          <meta property='og:title' content={DOCUMENT_TITLE} />
          {/* <title>{DOCUMENT_TITLE}</title> */}
          <link rel='shortcut icon' href='/favicon.png' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicon-96x96.png'
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src='https://cdn.splitbee.io/sb.js'></script>
        </body>
      </Html>
    )
  }
}

export default Document
