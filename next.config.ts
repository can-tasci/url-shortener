import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/redirect',
          destination: '/api/redirect',
        },
      ],
    };
  },
};

export default nextConfig;
