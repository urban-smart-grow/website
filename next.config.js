/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/website',
  redirects: async () => [
    {
      source: '/',
      destination: '/website',
      basePath: false,
      permanent: false,
    },
  ],
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})
module.exports = withNextra(nextConfig)
