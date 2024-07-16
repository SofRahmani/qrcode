import { MetadataRoute } from 'next'
import { host } from './sitemap'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ["*"],
      disallow: '/private/',
    },
    sitemap: `${host}/sitemap.xml`,
  }
}