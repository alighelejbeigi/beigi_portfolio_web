/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.119"],
  output: 'export',
  images: {
    unoptimized: true, 
  }
};

export default nextConfig;