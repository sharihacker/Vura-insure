import Link from 'next/link';
import { ArrowRight, Shield, Lock, Zap, CircleCheck as CheckCircle } from 'lucide-react';

const badges = [
  { icon: CheckCircle, text: 'FCA Regulated' },
  { icon: Shield, text: 'Lloyd\'s Backed' },
  { icon: Lock, text: 'ISO 27001 Certified' },
  { icon: Zap, text: 'Instant Quotes' },
];

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-200/20 via-sky-200/20 to-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            The Next Generation of Insurance Intelligence
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6 animate-fade-in-up delay-100">
            Insurance Built for the
            <br />
            <span className="gradient-text-dark">Digital Age</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            VURA-INSURE protects forward-thinking businesses from cyber threats, executive liability, and the emerging risks of artificial intelligence. Policies designed by technologists, backed by Lloyd&apos;s of London.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300">
            <Link href="/#compare" className="btn-primary text-base px-8 py-4 rounded-2xl">
              Compare Policies <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-ghost text-base px-8 py-4 rounded-2xl">
              Our Approach
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up delay-400">
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-slate-700 font-medium">
                <Icon className="w-3.5 h-3.5 text-blue-600" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up delay-500">
          {[
            { value: '£2.4B+', label: 'Claims Paid Out' },
            { value: '14,200+', label: 'Active Policies' },
            { value: '99.8%', label: 'Claims Satisfaction' },
            { value: '< 48hrs', label: 'Average Quote Time' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-4 text-center hover-lift">
              <div className="text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
