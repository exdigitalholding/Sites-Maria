import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/somos-especialistas',
        destination: '/servicos-juridicos-tributarios',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/noticias-tributarias',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
