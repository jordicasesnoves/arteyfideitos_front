import { GlobalStylesComponent as GlobalStyles } from '../components/GlobalStyles'
import '../styles/index.css'

interface AppProps {
  Component: any
  pageProps: any
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
