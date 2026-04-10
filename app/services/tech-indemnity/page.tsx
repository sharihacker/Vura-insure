import type { Metadata } from 'next';
import Link from 'next/link';
import { Code, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import ServiceHero from '@/components/shared/ServiceHero';
import StealthAdWrapper from '@/components/ads/StealthAdWrapper';
import { adSlots } from '@/config/ad-slots';

export const metadata: Metadata = {
  title: 'Tech Professional Indemnity Insurance | VURA-INSURE',
  description:
    'Purpose-built professional indemnity insurance for technology companies, SaaS providers, software developers, and IT consultants. Covers errors & omissions, IP disputes, and contract failures.',
};

const whoNeedsIt = [
  'Software development companies and studios',
  'SaaS and cloud platform providers',
  'IT consultancies and managed service providers',
  'Cybersecurity firms and penetration testing companies',
  'Data analytics and business intelligence consultancies',
  'Fintech, HealthTech, and LegalTech firms',
  'Systems integrators and implementation partners',
  'Digital transformation and IT project management consultancies',
];

export default function TechIndemnityPage() {
  return (
    <>
      <ServiceHero
        icon={Code}
        category="Tech Professional Indemnity Insurance"
        title="Coverage for Every Line"
        subtitle="of Code You Write"
        description="Software is never perfect. Requirements change. Systems fail. Clients claim losses. VURA-INSURE Tech Professional Indemnity is specifically designed for the technology sector, covering the unique liabilities that arise from providing technology products and services."
        keyPoints={[
          'Errors and omissions coverage including negligent software defects',
          'Intellectual property infringement defence and settlement costs',
          'Contractual liability for breach of service level agreements',
          'Covers technology companies worldwide with UK jurisdiction clauses',
        ]}
        color="from-sky-600 to-cyan-400"
      />

      <section className="py-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StealthAdWrapper slot={adSlots.SERVICE_INLINE} className="mb-12" />
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Who Needs Tech PI?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {whoNeedsIt.map((item) => (
              <div key={item} className="glass-card rounded-2xl p-4 hover-lift flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-body">
            <h2>Why Standard PI Is Not Enough for Tech Companies</h2>
            <p>
              Traditional professional indemnity insurance was designed for professional service firms — accountants, solicitors, architects, surveyors — whose liability exposure arises from advice given rather than products built. The policies are worded accordingly, with definitions and exclusions that create significant gaps when applied to the technology sector. A standard PI policy may exclude claims arising from software products, may not cover IP infringement, and almost certainly does not contemplate the cascading liability that arises when a SaaS platform serves thousands of customers and a single defect generates thousands of claims simultaneously.
            </p>
            <p>
              VURA-INSURE Tech PI was built from first principles, designed to respond to the specific liability profile of technology companies. Our policy definitions are crafted to include, rather than exclude, technology products and services. Our coverage extends to the activities that technology companies actually perform — software development, cloud hosting, data processing, API integration, managed services, and the increasingly important activity of developing and deploying artificial intelligence.
            </p>

            <h2>Errors and Omissions: The Core Technology Risk</h2>
            <p>
              The fundamental liability of technology companies arises from errors and omissions — the mistakes and oversights that cause client losses. A software defect that causes a critical system outage. An API integration that corrupts financial data. A security vulnerability that allows unauthorised access to customer records. A misconfigured cloud environment that exposes confidential business information. These are not hypothetical scenarios; they are the everyday reality of technology delivery.
            </p>
            <p>
              VURA-INSURE Tech PI covers the legal defence costs and damages arising from E&O claims, including claims that arise from third parties affected by your technology errors. In many modern technology supply chains, a defect in an upstream vendor&apos;s software can cause cascading losses downstream. Our policy is structured to respond in these complex, multi-party scenarios.
            </p>

            <h2>Intellectual Property: A Unique Tech PI Risk</h2>
            <p>
              Technology companies face IP liability risks that are qualitatively different from those faced by traditional professional services firms. The software development process is inherently derivative — developers use libraries, frameworks, APIs, and code snippets that may incorporate third-party IP in ways that are not immediately apparent. Open source licensing is complex, and inadvertent violations of GPL, LGPL, or other copyleft licences can expose companies to significant liability.
            </p>
            <p>
              Beyond open source, technology companies regularly incorporate third-party components — fonts, icons, data sets, algorithms — that may be subject to IP claims. The growing importance of AI training data introduces a new IP risk dimension: models trained on data that includes copyrighted material may generate outputs that infringe on existing IP rights.
            </p>
            <p>
              VURA-INSURE Tech PI covers both defence costs and settlement costs for IP infringement claims brought against your company, including patent infringement, copyright infringement, trade mark infringement, and misappropriation of trade secrets.
            </p>

            <h2>Service Level Agreements and Contractual Liability</h2>
            <p>
              Technology service contracts routinely contain service level agreements (SLAs) that create binding obligations to deliver specified levels of availability, performance, and support responsiveness. When these SLAs are breached, the contractual consequences can be severe — service credits, step-in rights, termination for cause, and consequential loss claims.
            </p>
            <p>
              Many standard PI policies exclude claims arising from the breach of express contractual obligations, on the theory that PI should only cover negligence rather than strict contractual liability. VURA-INSURE Tech PI takes a different view — we recognise that in technology contracts, the SLA is the standard of professional performance, and our coverage extends to claims arising from SLA breaches caused by negligence or error.
            </p>

            <h2>The Aggregation Problem: SaaS and Platform Risk</h2>
            <p>
              One of the most significant underinsurance risks for SaaS companies is the aggregation problem. A single defect in a widely-used SaaS platform can simultaneously trigger claims from hundreds or thousands of customers, each alleging their own distinct losses from the same underlying error. Standard PI policies may treat each customer&apos;s claim as a separate occurrence — rapidly exhausting any coverage limit — or may apply a single aggregate limit across all claims, leaving the insured with a catastrophic uninsured exposure.
            </p>
            <p>
              VURA-INSURE addresses this through bespoke aggregation clauses tailored to the specific risk profile of platform and SaaS businesses. Our underwriters work with you to understand your customer base, your platform architecture, and your liability exposure per customer, and then structure the policy to provide genuine protection against mass-claim scenarios.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-sky-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Get the Right Tech PI for Your Business</h2>
          <p className="text-slate-600 mb-8">Our technology insurance specialists understand your industry. Get a tailored quote in 48 hours.</p>
          <Link href="/contact" className="btn-primary">
            Request a Tech PI Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
