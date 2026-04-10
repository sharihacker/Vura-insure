'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { name: 'Cyber Liability & Privacy', href: '/services/cyber-liability', desc: 'Protect against data breaches and cyber attacks' },
  { name: 'Executive D&O Protection', href: '/services/directors-officers', desc: 'Shield leadership from personal liability' },
  { name: 'Rapid Data Breach Recovery', href: '/services/data-breach-recovery', desc: 'Fast-track remediation and response' },
  { name: 'Tech Professional Indemnity', href: '/services/tech-indemnity', desc: 'Coverage for tech errors and omissions' },
  { name: 'AI-Agent Liability Insurance', href: '/services/ai-agent-liability', desc: 'First-to-market AI autonomous system coverage' },
];

const resources = [
  { name: 'Quantum Computing Threat 2026', href: '/articles/quantum-computing-threat-2026' },
  { name: 'SME GDPR Compliance Costs', href: '/articles/sme-gdpr-compliance-costs' },
  { name: 'Ransomware Negotiation Strategies', href: '/articles/ransomware-negotiation-strategies' },
  { name: 'InsurTech Risk Models Explained', href: '/articles/insurtech-risk-models' },
  { name: 'View All Articles', href: '/articles' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600 to-sky-500 shadow-md group-hover:shadow-blue-400/30 transition-shadow">
              <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              VURA<span className="gradient-text">-INSURE</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 transition-all">
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 glass-card rounded-2xl p-3 shadow-xl animate-fade-in">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group">
                      <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">{s.name}</span>
                      <span className="text-xs text-slate-500">{s.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 transition-all">
                Insights <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass-card rounded-2xl p-3 shadow-xl animate-fade-in">
                  {resources.map((r) => (
                    <Link key={r.href} href={r.href} className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50/60 hover:text-blue-700 transition-colors">
                      {r.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 transition-all">About</Link>
            <Link href="/claims" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 transition-all">Claims</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-ghost text-sm py-2 px-4">Contact</Link>
            <Link href="/#compare" className="btn-primary text-sm py-2 px-5">Get a Quote</Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-nav border-t border-slate-200/50 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-2">Services</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                {s.name}
              </Link>
            ))}
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-2 mt-4">Insights</p>
            {resources.slice(0, -1).map((r) => (
              <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                {r.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Link href="/about" onClick={() => setMobileOpen(false)} className="btn-ghost w-full text-center">About</Link>
              <Link href="/#compare" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center">Get a Quote</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
