/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://urban-smart-grow.github.io/website/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
 exclude: [
  '/privacy', '/impressum'
 ]
};
