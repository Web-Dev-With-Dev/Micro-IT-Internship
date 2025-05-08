/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable static exports
  trailingSlash: true,
};

export default nextConfig;