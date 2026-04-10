export interface AdSlot {
  id: string;
  slot: string;
  format: 'auto' | 'rectangle' | 'leaderboard' | 'skyscraper';
  width: number;
  height: number;
  label: string;
  threatFact: string;
}

export const adSlots: Record<string, AdSlot> = {
  HOMEPAGE_TOP: {
    id: 'homepage-top',
    slot: '1234567890',
    format: 'leaderboard',
    width: 728,
    height: 90,
    label: 'Cyber Intelligence Brief',
    threatFact:
      'Ransomware attacks increased by 74% in 2024, with the average downtime for affected businesses reaching 24 days. Financial services firms are targeted 300 times more frequently than other industries.',
  },
  HOMEPAGE_MID: {
    id: 'homepage-mid',
    slot: '2345678901',
    format: 'rectangle',
    width: 336,
    height: 280,
    label: 'Threat Intelligence Digest',
    threatFact:
      'The global cost of cybercrime is projected to reach $10.5 trillion annually by 2025, surpassing the GDP of every nation except the US and China. SMEs account for 43% of all cyber-attack targets.',
  },
  ARTICLE_SIDEBAR: {
    id: 'article-sidebar',
    slot: '3456789012',
    format: 'skyscraper',
    width: 300,
    height: 600,
    label: 'Risk Advisory Card',
    threatFact:
      'Only 23% of UK SMEs have a documented cyber incident response plan. Without one, the average cost of a breach climbs by 38%. GDPR fines alone have exceeded €3 billion since enforcement began in 2018.',
  },
  ARTICLE_BOTTOM: {
    id: 'article-bottom',
    slot: '4567890123',
    format: 'leaderboard',
    width: 728,
    height: 90,
    label: 'Regulatory Update',
    threatFact:
      'The UK Cyber Security Breaches Survey 2024 found that 50% of UK businesses experienced a cyber security breach or attack in the preceding 12 months, with phishing remaining the most common vector.',
  },
  SERVICE_INLINE: {
    id: 'service-inline',
    slot: '5678901234',
    format: 'rectangle',
    width: 320,
    height: 250,
    label: 'Coverage Alert',
    threatFact:
      'AI-powered social engineering attacks are 300% more convincing than traditional phishing, with success rates of up to 92%. Quantum computing is expected to break current RSA-2048 encryption by 2030.',
  },
  GLOBAL_FOOTER: {
    id: 'global-footer',
    slot: '6789012345',
    format: 'leaderboard',
    width: 728,
    height: 90,
    label: 'Security Briefing',
    threatFact:
      'A data breach now takes an average of 194 days to identify and 64 days to contain. Businesses with AI-assisted threat detection reduce this to 74 days — saving an average of $1.76 million per incident.',
  },
};
