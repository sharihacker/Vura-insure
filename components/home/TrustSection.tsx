import { Award, Star, Clock, Headphones as HeadphonesIcon } from 'lucide-react';

const trustItems = [
  { icon: Award, title: "Lloyd's of London Backed", desc: "All VURA-INSURE policies are underwritten by syndicates at Lloyd's of London, the world's leading specialist insurance market, established 1688." },
  { icon: Star, title: '4.9/5 Customer Rating', desc: 'Over 14,200 business clients rate our service 4.9 out of 5, with 98% saying they would recommend VURA-INSURE to a peer or colleague.' },
  { icon: Clock, title: '48-Hour Policy Issuance', desc: 'From quote to bound policy in under 48 hours. Our AI-powered underwriting engine processes risk data in real time, eliminating weeks of delays.' },
  { icon: HeadphonesIcon, title: '24/7 Incident Response', desc: 'A dedicated cyber incident response team is on call around the clock, 365 days a year, ready to deploy within 4 hours of a confirmed breach event.' },
];

const logos = ['Barclays', 'HSBC', 'Deloitte', 'PwC', 'Clifford Chance', 'Linklaters', 'AstraZeneca', 'ARM Holdings'];

export default function TrustSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">
            <Award className="w-3.5 h-3.5" /> Why VURA-INSURE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Trusted by the UK&apos;s Most
            <span className="gradient-text"> Innovative Businesses</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {trustItems.map((item) => (
            <div key={item.title} className="glass-card rounded-3xl p-6 hover-lift text-center">
              <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 items-center justify-center mb-4 shadow-md">
                <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by leading UK organisations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {logos.map((logo) => (
              <div key={logo} className="flex items-center justify-center">
                <span className="text-sm font-bold text-slate-300 text-center">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
