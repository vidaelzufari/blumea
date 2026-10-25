import type { Metadata } from 'next';
import { site } from '@/data/site';
export function pageMetadata(
  title: string,
  description: string,
  path = '',
): Metadata {
  return {
    title,
    description,
    keywords: [
      'digital transformation consultancy Dubai',
      'digital strategy Dubai',
      'product strategy consultancy',
      'fractional digital leadership',
      'digital delivery advisory',
      'venture building Dubai',
    ],
    alternates: { canonical: site.url + path },
    openGraph: {
      title,
      description,
      url: site.url + path,
      siteName: site.brand,
      type: 'website',
      locale: 'en_GB',
    },
    twitter: { card: 'summary', title, description },
  };
}
