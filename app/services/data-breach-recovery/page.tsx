import type { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCw, ArrowRight, Clock } from 'lucide-react';
import ServiceHero from '@/components/shared/ServiceHero';
import StealthAdWrapper from '@/components/ads/StealthAdWrapper';
import { adSlots } from '@/config/ad-slots';

export const metadata: Metadata = {
  title: 'Rapid Data Breach Recovery Insurance | VURA-INSURE',
  description:
    'When a breach hits, every hour counts. VURA-INSURE Data Breach Recovery delivers forensic investigation, regulatory notification, credit monitoring, and crisis management within 4 hours. FCA authorised.',
};

const phases = [
  { phase: '0–4 hrs', title: 'Immediate Response', steps: ['Emergency hotline activation', 'Senior incident manager assigned', 'Forensic investigator engaged', 'Legal counsel on standby'] },
  { phase: '4–24 hrs', title: 'Containment & Analysis', steps: ['Forensic investigation begins', 'Attack vector identified', 'Systems isolated and preserved', 'Regulatory timeline assessed'] },
  { phase: '24–72 hrs', title: 'Notification & Remediation', steps: ['ICO notified (if required)', 'Affected individuals identified', 'Notification communications drafted', 'Credit monitoring arranged'] },
  { phase: '72 hrs+', title: 'Recovery & Resilience', steps: ['Systems restored from clean backup', 'Security hardening implemented', 'Post-incident review commissioned', 'Claims documentation submitted'] },
];

export default function DataBreachRecoveryPage() {
  return (
    <>
      <ServiceHero
        icon={RefreshCw}
        category="Data Breach Recovery Insurance"
        title="From Breach to Recovery"
        subtitle="In Record Time"
        description="The VURA-INSURE Rapid Data Breach Recovery policy doesn't just cover costs — it deploys the specialists who eliminate them. Our pre-approved vendor panel and 4-hour response SLA turn a catastrophic event into a managed incident."
        keyPoints={[
          'Forensic investigation costs covered from incident hour zero',
          '72-hour ICO notification support with specialist legal guidance',
          'Credit monitoring services for up to 250,000 affected individuals',
          'Crisis communications retainer with top-tier PR firms',
        ]}
        color="from-emerald-500 to-teal-400"
      />

      <section className="py-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StealthAdWrapper slot={adSlots.SERVICE_INLINE} className="mb-12" />
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">The Four-Phase Recovery Framework</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Our structured response methodology, refined across hundreds of real-world incidents, ensures nothing is missed and no time is wasted.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {phases.map((phase, i) => (
              <div key={phase.phase} className="glass-card rounded-2xl p-5 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{phase.phase}</div>
                    <div className="text-sm font-bold text-slate-900">{phase.title}</div>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {phase.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-body">
            <h2>Why Traditional Insurance Fails at Breach Response</h2>
            <p>
              The fundamental flaw in most cyber insurance products is that they were designed by insurance people, not security people. They treat a cyber breach like a burglary — an event that has already occurred, the consequences of which can be assessed and compensated in a linear, unhurried fashion. The reality of a data breach is profoundly different. A breach is a dynamic, rapidly evolving situation in which every hour of delay compounds the financial, regulatory, and reputational damage.
            </p>
            <p>
              Consider the economics of the 72-hour notification window. Under GDPR, you have 72 hours from becoming aware of a breach to notify the ICO if the breach is likely to result in a risk to individuals. &quot;Becoming aware&quot; begins from the moment any person in your organisation has actual knowledge of the breach — not from when your IT director formally declares an incident, and not from when your legal counsel advises notification is required. This is not a comfortable administrative deadline. It is a hard regulatory obligation backed by fines of up to £17.5 million.
            </p>

            <h2>The Hidden Costs of a Data Breach</h2>
            <p>
              The IBM Cost of a Data Breach Report 2024 estimates the average cost of a UK data breach at £3.8 million. But this headline figure obscures the true complexity of breach costs, which fall into several distinct categories that play out over months and years.
            </p>
            <p>
              <strong>Immediate costs</strong> (0–30 days) include forensic investigation, legal advice, regulatory notification, customer notification, and initial crisis communications. These costs are acute and unavoidable — they must be incurred regardless of the eventual outcome.
            </p>
            <p>
              <strong>Short-term costs</strong> (1–6 months) include business interruption losses during system restoration, technology remediation and hardening, regulatory investigation costs, and ongoing crisis communications. These costs are often larger than the immediate costs and are less predictable.
            </p>
            <p>
              <strong>Long-term costs</strong> (6 months to 3 years) include customer attrition, increased cost of capital, regulatory fines and penalties, civil litigation from affected individuals or business partners, and the ongoing reputational discount applied by customers and investors. These costs are the most significant but the hardest to insure, which is why VURA-INSURE&apos;s approach to rapid response is specifically designed to minimise the events that give rise to them.
            </p>
            <blockquote>
              &quot;The organisations that suffer the least long-term damage from breaches are not those with the most sophisticated security controls — they are those with the fastest and most transparent response.&quot; — VURA-INSURE Chief Claims Officer
            </blockquote>

            <h2>Forensic Investigation: Preserving Evidence and Attributing Cause</h2>
            <p>
              The forensic investigation phase of breach response serves two critical and often conflicting purposes. First, it is essential for business recovery — understanding how attackers entered your systems, what they did while inside, and what data they accessed allows you to close the vulnerabilities that were exploited and restore systems from clean backups with confidence. Second, it is legally essential for regulatory compliance and potential litigation — the forensic evidence gathered in the early hours of an incident may be the only contemporaneous record of what actually happened.
            </p>
            <p>
              VURA-INSURE&apos;s forensic panel partners use industry-standard methodologies including NIST SP 800-86, ISO/IEC 27037, and ACPO guidelines to ensure that evidence is collected, preserved, and documented in a manner that will withstand legal scrutiny. This matters enormously in scenarios where you later need to demonstrate to the ICO that you acted promptly and in accordance with best practices.
            </p>

            <h2>Credit Monitoring and Individual Notification</h2>
            <p>
              When a breach involves the personal data of identifiable individuals, the obligation to notify those individuals is both a legal requirement and a reputational imperative. VURA-INSURE&apos;s Data Breach Recovery policy covers the costs of notifying up to 250,000 affected individuals, including postage, call centre operations, and dedicated breach notification microsites.
            </p>
            <p>
              For breaches involving financial data, identity documents, or other high-risk personal information, the policy also funds credit monitoring and identity theft protection services for affected individuals. Providing these services — even when not strictly required by regulation — is consistently shown to reduce the number and quantum of civil claims brought by affected individuals, representing a significant cost saving over the life of the claim.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Start Your 48-Hour Quote Process</h2>
          <p className="text-slate-600 mb-8">Our data breach specialists will assess your notification obligations, data processing volumes, and existing controls to deliver a bespoke policy quote.</p>
          <Link href="/contact" className="btn-primary">
            Request a Breach Recovery Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
