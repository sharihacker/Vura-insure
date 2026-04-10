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
    'cyber insurance',
    'cyber liability insurance',
    'tech insurance',
    'directors and officers insurance',
    'data breach insurance',
    'professional indemnity',
    'AI liability insurance',
    'InsurTech',
    'VURA INSURE',
  ],
  authors: [{ name: 'VURA-INSURE Editorial Team' }],
  creator: 'VURA-INSURE Ltd.',
  publisher: 'VURA-INSURE Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://vura-insure.com',
    siteName: 'VURA-INSURE',
    title: 'VURA-INSURE | Intelligent Cyber & Tech Insurance Solutions',
    description:
      'Expert cyber liability, D&O, and AI-agent insurance for modern businesses. Compare policies in seconds.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VURA-INSURE – Cyber and Tech Insurance Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VuraInsure',
    creator: '@VuraInsure',
    title: 'VURA-INSURE | Intelligent Cyber & Tech Insurance',
    description: 'Compare and secure cyber, D&O, and tech professional indemnity policies in minutes.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://vura-insure.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'VURA-INSURE',
  url: 'https://vura-insure.com',
  logo: 'https://vura-insure.com/logo.svg',
  description:
    'VURA-INSURE is a leading InsurTech platform offering cyber liability, directors & officers, data breach recovery, tech professional indemnity, and AI-agent liability insurance.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1 Fintech Square',
    addressLocality: 'London',
    postalCode: 'EC2V 8RF',
    addressCountry: 'GB',
  },
  telephone: '+44-20-7946-0958',
  email: 'hello@vura-insure.com',
  sameAs: [
    'https://twitter.com/VuraInsure',
    'https://linkedin.com/company/vura-insure',
  ],
  areaServed: ['GB', 'US', 'EU'],
  serviceType: [
    'Cyber Liability Insurance',
    'Directors and Officers Insurance',
    'Data Breach Recovery Insurance',
    'Tech Professional Indemnity',
    'AI-Agent Liability Insurance',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'VURA-INSURE Policy Portfolio',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cyber Liability & Privacy Insurance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Executive D&O Protection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rapid Data Breach Recovery' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tech Professional Indemnity' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Agent Liability Insurance' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} mesh-bg min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
