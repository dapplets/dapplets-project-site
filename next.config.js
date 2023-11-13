/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  redirects: async () => [
    {
      source: '/',
      destination: '/home',
      permanent: false,
    },
  ],
  eslint: {
    dirs: ['/'],
  },
};

module.exports = nextConfig;
