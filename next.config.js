/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'pexels.com',
        port: '',
        pathname: '/images.pexels.com/**',
      },
    ]
  },
};

module.exports = nextConfig;
