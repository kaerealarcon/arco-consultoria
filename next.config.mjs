/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // obrigatório para export estático
  },
}

export default nextConfig
