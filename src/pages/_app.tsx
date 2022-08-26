// Dependencies
import { QueryClientProvider } from '@tanstack/react-query'

// Components
import { Layout, ThemeProvider } from '../components'

// Types
import { AppProps } from 'next/app'
import { FC } from 'react'

// Libs
import { queryClient } from 'src/lib'

// Styles
import 'src/styles/globals.css'

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
