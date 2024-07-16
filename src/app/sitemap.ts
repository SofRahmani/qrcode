import { MetadataRoute } from 'next'

export const host = 'https://qrcode.sofiane-rahmani.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}