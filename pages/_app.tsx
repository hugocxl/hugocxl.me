// Styles
import '../styles/globals.css'

// Components
import { Layout } from '../components/Layout'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
