/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies:
      process.env.NODE_ENV === 'production' ? [{ userAgent: '*', allow: '/' }] : [{ userAgent: '*', disallow: '/' }]
  }
};

module.exports = config;
