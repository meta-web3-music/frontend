/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nftstorage.link"],
    unoptimized :true
  },
};

module.exports = nextConfig;
