import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, User } from 'lucide-react';

const articles = [
  {
    href: '/articles/quantum-computing-threat-2026',
    category: 'Emerging Threats',
    title: 'The 2026 Quantum Computing Threat to Encryption',
    excerpt: 'Nation-state quantum computing programs could render RSA-2048 obsolete within 18 months. What every CISO needs to know now — and why cyber insurance is your last line of defence.',
    author: 'Dr. James Whitfield',
    readTime: '12 min read',
    date: 'March 2025',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    href: '/articles/sme-gdpr-compliance-costs',
    category: 'Regulation',
    title: 'The Real Cost of SME GDPR Compliance in 2025',
    excerpt: "Fines have exceeded €3 billion since enforcement began. But it's the hidden costs — legal fees, remediation, customer churn — that devastate unprepared SMEs. Here's how to protect yourself.",
    author: 'Sarah Chen',
    readTime: '9 min read',
    date: 'February 2025',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    href: '/articles/ransomware-negotiation-strategies',
    category: 'Incident Response',
    title: 'Ransomware Negotiation: What Your Insurer Actually Does',
    excerpt: 'When ransomware hits, the 48-hour window is critical. Our incident response team reveals the negotiation frameworks that reduce ransom payments by 65% and recover data in 73% of cases.',
    author: 'Marcus O\'Reilly',
    readTime: '15 min read',
    date: 'January 2025',
    color: 'bg-red-50 text-red-700',
  },
];

export default function ArticlesPreview() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-14">
          <div>
            <span className="section-label mb-4 inline-flex">
              <BookOpen className="w-3.5 h-3.5" /> Expert Insights
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4">
              Intelligence You Can
              <span className="gradient-text"> Act On</span>
            </h2>
          </div>
          <Link href="/articles" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="group glass-card rounded-3xl p-6 hover-lift flex flex-col">
              <span className={`self-start px-3 py-1 rounded-full text-xs font-bold mb-4 ${article.color}`}>
                {article.category}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{article.excerpt}</p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">{article.author}</p>
                    <p className="text-xs text-slate-400">{article.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/articles" className="btn-ghost">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
