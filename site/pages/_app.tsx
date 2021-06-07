import { AppProps } from 'next/app'
import '../styles/styles.css'
import 'next-pagination/dist/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
