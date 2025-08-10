/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/tfs',
  assetPrefix: '/tfs',
  images: {
    unoptimized: true,
    domains: ['github.com'],
  },
}

module.exports = nextConfig