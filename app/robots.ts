import { MetadataRoute } from 'next'

export const dynamic = "force-static"; // <--- IN KHAT RO EZAFE KON

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://alighelejbeigi.ir'; 
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}