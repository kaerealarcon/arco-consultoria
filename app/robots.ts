import { MetadataRoute } from 'next'
import { client } from '@/data/client'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${client.company.website}/sitemap.xml`,
  }
}
