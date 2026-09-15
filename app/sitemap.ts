import { MetadataRoute } from 'next'
import { projects } from '../app/data/portfolioData'

export const dynamic = "force-static"; // <--- IN KHAT RO EZAFE KON

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alighelejbeigi.ir'; 

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ]
}