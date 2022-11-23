import { Logo } from './components/Logo'

const themeConfig = {
  projectLink: 'https://github.com/urban-smart-grow/website',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: '',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()}.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: <Logo />,
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Open Source Indoor Farming Projects' />
      <meta name='og:title' content='Urban Smart Grow' />
    </>
  ),
}

export default themeConfig
