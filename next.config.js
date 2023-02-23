/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_HOSTNAME, process.env.NEXT_PUBLIC_GOOGLE_PROVIDER],
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_HOSTNAME,
	port: '',
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
