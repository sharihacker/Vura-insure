import Link from 'next/link';
import { Shield, Users, RefreshCw, Code, Bot, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Cyber Liability & Privacy',
    desc: 'Comprehensive first and third-party cyber coverage for data breaches, ransomware, and network intrusions. Backed by real-time threat intelligence and a 24/7 incident response team.',
    href: '/services/cyber-liability',
    color: 'from-blue-500 to-sky-400',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    tags: ['GDPR', 'Ransomware', 'Data Breach'],
  },
  {
    icon: Users,
    title: 'Executive D&O Protection',
    desc: 'Protect your board from personal financial loss in the event of wrongful act allegations, securities claims, and regulatory investigations. Coverage extends to outside directors.',
    href: '/services/directors-officers',
    color: 'from-slate-700 to-slate-500',
    bg: 'bg-slate-50',
    iconColor: 'text-slate-600',
    tags: ['FCA', 'Securities', 'Employment'],
  },
  {
    icon: RefreshCw,
    title: 'Rapid Data Breach Recovery',
    desc: 'When the worst happens, speed matters. Our breach recovery policy includes forensic investigation, regulatory notification, credit monitoring, and PR crisis management within 4 hours.',
    href: '/services/data-breach-recovery',
    color: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    tags: ['Forensics', 'Notification', 'PR Crisis'],
  },
  {
    icon: Code,
    title: 'Tech Professional Indemnity',
    desc: 'Purpose-built coverage for software developers, IT consultants, SaaS providers, and technology firms. Covers errors and omissions, intellectual property disputes, and contract failures.',
    href: '/services/tech-indemnity',
    color: 'from-sky-600 to-cyan-400',
    bg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    tags: ['SaaS', 'E&O', 'IP Disputes'],
  },
  {
    icon: Bot,
    title: 'AI-Agent Liability Insurance',
    desc: "The world's first commercial insurance product specifically designed for businesses deploying autonomous AI agents. Covers hallucinations, algorithmic bias, model failures, and cascading damages.",
    href: '/services/ai-agent-liability',
    color: 'from-blue-600 to-sky-500',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-700',
    tags: ['Autonomous AI', 'Algorithmic Bias', 'Model Failure'],
    featured: true,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">
            <Shield className="w-3.5 h-3.5" /> Coverage Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Five Pillars of
            <span className="gradient-text"> Digital Protection</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Each policy is crafted in partnership with specialist underwriters at Lloyd&apos;s of London and reviewed quarterly against the evolving threat landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group glass-card rounded-3xl p-6 hover-lift relative overflow-hidden ${service.featured ? 'lg:col-span-2' : ''}`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold">
                  Industry First
                </div>
              )}
              <div className={`inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-5 shadow-md`}>
                <service.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag) => (
                  <span key={tag} className={`px-2.5 py-1 rounded-full text-xs font-semibold ${service.bg} ${service.iconColor}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
