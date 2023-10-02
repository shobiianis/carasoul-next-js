/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kasandbox.org',
        port: '',
        pathname: '/programming-images/avatars/**',
      },
    ],
  },

}

module.exports = nextConfig
