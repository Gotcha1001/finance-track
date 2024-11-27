import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during the build process
  },
  // Other Next.js config options can go here
};

export default nextConfig;
