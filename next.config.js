/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Valentine',
  assetPrefix: '/Valentine',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

