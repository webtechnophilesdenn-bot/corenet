/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental proxy config if not needed
  // experimental: {
  //   proxy: true,
  // },
  
  // Add typescript configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig