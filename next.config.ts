import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Alte WordPress-URL der Startseite
      { source: "/startseite", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
