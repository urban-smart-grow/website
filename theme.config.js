const Logo = require('./components/Logo')

// theme.config.js
export default {
  projectLink: 'https://github.com/urban-smart-grow/website', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
  titleSuffix: '',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
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
