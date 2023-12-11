/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',

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
};

module.exports = nextConfig;
