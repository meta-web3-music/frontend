/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    domains: ["nftstorage.link"],
  },
};

module.exports = nextConfig;
