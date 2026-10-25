import type { Metadata } from 'next';
import '@fontsource-variable/instrument-sans';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata(
    'Blumea | Digital Strategy, Product & Transformation',
    site.description,
  ),
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.brand,
  legalName: site.company,
  url: site.url,
  description: site.description,
  areaServed: 'Worldwide',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  knowsAbout: [
    'Digital transformation',
    'Product strategy',
    'Digital delivery',
    'Fractional digital leadership',
    'Venture building',
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
