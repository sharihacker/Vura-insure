import type { Metadata } from 'next';
import ArticleLayout from '@/components/shared/ArticleLayout';

export const metadata: Metadata = {
  title: 'The Definitive Guide to Making a Cyber Insurance Claim | VURA-INSURE',
  description: 'Step-by-step guide to maximising your cyber insurance claim. Avoid the common mistakes that reduce payouts, understand the claims process timeline, and know your obligations as an insured.',
};

export default function ClaimsGuideArticle() {
  return (
    <ArticleLayout
      category="Claims"
      categoryColor="bg-green-50 text-green-700"
      title="The Definitive Guide to Making a Cyber Insurance Claim"
      excerpt="Most cyber insurance claims are reduced — not because of coverage disputes, but because insureds make avoidable mistakes in the critical early hours. Our Head of Claims walks through the complete claims process and the steps that maximise your payout."
      author={{
        name: "Marcus O'Reilly",
        title: 'Head of Cyber Claims, VURA-INSURE & Former Lead Incident Responder, NCSC',
        bio: "Marcus O'Reilly has managed over 500 cyber insurance claims in his career, from small SME data breaches to nine-figure ransomware events affecting critical national infrastructure. He leads VURA-INSURE's claims team and has designed the industry's most streamlined claims process.",
        credentials: ['Former NCSC Lead Responder', 'CREST Certified Incident Manager', 'SANS GIAC GCIH', '500+ Cyber Claims Managed'],
      }}
      date="August 2024"
      readTime="18 min read"
    >
      <p>
        Cyber insurance claims are more complex than claims under almost any other type of commercial insurance. Unlike a property claim — where the cause of loss is typically obvious, the damage is physically visible, and the quantum can be assessed by a surveyor — a cyber claim involves technical forensic investigation, legal analysis of regulatory obligations, quantification of intangible losses, and decisions that must be made in real time under enormous pressure.
      </p>
      <p>
        The good news is that the complexity of the claims process is navigable — if you know what to do, in what order, and when to involve your insurer. This guide provides a complete roadmap for maximising your cyber insurance claim, based on my experience managing over 500 claims at VURA-INSURE and previously at the NCSC.
      </p>

      <h2>Step 1: Notify Your Insurer Immediately — Not &quot;As Soon As Reasonably Practicable&quot;</h2>
      <p>
        The single most common mistake insured organisations make is delaying notification to their insurer. Many organisations attempt to contain the incident, assess the extent of the compromise, and develop their response strategy before involving their insurer — reasoning that they should have a clearer picture before making the call. This reasoning is almost always incorrect and often significantly reduces the value of the claim.
      </p>
      <p>
        Cyber insurance policies impose a notification obligation — typically worded as &quot;as soon as reasonably practicable&quot; after discovering the incident. Most policies also require that approved vendors be used for forensic investigation, legal advice, and other covered services. If you engage unapproved vendors before notifying your insurer, you may find that those costs are not covered — even if the vendors&apos; work is excellent and their fees are entirely reasonable.
      </p>

      <h2>Step 2: Preserve Evidence — Do Not Delete, Overwrite, or Restore</h2>
      <p>
        In the immediate aftermath of a cyber incident, the instinct to restore systems to normal operation is powerful and understandable. Downtime has real financial consequences; your team is under pressure; your customers and management are demanding action. Resist this instinct — at least until forensic evidence has been properly preserved.
      </p>
      <p>
        Your insurer needs to understand the cause, extent, and timeline of the incident to quantify the claim. Law enforcement may need evidence for a criminal prosecution. Your legal team may need evidence to defend civil claims or regulatory proceedings. The ICO may require evidence that you acted appropriately in response to the breach. All of this evidence is contained in system logs, memory images, disk images, network traffic captures, and malware samples that can be destroyed if systems are hastily restored from backup.
      </p>

      <h2>Step 3: Document Every Cost From Day One</h2>
      <p>
        A cyber insurance claim is only as valuable as the documentation supporting it. Costs that are not documented and attributed to the cyber incident — even if they are genuinely incident-related — are extremely difficult to recover from an insurer. From the moment of discovery, establish a cost tracking process that captures every expenditure related to the incident, with supporting documentation.
      </p>
      <ul>
        <li>Staff overtime and additional resource costs directly attributable to the incident</li>
        <li>All external vendor invoices, with descriptions of services provided</li>
        <li>Hardware and software replacement costs with purchase receipts</li>
        <li>Revenue lost due to system unavailability, with supporting business records</li>
        <li>Customer notification costs including postage, call centre time, and communications design</li>
        <li>Regulatory fees and legal costs related to the incident</li>
      </ul>

      <h2>Common Reasons Claims Are Reduced or Declined</h2>
      <p>
        Understanding the reasons claims are reduced or declined allows you to take proactive steps to protect your coverage. The most common reasons include:
      </p>
      <ul>
        <li><strong>Late notification:</strong> Failing to notify the insurer promptly, leading to prejudice arguments</li>
        <li><strong>Unapproved vendors:</strong> Using forensic or legal vendors not on the insurer&apos;s approved panel without prior authorisation</li>
        <li><strong>Material misrepresentation:</strong> Providing incorrect information at inception about security controls that are material to the risk</li>
        <li><strong>Prior knowledge:</strong> The incident was known or notified before the policy incep  tion date</li>
        <li><strong>Excluded perils:</strong> The incident falls within a specific exclusion such as war, infrastructure failure, or regulatory fine in a non-insurable jurisdiction</li>
      </ul>
    </ArticleLayout>
  );
}
