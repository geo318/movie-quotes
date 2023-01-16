/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/quotes/**',
      },
    ],
  },
  i18n,
  async redirects() {
    return [
      {
        source: '/register',
        destination: '/?register',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/?login',
        permanent: true,
      },
      {
        source: '/confirm-email',
        destination: '/?confirm-email',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
