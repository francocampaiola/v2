import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      { source: "/", destination: "/es", permanent: false },
      // Rutas de la versión anterior
      {
        source: "/projects/:slug",
        destination: "/es/projects/:slug",
        permanent: true,
      },
      { source: "/projects", destination: "/es#work", permanent: true },
    ];
  },
};

export default nextConfig;
