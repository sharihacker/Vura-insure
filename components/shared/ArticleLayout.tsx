import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import ExpertAuthorBox from '@/components/shared/ExpertAuthorBox';
import StealthAdWrapper from '@/components/ads/StealthAdWrapper';
import { adSlots } from '@/config/ad-slots';

interface ArticleLayoutProps {
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  author: { name: string; title: string; bio: string; credentials: string[] };
  date: string;
  readTime: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  category, categoryColor, title, excerpt, author, date, readTime, children,
}: ArticleLayoutProps) {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <article className="flex-1 min-w-0">
            <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            <div className="mb-8">
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-4 ${categoryColor}`}>
                {category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                {title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 border-t border-b border-slate-100 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-medium text-slate-700">{author.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {readTime}
                </div>
              </div>
            </div>

            <div className="article-body">{children}</div>
            <ExpertAuthorBox {...author} />
          </article>

          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-6">
            <div className="lg:sticky lg:top-24 space-y-5">
              <StealthAdWrapper slot={adSlots.ARTICLE_SIDEBAR} />

              <div className="glass-card rounded-2xl p-5">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Related Services</h3>
                <div className="space-y-2">
                  {[
                    ['Cyber Liability Insurance', '/services/cyber-liability'],
                    ['D&O Protection', '/services/directors-officers'],
                    ['Data Breach Recovery', '/services/data-breach-recovery'],
                    ['Tech Professional Indemnity', '/services/tech-indemnity'],
                    ['AI-Agent Liability', '/services/ai-agent-liability'],
                  ].map(([name, href]) => (
                    <Link key={href} href={href} className="flex items-center gap-2 py-1.5 text-sm text-slate-600 hover:text-blue-700 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Get Expert Advice</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">Speak to a specialist about coverage for the risks discussed in this article.</p>
                <Link href="/contact" className="btn-primary w-full text-center text-sm py-2.5">
                  Request a Consultation
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
