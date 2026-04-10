import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Check, ArrowRight, Shield, Briefcase } from 'lucide-react';
import ServiceHero from '@/components/shared/ServiceHero';
import StealthAdWrapper from '@/components/ads/StealthAdWrapper';
import { adSlots } from '@/config/ad-slots';

export const metadata: Metadata = {
  title: 'Executive D&O Protection — Directors & Officers Insurance | VURA-INSURE',
  description:
    'Protect your board and senior executives from personal financial loss. VURA-INSURE D&O covers wrongful act allegations, securities claims, regulatory investigations, and employment disputes. FCA authorised.',
};

const coverageModules = [
  { title: 'Side A — Personal Asset Protection', desc: 'Direct coverage for individual directors when the company cannot or will not indemnify, protecting personal assets including homes and savings.' },
  { title: 'Side B — Corporate Reimbursement', desc: 'Reimburses the company for indemnification payments it makes to directors and officers in connection with covered claims.' },
  { title: 'Side C — Entity Securities Coverage', desc: 'Covers the company itself for securities claims, protecting against investor lawsuits alleging misrepresentation in public offerings or market communications.' },
  { title: 'Regulatory Investigation Defence', desc: 'Covers legal costs for FCA, CMA, SFO, and other regulatory investigations, including dawn raids, document production, and interview attendance.' },
  { title: 'Employment Practices Liability', desc: 'Covers claims by employees alleging wrongful termination, discrimination, harassment, or breach of employment contract.' },
  { title: 'Outside Director Liability', desc: 'Extends protection to directors serving on the boards of external organisations, charities, joint ventures, and subsidiary companies.' },
  { title: 'Crisis Communications', desc: 'Funds immediate PR and communications counsel to manage reputational fallout from an allegation or investigation before it becomes headline news.' },
  { title: 'Extradition & Excess Side A', desc: 'Enhanced personal protection including extradition costs and unlimited Side A coverage for non-indemnifiable losses in catastrophic scenarios.' },
];

export default function DirectorsOfficersPage() {
  return (
    <>
      <ServiceHero
        icon={Users}
        category="Directors & Officers Insurance"
        title="Protect Every Leader"
        subtitle="On Your Board"
        description="Executive leadership carries extraordinary personal risk. A single regulatory investigation or shareholder lawsuit can threaten personal assets accumulated over a lifetime of work. VURA-INSURE D&O provides the comprehensive personal protection that today's boardrooms demand."
        keyPoints={[
          'Covers directors of public, private, and not-for-profit organisations',
          'Side A, B, and C coverage with limits up to £100M',
          'Includes pre-claim legal advice from specialist D&O panel solicitors',
          'Global coverage with jurisdictional extensions for US and EU courts',
        ]}
        color="from-slate-800 to-slate-600"
      />

      <section className="py-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StealthAdWrapper slot={adSlots.SERVICE_INLINE} className="mb-12" />
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Comprehensive Coverage Architecture</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Eight interlocking coverage modules designed to provide total protection for individuals and the entities they lead.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coverageModules.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-5 hover-lift">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center mb-3">
                  <Briefcase className="w-4 h-4 text-slate-700" />
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
            <h2>The Growing Personal Liability Exposure of UK Directors</h2>
            <p>
              The personal liability exposure of UK directors has escalated dramatically over the past decade. The Companies Act 2006, the Financial Services and Markets Act 2000, the Insolvency Act 1986, and a growing body of case law have created an intricate web of legal duties and potential liabilities that attach to individuals who accept boardroom appointments. The comfortable assumption that &quot;the company&quot; bears liability for management decisions is no longer reliable.
            </p>
            <p>
              In 2024, the Financial Conduct Authority commenced formal enforcement proceedings against 37 individuals — up 62% from 2022. The Serious Fraud Office secured three convictions of sitting directors in high-profile fraud investigations. The Competition and Markets Authority used its powers under the Enterprise Act to disqualify 14 directors for anti-competitive conduct. The trend is unmistakable: regulators are increasingly targeting individuals rather than accepting corporate fines as adequate deterrence.
            </p>

            <h2>What Constitutes a &quot;Wrongful Act&quot; Under D&O Policy?</h2>
            <p>
              D&O insurance responds to &quot;wrongful acts&quot; — a broad term that typically encompasses actual or alleged errors, misstatements, misleading statements, omissions, neglect, breach of duty, breach of trust, breach of fiduciary duty, or other acts committed by a director or officer in their insured capacity. This definition is intentionally wide, recognising that the legal theories under which directors are sued are varied and often creative.
            </p>
            <p>
              Common D&O claims in the UK include: <strong>shareholder derivative actions</strong> alleging that directors wasted corporate assets or approved transactions at an undervalue; <strong>securities claims</strong> alleging that board communications to the market contained material misstatements; <strong>insolvency claims</strong> brought by liquidators alleging wrongful trading, fraudulent trading, or misfeasance; <strong>regulatory proceedings</strong> by the FCA, FRC, or HMRC; and <strong>employment claims</strong> by employees alleging that individual directors were personally responsible for unlawful acts.
            </p>

            <h2>The Critical Importance of Side A DIC Coverage</h2>
            <p>
              The most significant evolution in D&O insurance over the past fifteen years has been the growth of &quot;Side A Difference in Conditions&quot; (DIC) coverage. Standard D&O policies contain numerous exclusions — fraud, dishonesty, personal profit, prior and pending litigation — that can render coverage unavailable precisely when it is most needed. Side A DIC policies are specifically designed to drop down and provide coverage in circumstances where the primary D&O policy has been rescinded, exhausted, or otherwise rendered unavailable.
            </p>
            <p>
              For directors facing catastrophic personal exposure — the insolvency scenario where the company cannot indemnify, the securities fraud allegation that triggers a policy rescission attempt, the regulatory prosecution that exceeds primary policy limits — Side A DIC coverage is the ultimate backstop. VURA-INSURE offers standalone Side A DIC coverage as well as integrated programs that provide seamless protection across all three sides.
            </p>

            <h2>D&O in the Age of ESG Accountability</h2>
            <p>
              Environmental, Social, and Governance (ESG) considerations have introduced a new dimension of director liability. Institutional investors, pension funds, and activist shareholders are increasingly using litigation and regulatory complaints as tools to enforce ESG commitments. The UK&apos;s mandatory climate-related financial disclosures, introduced under the Companies Act and applicable to premium-listed companies, have created potential liability for directors who approve disclosures that later prove to be materially inaccurate.
            </p>
            <p>
              The Taskforce on Nature-related Financial Disclosures (TNFD) framework, expected to inform mandatory reporting from 2026 onwards, will extend these liabilities to biodiversity and natural capital. Directors of businesses in sectors with significant environmental footprints — energy, agriculture, manufacturing, transport — face the greatest exposure from this emerging risk category.
            </p>

            <h2>Choosing the Right Coverage Limits</h2>
            <p>
              Selecting appropriate coverage limits is one of the most consequential decisions in the D&O placement process. Coverage towers for FTSE 100 companies frequently exceed £500 million, assembled through multiple layers with different insurers sharing the risk. For mid-market companies with revenues between £50 million and £500 million, limits of £25 million to £100 million are typically appropriate, though the right answer depends heavily on the company&apos;s sector, geographic footprint, and risk appetite.
            </p>
            <p>
              VURA-INSURE&apos;s D&O specialists will conduct a detailed limit adequacy analysis as part of every placement, drawing on our proprietary claims database and benchmarking data from comparable organisations. We do not believe in one-size-fits-all solutions — the limits that protect a private equity-backed technology company are fundamentally different from those required by a publicly listed financial services firm.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Protect Every Member of Your Board</h2>
          <p className="text-slate-600 mb-8">Speak to a D&O specialist today. We&apos;ll review your existing arrangements and identify any gaps in personal protection.</p>
          <Link href="/contact" className="btn-primary">
            Request a D&O Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
