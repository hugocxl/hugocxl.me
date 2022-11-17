// Dependencies
import { Analytics } from '@vercel/analytics/react'

// Components
import { AppShell, ThemeProvider } from '@/frontend/shared/components'

// Types
import { AppProps } from 'next/app'
import { FC } from 'react'

// Styles
import '@/frontend/shared/styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default App
