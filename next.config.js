/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["nftstorage.link"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/artist/unlisted-spaces",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
