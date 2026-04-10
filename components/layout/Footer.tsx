import Link from 'next/link';
import { Shield, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const services = [
  { name: 'Cyber Liability & Privacy', href: '/services/cyber-liability' },
  { name: 'Executive D&O Protection', href: '/services/directors-officers' },
  { name: 'Data Breach Recovery', href: '/services/data-breach-recovery' },
  { name: 'Tech Professional Indemnity', href: '/services/tech-indemnity' },
  { name: 'AI-Agent Liability', href: '/services/ai-agent-liability' },
];

const articles = [
  { name: 'Quantum Computing Threat 2026', href: '/articles/quantum-computing-threat-2026' },
  { name: 'SME GDPR Compliance Costs', href: '/articles/sme-gdpr-compliance-costs' },
  { name: 'Ransomware Negotiations', href: '/articles/ransomware-negotiation-strategies' },
  { name: 'InsurTech Risk Models', href: '/articles/insurtech-risk-models' },
  { name: 'View All Articles', href: '/articles' },
];

const company = [
  { name: 'About VURA-INSURE', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Claims Process', href: '/claims' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-sky-400 shadow-md">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                VURA<span className="text-sky-400">-INSURE</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
              The intelligent InsurTech platform protecting businesses from cyber threats, executive liability, and the risks of artificial intelligence.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-sky-400 flex-shrink-0" />
                <span>1 Fintech Square, London, EC2V 8RF, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+442079460958" className="hover:text-white transition-colors">+44 (0) 20 7946 0958</a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:hello@vura-insure.com" className="hover:text-white transition-colors">hello@vura-insure.com</a>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="https://twitter.com/VuraInsure" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-500/20 border border-slate-700 hover:border-sky-500/40 flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/vura-insure" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/40 flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Insights</h3>
            <ul className="space-y-2.5">
              {articles.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 rounded-xl bg-slate-800 border border-slate-700">
              <p className="text-xs font-semibold text-slate-300 mb-1">Regulated by the FCA</p>
              <p className="text-xs text-slate-500">FCA Register No. 987654. VURA-INSURE Ltd. is authorised and regulated by the Financial Conduct Authority.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} VURA-INSURE Ltd. All rights reserved. Registered in England & Wales, No. 14567890.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">Cookies</Link>
            <Link href="/claims" className="hover:text-slate-300 transition-colors">Claims</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
