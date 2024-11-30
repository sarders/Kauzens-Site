import type { NextConfig } from "next";
const isProduction = process.env.NODE_ENV === "production";

const devPageExtensions = ["wip.tsx", "wip.ts", "wip.js", "wip.jsx"];

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.js",
    "page.jsx",
    ...(isProduction ? [] : devPageExtensions),
  ],
};

export default nextConfig;
