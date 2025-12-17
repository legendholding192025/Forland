import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.legendholding.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
