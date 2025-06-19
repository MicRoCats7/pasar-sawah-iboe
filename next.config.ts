import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'warung.houselab.my.id',
        pathname: '/media/images/menu/**',
      },
    ],
  },
};

export default nextConfig;
