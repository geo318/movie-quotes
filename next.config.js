/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: 'http://localhost:8000/api',
    BASE_URL: 'http://localhost:8000',
  },
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
    ];
  },
};

module.exports = nextConfig;
