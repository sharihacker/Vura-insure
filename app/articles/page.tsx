import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import StealthAdWrapper from '@/components/ads/StealthAdWrapper';
import { adSlots } from '@/config/ad-slots';

export const metadata: Metadata = {
  title: 'Expert Insurance & Cyber Risk Insights | VURA-INSURE',
  description:
    'In-depth analysis, expert guidance, and actionable intelligence on cyber risk, insurance regulation, ransomware, GDPR, AI liability, and the evolving threat landscape.',
};

const articles = [
  { href: '/articles/quantum-computing-threat-2026', cat: 'Emerging Threats', catColor: 'bg-blue-50 text-blue-700', title: 'The 2026 Quantum Computing Threat to Encryption', author: 'Dr. James Whitfield', date: 'March 2025', readTime: '12 min' },
  { href: '/articles/sme-gdpr-compliance-costs', cat: 'Regulation', catColor: 'bg-amber-50 text-amber-700', title: 'The Real Cost of SME GDPR Compliance in 2025', author: 'Sarah Chen', date: 'February 2025', readTime: '9 min' },
  { href: '/articles/ransomware-negotiation-strategies', cat: 'Incident Response', catColor: 'bg-red-50 text-red-700', title: "Ransomware Negotiation: What Your Insurer Actually Does", author: "Marcus O'Reilly", date: 'January 2025', readTime: '15 min' },
  { href: '/articles/insurtech-risk-models', cat: 'InsurTech', catColor: 'bg-sky-50 text-sky-700', title: 'How InsurTech Models Calculate Your Cyber Risk Score', author: 'Dr. Priya Sharma', date: 'December 2024', readTime: '11 min' },
  { href: '/articles/ai-liability-gap', cat: 'AI & Technology', catColor: 'bg-blue-50 text-blue-700', title: 'The AI Liability Gap: Why Your Current Policy Fails', author: 'Dr. James Whitfield', date: 'November 2024', readTime: '14 min' },
  { href: '/articles/supply-chain-cyber-risk', cat: 'Supply Chain', catColor: 'bg-emerald-50 text-emerald-700', title: 'Supply Chain Cyber Risk: Your Weakest Link Exposed', author: 'Sarah Chen', date: 'October 2024', readTime: '10 min' },
  { href: '/articles/directors-liability-esg', cat: 'D&O', catColor: 'bg-slate-50 text-slate-700', title: 'ESG Accountability and the New Director Liability Landscape', author: 'Robert Ashworth', date: 'September 2024', readTime: '13 min' },
  { href: '/articles/cyber-insurance-claims-guide', cat: 'Claims', catColor: 'bg-green-50 text-green-700', title: 'The Definitive Guide to Making a Cyber Insurance Claim', author: "Marcus O'Reilly", date: 'August 2024', readTime: '18 min' },
  { href: '/articles/social-engineering-2025', cat: 'Threat Intelligence', catColor: 'bg-red-50 text-red-700', title: 'Social Engineering in 2025: AI-Powered Attacks Explained', author: 'Dr. Priya Sharma', date: 'July 2024', readTime: '10 min' },
  { href: '/articles/zero-trust-insurance-discount', cat: 'Security Controls', catColor: 'bg-sky-50 text-sky-700', title: 'How Zero Trust Architecture Reduces Your Insurance Premium', author: 'Dr. James Whitfield', date: 'June 2024', readTime: '8 min' },
  { href: '/articles/data-protection-officer-guide', cat: 'Regulation', catColor: 'bg-amber-50 text-amber-700', title: "The DPO's Guide to Cyber Insurance in the GDPR Era", author: 'Sarah Chen', date: 'May 2024', readTime: '12 min' },
  { href: '/articles/fintech-cyber-risk-profile', cat: 'FinTech', catColor: 'bg-blue-50 text-blue-700', title: "FinTech's Unique Cyber Risk Profile: What Insurers Look For", author: 'Robert Ashworth', date: 'April 2024', readTime: '9 min' },
  { href: '/articles/incident-response-planning', cat: 'Best Practice', catColor: 'bg-emerald-50 text-emerald-700', title: 'Building an Incident Response Plan That Your Insurer Will Love', author: "Marcus O'Reilly", date: 'March 2024', readTime: '16 min' },
  { href: '/articles/cloud-security-insurance', cat: 'Cloud Security', catColor: 'bg-sky-50 text-sky-700', title: 'Cloud Misconfiguration: The Breach Vector No One Talks About', author: 'Dr. Priya Sharma', date: 'February 2024', readTime: '11 min' },
  { href: '/articles/cyber-insurance-exclusions', cat: 'Policy Analysis', catColor: 'bg-slate-50 text-slate-700', title: "15 Cyber Insurance Exclusions That Will Shock You", author: 'Robert Ashworth', date: 'January 2024', readTime: '14 min' },
];

export default function ArticlesPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">
            <BookOpen className="w-3.5 h-3.5" /> Expert Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4 mt-4">
            Intelligence You Can
            <span className="gradient-text"> Act On</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            In-depth analysis from our team of insurance specialists, cybersecurity experts, and regulatory lawyers. Updated regularly with the latest intelligence.
          </p>
        </div>

        <StealthAdWrapper slot={adSlots.HOMEPAGE_TOP} className="mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a) => (
            <Link key={a.href} href={a.href} className="group glass-card rounded-2xl p-5 hover-lift flex flex-col">
              <span className={`self-start px-3 py-1 rounded-full text-xs font-bold mb-3 ${a.catColor}`}>
                {a.cat}
              </span>
              <h2 className="text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors flex-1">
                {a.title}
              </h2>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-slate-600">{a.author}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" /> {a.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
