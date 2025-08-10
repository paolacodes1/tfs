/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // basePath: '/tfs',      // Commented out for local development
  // assetPrefix: '/tfs',   // Commented out for local development
  images: {
    unoptimized: true,
    domains: ['github.com'],
  },
}

module.exports = nextConfig