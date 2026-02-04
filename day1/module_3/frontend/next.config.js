/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // FastAPI 백엔드 프록시 설정 (나중에 활성화)
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:8000/api/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
