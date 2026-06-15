/** @type {import('next').NextConfig} */

// Em GitHub Pages (sem domínio próprio), o site fica em /arco-consultoria/
// e precisa do basePath. Com domínio próprio: remova as duas linhas abaixo.
const basePath = process.env.BASE_PATH ?? ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
}

export default nextConfig
