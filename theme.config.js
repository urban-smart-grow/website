import { useRouter } from 'next/router'
import { Logo } from './components/Logo'

const themeConfig = {
  docsRepositoryBase: 'https://github.com/urban-smart-grow/website/tree/main',
  useNextSeoProps: () => {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Urban Smart Grow',
      }
    }
  },
  darkMode: true,
  logo: (
    <>
      <Logo />
      <span className='ml-2'>Urban Smart Grow</span>
    </>
  ),
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Open Source Indoor Farming Projects' />
      <meta name='og:title' content='Urban Smart Grow' />
    </>
  ),
}

export default themeConfig
