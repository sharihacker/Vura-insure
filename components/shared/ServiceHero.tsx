import Link from 'next/link';
import { ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  icon: LucideIcon;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  primaryCta?: string;
  color: string;
}

export default function ServiceHero({
  icon: Icon,
  category,
  title,
  subtitle,
  description,
  keyPoints,
  primaryCta = 'Get a Quote',
  color,
}: ServiceHeroProps) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label mb-6 inline-flex">{category}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-5">
              {title}
              <br />
              <span className="gradient-text">{subtitle}</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{description}</p>
            <ul className="space-y-3 mb-10">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                {primaryCta} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/#compare" className="btn-ghost">
                Compare Policies
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className={`relative w-72 h-72 rounded-3xl bg-gradient-to-br ${color} p-1 shadow-2xl animate-float`}>
              <div className="w-full h-full rounded-[22px] bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-32 h-32 text-white/90" strokeWidth={1.2} />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass-card flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-blue-700">24/7</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass-card shadow-lg">
                <span className="text-sm font-bold text-slate-800">Lloyd&apos;s Backed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
