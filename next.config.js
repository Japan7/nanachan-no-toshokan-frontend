/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  eslint: {
    dirs: [
      'pages',
      'components',
      'lib',
      'src',
      'cypress',
    ],
  },
};

module.exports = nextConfig;
