import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile in the home dir
  // otherwise confuses Turbopack's root inference).
  turbopack: { root: path.resolve() },
  // Real client photography can be dropped into `/public` or served from a CDN.
  // If you later switch to remote images, whitelist the host here (Unsplash shown
  // as an example so next/image works out of the box for placeholders).
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
