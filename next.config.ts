import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.edgardvargas.com" }],
        destination: "https://edgardvargas.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "edgard-vargas-web.vercel.app" }],
        destination: "https://edgardvargas.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
