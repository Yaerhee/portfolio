/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: process.env.NODE_ENV === 'production' ?
    'https://yaerhee.github.io/portfolio' : '',
};

export default nextConfig;
