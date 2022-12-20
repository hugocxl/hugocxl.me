// Dependencies
import { Analytics } from '@vercel/analytics/react'

// Components
import {
  AppShell,
  SpotlightProvider,
  ThemeProvider
} from '@/frontend/shared/components'

// Types
import { AppProps } from 'next/app'
import { FC } from 'react'

// Styles
import '@/frontend/shared/styles/globals.css'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <SpotlightProvider>
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </SpotlightProvider>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default App
