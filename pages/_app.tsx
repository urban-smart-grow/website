import '../styles/globals.css'
import 'nextra-theme-docs/style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <script
        type='text/javascript'
        async
        id='cookiebanner'
        src='https://cdn.jsdelivr.net/gh/dobarkod/cookie-banner@1.2.2/dist/cookiebanner.min.js'></script>
    </>
  )
}
