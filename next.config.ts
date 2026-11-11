import type { NextConfig } from "next";

// Static export so the site can be hosted free on GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
