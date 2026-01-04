import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Enable Fast Refresh for instant live updates
  experimental: {
    // Turbo mode is already enabled via --turbo flag
  },
  
  // Disable caching during development for instant updates
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    },
  }),
};

export default nextConfig;
