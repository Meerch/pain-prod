/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: '/pain'
  },
  basePath: '/pain',
  assetPrefix: '/pain'
}

module.exports = nextConfig
