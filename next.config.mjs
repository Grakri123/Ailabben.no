/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'ailabben.no', '*.vercel.app'],
    },
  },
  images: {
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
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