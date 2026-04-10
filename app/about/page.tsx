import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Award, TrendingUp, CircleCheck as CheckCircle, ArrowRight, User, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About VURA-INSURE | Our Mission, Team & Values',
  description: "Meet the team behind the UK's leading cyber and tech insurance platform. Former regulators, GCHQ specialists, Lloyd's underwriters, and leading legal minds united by a single mission.",
};

const team = [
  {
    name: 'Dr. James Whitfield',
    role: 'Founder & Chief Executive Officer',
    bio: "Dr. Whitfield founded VURA-INSURE in 2018 after 18 years at GCHQ, where he served as Technical Director of the National Cryptographic Standards Programme. Frustrated by the widening gap between the cyber threat landscape he observed at GCHQ and the insurance products available to businesses, he built VURA-INSURE from the ground up as a genuinely intelligence-led insurance platform.",
    creds: ['Former GCHQ Technical Director', 'PhD Cambridge (Mathematics)', 'Fellow of the IET', 'NCSC Advisory Board'],
    gradient: 'from-blue-600 to-sky-400',
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Regulatory Officer',
    bio: "Sarah Chen spent seven years as an Investigation Officer at the UK Information Commissioner's Office, leading enforcement cases against some of the UK's largest organisations. She joined VURA-INSURE to build a regulatory intelligence capability that helps clients navigate the increasingly complex data protection landscape.",
    creds: ['Former ICO Investigation Officer', 'CIPM & CIPP/E (IAPP)', 'Law Society Member', 'GDPR Implementation Lead'],
    gradient: 'from-slate-700 to-slate-500',
  },
  {
    name: "Marcus O'Reilly",
    role: 'Head of Claims & Incident Response',
    bio: "Marcus spent 12 years leading major cyber incident response for the NCSC, personally managing over 140 significant ransomware incidents. He built VURA-INSURE's claims team from scratch, creating the UK's fastest and most experienced cyber claims operation.",
    creds: ['Former NCSC Lead Responder', 'CREST Certified', 'GIAC GCIH', '500+ Claims Managed'],
    gradient: 'from-red-600 to-orange-500',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Actuary',
    bio: "Dr. Sharma previously served as Head of Quantitative Risk at Lloyd's of London, where she developed some of the market's first quantitative models for cyber risk pricing. At VURA-INSURE, she has built a real-time risk assessment engine that allows continuous dynamic pricing — a capability unique in the UK cyber insurance market.",
    creds: ['FIA (Fellow, IFoA)', 'Former Head of Quantitative Risk, Lloyd\'s', 'PhD Statistics, Imperial College', 'CERA'],
    gradient: 'from-emerald-600 to-teal-400',
  },
  {
    name: 'Robert Ashworth',
    role: 'Director of D&O & Corporate Coverage',
    bio: "Robert spent 20 years as a partner at Clifford Chance LLP, specialising in D&O coverage disputes, securities litigation, and corporate governance. He has acted in some of the UK's largest D&O claims and now leads VURA-INSURE's corporate and executive liability practice.",
    creds: ['Former Partner, Clifford Chance', 'LLB, London School of Economics', 'D&O Coverage Specialist', 'ICLR Contributor'],
    gradient: 'from-sky-600 to-blue-400',
  },
  {
    name: 'Dr. Yemi Adebayo',
    role: 'Head of AI Risk & Emerging Technology',
    bio: "Dr. Adebayo is a computer scientist and former researcher at the Alan Turing Institute, where she led research into the governance and accountability of AI systems. She designed VURA-INSURE's AI-Agent Liability product — the first commercially available insurance product specifically designed for autonomous AI systems.",
    creds: ['Former Alan Turing Institute Researcher', 'PhD Computer Science, UCL', 'EU AI Act Advisory Panel', 'IEEE Senior Member'],
    gradient: 'from-blue-500 to-sky-300',
  },
];

const milestones = [
  { year: '2018', event: 'VURA-INSURE founded by Dr. James Whitfield with seed funding from Paladin Capital Group' },
  { year: '2019', event: 'FCA authorisation received. First 100 cyber policies written. Premium income: £2.1M' },
  { year: '2020', event: 'Lloyd\'s of London underwriting partnership established. Premium income: £8.4M' },
  { year: '2021', event: 'D&O and Tech PI products launched. Team grows to 45 specialists. Premium income: £24M' },
  { year: '2022', event: '5,000th policy written. 24/7 incident response capability launched. Premium income: £67M' },
  { year: '2023', event: 'VURA-INSURE rated A- by AM Best. AI-Agent Liability product in development' },
  { year: '2024', event: 'AI-Agent Liability Insurance launched — an industry first. 14,200+ active policies. Premium income: £180M' },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">
            <Shield className="w-3.5 h-3.5" /> Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mt-4 mb-6">
            Built by Experts Who Have
            <span className="gradient-text"> Seen the Threats</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            VURA-INSURE was founded by former intelligence officers, regulators, and Lloyd&apos;s underwriters who were frustrated by an insurance industry that was fundamentally out of step with the digital threat landscape. We built the platform we wished existed.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-20">
          {[
            { value: '£180M+', label: 'Annual Premium Income' },
            { value: '14,200+', label: 'Active Policies' },
            { value: '99.8%', label: 'Claims Satisfaction Rate' },
            { value: 'A-', label: 'AM Best Rating' },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-6 text-center hover-lift">
              <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">The Leadership Team</h2>
            <p className="text-slate-600 mt-3 max-w-xl mx-auto">Six specialists with combined experience spanning GCHQ, Lloyd&apos;s, the ICO, Clifford Chance, and the UK&apos;s National Cyber Security Centre.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass-card rounded-3xl p-6 hover-lift">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-5 shadow-md`}>
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.creds.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 hidden sm:block" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="sm:pl-20 relative">
                  <div className="hidden sm:flex absolute left-5 top-4 w-6 h-6 rounded-full bg-blue-600 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="glass-card rounded-2xl p-5 flex items-start gap-4">
                    <div className="flex-shrink-0 px-3 py-1 rounded-lg bg-blue-600 text-white text-sm font-black">{m.year}</div>
                    <p className="text-slate-700 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-10 text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-slate-900 mb-4">Our Mission</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            To ensure that no organisation faces a catastrophic cyber incident without the financial resources, expert support, and intelligent coverage that allows it to survive, recover, and thrive. Insurance built not for the past, but for the digital risks of today and tomorrow.
          </p>
          <Link href="/contact" className="btn-primary">
            Work With Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
