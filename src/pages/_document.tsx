// Dependencies
import * as React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
          <Script
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script strategy='afterInteractive'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </body>
      </Html>
    )
  }
}

export default Document
