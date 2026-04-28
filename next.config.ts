import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "preview-chat-495b6ada-0c70-4d3a-b6da-a49c1f6ee17c.space-z.ai",
    "https://preview-chat-495b6ada-0c70-4d3a-b6da-a49c1f6ee17c.space-z.ai",
    "http://preview-chat-495b6ada-0c70-4d3a-b6da-a49c1f6ee17c.space-z.ai",
  ],
};

export default nextConfig;
