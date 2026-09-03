import type { Metadata } from 'next';
import '@fontsource-variable/instrument-sans';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata(
    'Blumea | Digital Strategy, Product & Transformation',
    site.description,
  ),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
