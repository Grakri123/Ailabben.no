/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'ailabben.no', '*.vercel.app'],
    },
  },
  images: {
    domains: ['via.placeholder.com'],
  },
  async rewrites() {
    return [
      {
        source: '/blogg/:path*',
        destination: '/blogg/:path*',
      },
    ]
  },
}

export default nextConfig 