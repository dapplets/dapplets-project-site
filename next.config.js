/** @type {import('next').NextConfig} */
const withDotenv = require('next-runtime-dotenv');

const nextConfig = withDotenv({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  publicRuntimeConfig: {
    NEXT_PUBLIC_ROBOTS_TXT: process.env.NEXT_PUBLIC_ROBOTS_TXT,
  },
  redirects: async () => [
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
  ],
  eslint: {
    dirs: ['/'],
  },
});

module.exports = nextConfig;
