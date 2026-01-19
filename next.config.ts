import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://pruebas.consultoraprincipado.com/**'),
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // Permite cargar los avatares de ejemplo
      },
      // Asegúrate de que también esté el dominio de tu WordPress aquí
      // { 
      //   protocol: 'https',
      //   hostname: 'tu-dominio-wordpress.com', 
      // },
    ],

  },
};

export default nextConfig;