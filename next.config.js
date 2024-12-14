/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Hapus basePath dan assetPrefix karena menggunakan custom domain
};

module.exports = nextConfig;