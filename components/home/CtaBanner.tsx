import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.2)_0%,transparent_70%)]" />
          <div className="absolute top-4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-4 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-8">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              Get Protected Today
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Your Next Breach Is
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                A Question of When
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Don&apos;t wait for an incident to discover your coverage gaps. Our experts will assess your risk profile and design a bespoke policy within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base px-10 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600">
                Request a Free Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/#compare" className="px-10 py-4 rounded-2xl text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-all">
                Compare Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
