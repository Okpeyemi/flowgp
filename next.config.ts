import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.flowgp.fr" }],
        destination: "https://flowgp.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
