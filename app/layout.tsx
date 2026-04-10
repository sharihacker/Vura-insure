import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vura-insure.com'),
  title: {
    default: 'VURA-INSURE | Intelligent Cyber & Tech Insurance Solutions',
    template: '%s | VURA-INSURE',
  },
  description:
    'VURA-INSURE delivers expert cyber liability, D&O, professional indemnity, and AI-agent insurance to forward-thinking businesses. Get instant policy comparisons and quotes.',
  keywords: [
    'cyber insurance', 'cyber liability', 'tech insurance', 'D&O insurance', 'AI liability'
  ],
  authors: [{ name: 'VURA-INSURE Editorial Team' }],
  // ICONS SECTION - MATCHED TO YOUR PUBLIC FOLDER
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'VURA-INSURE',
    url: 'https://vura-insure.com',
    logo: 'https://vura-insure.com/logo.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Fintech Square',
      addressLocality: 'London',
      postalCode: 'EC2V 8RF',
      addressCountry: 'GB',
    },
    telephone: '+44-20-7946-0958',
    email: 'hello@vura-insure.com',
    areaServed: ['GB', 'US', 'EU'],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} mesh-bg min-h-screen antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
