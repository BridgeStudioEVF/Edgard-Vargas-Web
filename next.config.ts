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
        has: [{ type: "host", value: "edgard-vargas-web.vercel.app" }],
        destination: "https://www.edgardvargas.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
