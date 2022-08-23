// Styles
import '../styles/globals.css'

// Components
import { Layout, ThemeProvider } from '../components'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
