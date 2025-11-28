/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
}

module.exports = nextConfig
