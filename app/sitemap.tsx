import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vura-insure.com';

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/claims`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // Service pages
  const services = [
    'cyber-liability',
    'directors-officers',
    'data-breach-recovery',
    'tech-indemnity',
    'ai-agent-liability',
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date('2026-04-10'),
    changeFrequency: 'bi-weekly' as const,
    priority: 0.9,
  }));

  // Article pages
  const articles = [
    'ai-liability-gap',
    'cloud-security-insurance',
    'cyber-insurance-claims-guide',
    'cyber-insurance-exclusions',
    'data-protection-officer-guide',
    'directors-liability-esg',
    'fintech-cyber-risk-profile',
    'incident-response-planning',
    'insurtech-risk-models',
    'quantum-computing-threat-2026',
    'ransomware-negotiation-strategies',
    'sme-gdpr-compliance-costs',
    'social-engineering-2025',
    'supply-chain-cyber-risk',
    'zero-trust-insurance-discount',
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article}`,
    lastModified: new Date('2026-04-10'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [...mainPages, ...servicePages, ...articlePages, ...legalPages];
}
