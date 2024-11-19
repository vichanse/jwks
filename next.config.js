/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/.well-known/jwks.json',
        destination: '/api/jwks',
      }
    ]
  }
};

module.exports = nextConfig;
