/** @type {import('next').NextConfig} */
const { patchWebpackConfig } = require('next-global-css');

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
  webpack: (config, options) => {
    if (process.env.CYPRESS === 'true') {
      //Allows importing the global.css file in cypress/support/component.ts
      patchWebpackConfig(config, options);
    }
    return config;
  },
};

module.exports = nextConfig;
