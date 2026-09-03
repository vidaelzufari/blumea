import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', ...site.navigation.map((n) => n.href)].map((path) => ({
    url: site.url + path,
    changeFrequency: 'monthly',
    priority: path ? 0.8 : 1,
  }));
}
