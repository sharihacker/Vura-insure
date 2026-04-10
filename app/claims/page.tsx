import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, Clock, Shield, CircleCheck as CheckCircle, ArrowRight, TriangleAlert as AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Claims Process | VURA-INSURE — Report a Cyber Incident',
  description: 'Report a cyber incident and access the VURA-INSURE claims process. Our 4-hour response SLA means expert forensic, legal, and crisis management support is available around the clock.',
};

const steps = [
  { step: '01', icon: Phone, title: 'Call Our Emergency Hotline', desc: 'Call +44 (0)20 7946 0958 immediately. Press 1 for an active incident. A Senior Incident Response Manager will be on the line within 15 minutes, 24/7/365.', urgent: true },
  { step: '02', icon: Shield, title: 'Do Not Restore Systems', desc: 'Resist the urge to immediately restore systems from backup. Digital evidence is critical for the forensic investigation and must be preserved. Our team will guide you through safe containment procedures.' },
  { step: '03', icon: FileText, title: 'Document Everything', desc: 'Begin recording all costs and actions taken from the moment of discovery. Keep a timestamped incident log. Every cost that is not documented is a cost that cannot be claimed.' },
  { step: '04', icon: Clock, title: 'Forensic Team Deployed', desc: 'Within 4 hours, a pre-approved forensic investigator will be engaged and working on your case. Legal counsel is simultaneously briefed on your regulatory notification obligations.' },
  { step: '05', icon: CheckCircle, title: 'Claims Submission', desc: 'Our claims team will work with you to document and submit your claim. We target initial payment within 15 business days of claim submission for uncontested claims.' },
];

export default function ClaimsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">
            <AlertTriangle className="w-3.5 h-3.5" /> Claims & Incident Response
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
            We Are Here When
            <span className="gradient-text"> It Matters Most</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            A cyber incident is not the time to search for contacts or read policy documents. Our dedicated claims team is available 24/7/365, and our 4-hour response SLA means expert help is never far away.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 mb-14 border-2 border-red-200/50 bg-red-50/30">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">Active Incident? Call Now</p>
              <a href="tel:+442079460958" className="text-3xl sm:text-4xl font-black text-slate-900 hover:text-red-600 transition-colors">
                +44 (0)20 7946 0958
              </a>
              <p className="text-sm text-slate-500 mt-1">Available 24 hours, 7 days, 365 days. Press 1 for an active cyber incident.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Live Support
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">The VURA-INSURE Claims Process</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.step} className={`glass-card rounded-2xl p-6 flex items-start gap-5 hover-lift ${step.urgent ? 'border-l-4 border-red-500' : ''}`}>
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${step.urgent ? 'bg-red-600' : 'bg-blue-600'}`}>
                  <step.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Step {step.step}</span>
                    {step.urgent && (
                      <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold">Immediate Action</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { icon: Clock, title: '4-Hour Response SLA', desc: 'Forensic investigator engaged within 4 hours of notification, 24/7.' },
            { icon: Shield, title: '£2.4B+ Claims Paid', desc: 'Our track record of paying claims promptly and fairly is our most important asset.' },
            { icon: CheckCircle, title: '15-Day Initial Payment', desc: 'Uncontested claims receive initial payment within 15 business days of submission.' },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6 text-center hover-lift">
              <div className="inline-flex w-12 h-12 rounded-xl bg-blue-50 items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Not Facing an Incident Right Now?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            The best time to prepare for a cyber incident is before it happens. Review your coverage, update your incident response contacts, and ensure your team knows exactly what to do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Review Your Coverage <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/articles/incident-response-planning" className="btn-ghost">
              Build Your IR Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
