/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_HOSTNAME,
        pathname: '**',
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
      {
        source: '/google-auth',
        destination: '/?google-auth',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
