// Dependencies
import { QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'

// Components
import { Layout, ThemeProvider } from '@/frontend/shared/components'

// Types
import { AppProps } from 'next/app'
import { FC } from 'react'

// Libs
import { queryClient } from '@/frontend/shared/lib'

// Styles
import '@/frontend/shared/styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default App
