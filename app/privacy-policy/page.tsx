import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | VURA-INSURE',
  description: 'VURA-INSURE Privacy Policy. How we collect, use, and protect your personal data in accordance with the UK GDPR and the Data Protection Act 2018.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-flex">
            <Shield className="w-3.5 h-3.5" /> Legal
          </span>
          <h1 className="text-4xl font-black text-slate-900 mt-4 mb-3">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: 10 April 2025 | Effective: 10 April 2025</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 article-body">
          <p>
            VURA-INSURE Ltd (&quot;VURA-INSURE,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), registered in England and Wales (Company No. 14567890), is committed to protecting the privacy of individuals whose personal data we process. This Privacy Policy explains how we collect, use, share, and protect personal data in connection with our insurance services, website, and related activities.
          </p>
          <p>
            VURA-INSURE Ltd is authorised and regulated by the Financial Conduct Authority (FCA) under registration number 987654. Our registered office is at 1 Fintech Square, London, EC2V 8RF.
          </p>

          <h2>1. Data Controller Information</h2>
          <p>
            VURA-INSURE Ltd is the data controller responsible for personal data processed in connection with our insurance services and website. Our Data Protection Officer can be contacted at: <strong>dpo@vura-insure.com</strong> or by post at the registered office address above.
          </p>

          <h2>2. Personal Data We Collect</h2>
          <p>We collect and process the following categories of personal data:</p>
          <ul>
            <li><strong>Identity data:</strong> Name, job title, company name, and company registration number</li>
            <li><strong>Contact data:</strong> Email address, telephone number, and postal address</li>
            <li><strong>Financial data:</strong> Bank account details, credit/debit card information, and financial statements (for underwriting purposes)</li>
            <li><strong>Technical data:</strong> IP address, browser type, operating system, and browsing activity on our website</li>
            <li><strong>Insurance data:</strong> Risk information provided for insurance quotation and placement, claims information, and policy details</li>
            <li><strong>Special category data:</strong> In limited circumstances, we may process data relating to criminal convictions and offences in connection with fraud prevention</li>
          </ul>

          <h2>3. Legal Bases for Processing</h2>
          <p>We process personal data on the following legal bases:</p>
          <ul>
            <li><strong>Contractual necessity:</strong> Processing necessary to perform our contract with you (e.g., issuing and administering insurance policies)</li>
            <li><strong>Legal obligation:</strong> Processing necessary to comply with our legal and regulatory obligations (e.g., FCA requirements, anti-money laundering obligations)</li>
            <li><strong>Legitimate interests:</strong> Processing necessary for our legitimate business interests, including fraud prevention, product development, and business analysis</li>
            <li><strong>Consent:</strong> Where we rely on consent (e.g., for marketing communications), you may withdraw consent at any time</li>
          </ul>

          <h2>4. How We Use Personal Data</h2>
          <p>We use personal data for the following purposes:</p>
          <ul>
            <li>To provide, administer, and manage insurance policies and claims</li>
            <li>To communicate with you about your policy, claims, and related matters</li>
            <li>To comply with our regulatory obligations as an FCA-authorised firm</li>
            <li>To prevent, detect, and investigate fraud and financial crime</li>
            <li>To improve our products and services through analysis of usage data</li>
            <li>To send marketing communications (where you have consented or we have a legitimate interest)</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We share personal data with the following categories of recipients:</p>
          <ul>
            <li><strong>Lloyd&apos;s of London syndicates and reinsurers:</strong> For underwriting and risk sharing purposes</li>
            <li><strong>Claims service providers:</strong> Forensic investigators, legal advisers, and loss adjusters who assist with claims</li>
            <li><strong>Regulatory bodies:</strong> The FCA, PRA, ICO, and other regulators when required by law</li>
            <li><strong>Fraud prevention agencies:</strong> Including the Insurance Fraud Bureau and Claims and Underwriting Exchange</li>
            <li><strong>IT service providers:</strong> Cloud hosting, analytics, and other technology providers who process data on our behalf</li>
          </ul>

          <h2>6. International Data Transfers</h2>
          <p>
            Some of our service providers are located outside the UK. Where we transfer personal data to countries not deemed to provide an adequate level of data protection, we implement appropriate safeguards, including Standard Contractual Clauses approved by the UK ICO.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain personal data for as long as necessary to fulfil the purposes for which it was collected and to comply with legal, regulatory, and contractual obligations. Insurance records are typically retained for a minimum of seven years following the expiry of the relevant policy, reflecting the potential for long-tail claims.
          </p>

          <h2>8. Your Rights</h2>
          <p>Under UK data protection law, you have the following rights:</p>
          <ul>
            <li><strong>Right of access:</strong> To request a copy of the personal data we hold about you</li>
            <li><strong>Right to rectification:</strong> To request correction of inaccurate personal data</li>
            <li><strong>Right to erasure:</strong> To request deletion of personal data in certain circumstances</li>
            <li><strong>Right to restrict processing:</strong> To request that we limit how we use your personal data</li>
            <li><strong>Right to data portability:</strong> To receive personal data in a structured, commonly used format</li>
            <li><strong>Right to object:</strong> To object to processing based on legitimate interests or for direct marketing</li>
          </ul>
          <p>To exercise any of these rights, please contact our DPO at dpo@vura-insure.com. You also have the right to lodge a complaint with the ICO at ico.org.uk.</p>

          <h2>9. Cookies</h2>
          <p>
            Our website uses cookies. Please see our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link> for detailed information about the cookies we use and how to manage your preferences.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data processing activities, please contact our Data Protection Officer at <strong>dpo@vura-insure.com</strong> or write to us at VURA-INSURE Ltd, Data Protection Officer, 1 Fintech Square, London, EC2V 8RF.
          </p>
        </div>
      </div>
    </div>
  );
}
