import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Check, TriangleAlert as AlertTriangle, Lock, FileText, Phone, ArrowRight, Zap } from 'lucide-react';
import ServiceHero from '@/components/shared/ServiceHero';
import StealthAdWrapper from '@/components/ads/StealthAdWrapper';
import { adSlots } from '@/config/ad-slots';

export const metadata: Metadata = {
  title: 'Cyber Liability & Privacy Insurance | VURA-INSURE',
  description:
    'Comprehensive first and third-party cyber liability and privacy insurance. Coverage for data breaches, ransomware, network intrusions, regulatory fines, and crisis management. Get a quote in 48 hours.',
};

const coverageItems = [
  { title: 'Data Breach Response', desc: 'Covers forensic investigation, legal notification costs, credit monitoring for affected individuals, and call centre services.' },
  { title: 'Ransomware & Extortion', desc: 'Covers ransom payments (where legally permissible), negotiation fees, and data recovery costs following a ransomware event.' },
  { title: 'Business Interruption', desc: 'Compensates for lost revenue and extra expenses incurred when your systems are unavailable due to a covered cyber event.' },
  { title: 'Network Security Liability', desc: 'Third-party claims alleging that your failure of network security caused data loss, malware transmission, or denial-of-service attacks.' },
  { title: 'Privacy Liability & GDPR', desc: 'Defends against regulatory investigations and covers fines (where insurable) under GDPR, the UK DPA 2018, and equivalent legislation.' },
  { title: 'Media Liability', desc: 'Covers claims arising from online content, including defamation, copyright infringement, and invasion of privacy through digital media.' },
  { title: 'Social Engineering & Fraud', desc: 'Covers losses arising from fraudulent instruction attacks, business email compromise, and phishing-driven fund transfers.' },
  { title: 'Reputational Harm', desc: 'PR and crisis communications expenses to restore your brand following a cyber incident that generates adverse media attention.' },
];

export default function CyberLiabilityPage() {
  return (
    <>
      <ServiceHero
        icon={Shield}
        category="Cyber Liability & Privacy Insurance"
        title="Defend Against Every"
        subtitle="Digital Threat Vector"
        description="VURA-INSURE Cyber Liability delivers comprehensive first and third-party coverage for the full lifecycle of a cyber incident — from the moment of intrusion to post-breach reputational recovery. Backed by Lloyd's of London syndicates and powered by real-time threat intelligence."
        keyPoints={[
          'Coverage limits from £100K to £50M, tailored to your risk profile',
          'Panel of pre-approved forensic, legal, and PR specialists on retainer',
          '4-hour incident response SLA with 24/7 dedicated hotline',
          'Covers GDPR regulatory investigations and defence costs',
        ]}
        color="from-blue-600 to-sky-400"
      />

      <section className="py-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StealthAdWrapper slot={adSlots.SERVICE_INLINE} className="mb-12" />

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">What Does Our Policy Cover?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Eight distinct coverage modules, each backed by specialist underwriting expertise and battle-tested in thousands of real-world incidents.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coverageItems.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-5 hover-lift">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 text-blue-700" strokeWidth={3} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-body">
            <h2>Understanding Cyber Liability Insurance in 2025</h2>
            <p>
              The threat landscape has never been more complex. In 2024, the UK&apos;s National Cyber Security Centre responded to 430 incidents, a 47% increase on the previous year. Ransomware-as-a-service platforms have democratised cybercrime, enabling even unsophisticated actors to deploy devastating payloads against businesses of all sizes. The average cost of a UK data breach now stands at £3.8 million — a figure that excludes the long-tail costs of customer churn, brand damage, and regulatory scrutiny.
            </p>
            <p>
              Traditional commercial insurance policies were not designed for the digital age. A commercial combined policy may cover physical damage to hardware but will not respond to the loss of electronic data, the cost of notifying 50,000 affected customers, or the regulatory fine levied by the Information Commissioner&apos;s Office. Cyber Liability Insurance was specifically engineered to fill these gaps.
            </p>

            <h2>First-Party vs. Third-Party Cyber Coverage</h2>
            <p>
              A comprehensive cyber insurance policy has two fundamental components. <strong>First-party coverage</strong> protects your own organisation against the direct financial consequences of a cyber event. This includes the cost of engaging forensic investigators to determine the cause and extent of a breach, legal advice on your notification obligations, the expense of actually notifying affected data subjects, credit monitoring services, business interruption losses while systems are restored, and any ransom payments made to cybercriminals.
            </p>
            <p>
              <strong>Third-party coverage</strong> responds when others make claims against you as a result of your cyber incident. A customer whose personal data was exposed may bring a civil action against you. A business partner whose systems were infected by malware originating from your network may sue for damages. Regulatory bodies may commence formal investigations leading to substantial fines. Without third-party cyber coverage, your organisation bears these costs alone.
            </p>

            <h2>The Anatomy of a Modern Data Breach</h2>
            <p>
              Understanding how breaches unfold helps explain why comprehensive coverage is so essential. Most breaches follow a predictable pattern. Initial access is typically gained through phishing (responsible for 36% of breaches), compromised credentials (25%), or exploitation of unpatched software vulnerabilities (17%). The attacker then spends an average of 194 days moving laterally through the network, elevating privileges, and identifying the most valuable data assets before triggering the visible breach event.
            </p>
            <p>
              By the time your IT team discovers the intrusion, the attacker may have been in your environment for over six months. They will have mapped your backup systems, identified your cyber insurance policy documents, and assessed your ability to pay a ransom demand. This is not a hypothetical scenario — it is the operational methodology documented in thousands of ransomware investigations conducted by VURA-INSURE&apos;s incident response partners.
            </p>

            <h2>GDPR and the UK DPA 2018: Why Regulatory Cover Matters</h2>
            <p>
              The GDPR and its UK equivalent, the Data Protection Act 2018, impose mandatory breach notification obligations on all organisations that process personal data. Under Article 33 of the GDPR, you must notify the supervisory authority (the ICO in the UK) within 72 hours of becoming aware of a breach that is likely to result in a risk to individuals&apos; rights and freedoms. Under Article 34, you may also be required to notify affected individuals directly.
            </p>
            <p>
              Failure to comply with these obligations can result in fines of up to €20 million or 4% of global annual turnover — whichever is higher. In practice, the ICO has issued fines ranging from £80,000 for small businesses to £20 million for large enterprises. VURA-INSURE&apos;s cyber policy covers the legal and advisory costs of navigating these obligations, as well as the notification and communication expenses themselves.
            </p>
            <blockquote>
              "The ICO&apos;s enforcement activity has accelerated significantly since 2022. Boards that treat data protection as a compliance checkbox, rather than a genuine risk management priority, are increasingly finding themselves the subject of regulatory investigation." — UK Information Commissioner, Annual Report 2024
            </blockquote>

            <h2>How VURA-INSURE Calculates Your Cyber Premium</h2>
            <p>
              Unlike traditional insurers who rely on static questionnaires completed annually, VURA-INSURE employs a continuous risk assessment model. Our proprietary platform ingests data from multiple intelligence sources — including dark web monitoring, vulnerability scanning APIs, and threat intelligence feeds — to maintain a live risk score for each insured organisation.
            </p>
            <p>
              Factors that influence your premium include: the volume and sensitivity of personal data you process; your industry sector (financial services, healthcare, and critical infrastructure attract higher risk weightings); your existing security controls and certifications (Cyber Essentials Plus and ISO 27001 can reduce premiums by up to 18%); your claims history; and the limits and deductibles you choose. Organisations that demonstrate continuous security improvement may qualify for our &quot;Secure Progress Discount&quot; — a premium reduction of up to 12% per year for verified security enhancements.
            </p>

            <h2>Incident Response: The 4-Hour Promise</h2>
            <p>
              When a cyber incident occurs, every minute matters. Forensic evidence degrades. Malware spreads. Customers and regulators start asking questions. VURA-INSURE&apos;s 4-Hour Promise means that when you call our emergency incident hotline, a senior incident response manager will be on the phone within 15 minutes, and a qualified forensic investigator will be engaged within 4 hours — regardless of the time of day, day of week, or your geographic location within the UK.
            </p>
            <p>
              Our incident response panel includes some of the most experienced cyber forensics firms in the country, pre-approved and contractually committed to our service level agreements. This eliminates the frantic searching for reputable vendors that typically costs precious hours in an uninsured incident response.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Ready to Secure Your Organisation?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">Our cyber specialists will assess your risk profile and design a bespoke policy within 48 hours. No obligations, no hidden fees.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Your Free Risk Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/#compare" className="btn-ghost">
              Compare Policies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
