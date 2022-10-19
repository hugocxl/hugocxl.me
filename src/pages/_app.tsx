// Dependencies
import { QueryClientProvider } from '@tanstack/react-query'

// Components
import { Layout, ThemeProvider } from '@/shared/components'

// Types
import { AppProps } from 'next/app'
import { FC } from 'react'

// Libs
import { queryClient } from '@/shared/lib'

// Styles
import '@/shared/styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
