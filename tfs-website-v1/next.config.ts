import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/tfs',
  assetPrefix: '/tfs',
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  experimental: {
    // Disable any experimental features that require server
  },
};

export default nextConfig;
