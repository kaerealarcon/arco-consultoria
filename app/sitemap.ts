import { MetadataRoute } from 'next'
import { client } from '@/data/client'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: client.company.website,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
