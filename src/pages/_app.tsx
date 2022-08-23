// Components
import { Layout, ThemeProvider } from '../components'

// Types
import { AppProps } from 'next/app'
import { FC } from 'react'

// Styles
import 'src/styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
