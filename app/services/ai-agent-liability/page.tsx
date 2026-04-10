import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, ArrowRight, Zap, TriangleAlert as AlertTriangle, Brain, CircleCheck as CheckCircle } from 'lucide-react';
import ServiceHero from '@/components/shared/ServiceHero';
import StealthAdWrapper from '@/components/ads/StealthAdWrapper';
import { adSlots } from '@/config/ad-slots';

export const metadata: Metadata = {
  title: 'AI-Agent Liability Insurance — First-to-Market Coverage | VURA-INSURE',
  description:
    "The world's first commercial AI-agent liability insurance. Coverage for hallucinations, algorithmic bias, autonomous agent failures, cascading damages, and regulatory AI Act breaches. Apply today.",
};

const aiRisks = [
  { icon: Brain, title: 'Model Hallucinations', desc: 'An AI agent provides factually incorrect information causing the recipient financial loss, reputational damage, or personal harm.' },
  { icon: AlertTriangle, title: 'Algorithmic Bias', desc: 'Discriminatory outputs from AI systems lead to regulatory enforcement, civil rights claims, or employment discrimination lawsuits.' },
  { icon: Zap, title: 'Autonomous Action Failures', desc: 'An AI agent takes autonomous actions — executing transactions, sending communications, modifying data — that cause unintended harm.' },
  { icon: Bot, title: 'Cascading System Failures', desc: 'An AI agent\'s error propagates through connected systems, causing losses that extend beyond the immediate deployment environment.' },
  { icon: CheckCircle, title: 'EU AI Act Compliance', desc: 'Regulatory investigations, fines, and defence costs arising from alleged violations of the EU AI Act or equivalent national legislation.' },
  { icon: Brain, title: 'Training Data Liability', desc: 'Claims arising from the use of copyrighted, private, or improperly licensed data in model training, including IP infringement claims.' },
];

export default function AiAgentLiabilityPage() {
  return (
    <>
      <ServiceHero
        icon={Bot}
        category="AI-Agent Liability Insurance"
        title="The Insurance That Thinks"
        subtitle="Ahead of the Risk"
        description="As artificial intelligence transitions from decision-support tools to autonomous agents capable of independent action, the liability landscape is being rewritten in real time. VURA-INSURE AI-Agent Liability Insurance is the first commercially available product designed to respond to this new class of risk."
        keyPoints={[
          "Industry-first coverage for autonomous AI agent errors and omissions",
          'Covers the EU AI Act and UK AI regulatory framework compliance costs',
          'Algorithmic bias liability including employment and civil rights claims',
          'Training data IP liability including model output copyright claims',
        ]}
        color="from-blue-600 to-sky-500"
      />

      <section className="py-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StealthAdWrapper slot={adSlots.SERVICE_INLINE} className="mb-12" />
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Six Categories of AI Liability</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Autonomous AI systems create liability risks across six distinct categories, each requiring specialised coverage language developed in collaboration with AI legal experts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiRisks.map((risk) => (
              <div key={risk.title} className="glass-card rounded-2xl p-5 hover-lift">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <risk.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{risk.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-body">
            <h2>Why AI Changes Everything About Technology Liability</h2>
            <p>
              Traditional technology liability insurance was designed for deterministic systems — software that, given the same inputs, produces the same outputs. The liability analysis for such systems is relatively straightforward: if the system produces an incorrect output, the cause can typically be traced to a specific defect in code, configuration, or data. Attribution is possible; liability can be allocated.
            </p>
            <p>
              Large language models and autonomous AI agents are fundamentally different. Their outputs are probabilistic, not deterministic. The same input can produce different outputs at different times. Their &quot;reasoning&quot; is opaque — even their developers cannot fully explain why they produce specific outputs. They learn from patterns in training data that may contain biases, inaccuracies, or legally problematic content. And increasingly, they are being deployed as autonomous agents — systems that can take real-world actions, access external tools, make API calls, execute code, send emails, and modify databases — without human review of each individual action.
            </p>

            <h2>The EU AI Act and the New Regulatory Reality</h2>
            <p>
              The European Union Artificial Intelligence Act entered into force in August 2024 and applies in full from August 2026. The UK is developing equivalent domestic legislation expected to be enacted in 2026-27. These regulatory frameworks create direct liability exposure for companies that develop, deploy, or use AI systems in ways that do not comply with the applicable requirements.
            </p>
            <p>
              Under the EU AI Act, high-risk AI systems — including those used in employment decisions, credit scoring, medical diagnosis, critical infrastructure, and law enforcement — must meet exacting requirements for transparency, data governance, human oversight, robustness, and accuracy. Providers and deployers of non-compliant high-risk AI systems face fines of up to €30 million or 6% of global annual turnover. The potential penalties exceed even those available under GDPR.
            </p>
            <p>
              VURA-INSURE AI-Agent Liability Insurance covers the legal defence costs, regulatory investigation costs, and fines (where insurable) arising from alleged violations of the EU AI Act, the proposed UK AI Governance and Transparency Act, and equivalent legislation in other jurisdictions where your AI systems operate.
            </p>

            <h2>Algorithmic Bias: The Civil Rights Risk of AI</h2>
            <p>
              One of the most significant and underappreciated AI liability risks is algorithmic bias — the systematic tendency of AI systems to produce outputs that discriminate against individuals on the basis of protected characteristics such as race, gender, age, disability, or religion. Algorithmic bias does not require discriminatory intent; it arises naturally from training data that reflects historical patterns of discrimination, or from model design choices that inadvertently encode disparate treatment.
            </p>
            <p>
              The practical consequences of algorithmic bias can be severe. An AI recruitment system that disproportionately rejects candidates from ethnic minority backgrounds may give rise to claims under the Equality Act 2010. An AI credit scoring model that systematically underscores female applicants may breach the Consumer Credit Act and the Equality Act. An AI system used in healthcare resource allocation that deprioritises elderly patients may generate regulatory and civil liability.
            </p>

            <h2>Autonomous Agents and the Control Problem</h2>
            <p>
              The emergence of truly autonomous AI agents — systems that can perceive their environment, reason about it, and take actions to achieve specified goals without step-by-step human instruction — creates liability risks that existing insurance frameworks are simply not equipped to address. When an autonomous agent causes harm, the liability analysis requires answering questions that traditional tort law and insurance law never contemplated.
            </p>
            <p>
              Who is liable when an autonomous trading agent executes a transaction that causes market disruption? When an autonomous customer service agent makes a commitment that the company is legally bound by? When an autonomous cybersecurity agent, instructed to neutralise a threat, causes collateral damage to third-party systems? When an autonomous agent deployed in a supply chain makes procurement decisions that cause economic loss to suppliers?
            </p>
            <p>
              VURA-INSURE has worked with leading AI law experts, including academic researchers and regulatory policy specialists, to develop coverage language that addresses these novel liability scenarios. Our policy covers both the direct losses caused by autonomous agent actions and the third-party claims that arise from them.
            </p>
            <blockquote>
              &quot;We are entering an era in which liability law will need to be completely reconceived for AI systems. The organisations that get ahead of this risk — both through technical governance and insurance — will have a significant competitive advantage.&quot; — VURA-INSURE Head of AI Risk
            </blockquote>

            <h2>Who Should Consider AI-Agent Liability Coverage?</h2>
            <p>
              AI-Agent Liability Insurance is relevant for any organisation that develops, deploys, or uses AI systems in ways that could cause harm to third parties. This includes: AI development companies and model providers; businesses deploying AI agents in customer-facing applications; organisations using AI in hiring, lending, or other high-stakes decisions; companies building autonomous systems for industrial automation or logistics; financial services firms using AI for trading or risk management; and healthcare organisations using AI for diagnosis or treatment recommendations.
            </p>
            <p>
              The policy can be purchased as a standalone product or as an extension to an existing VURA-INSURE Cyber Liability or Tech Professional Indemnity policy, with coverage seamlessly integrated to avoid gaps and overlaps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Be Among the First to Secure AI Coverage</h2>
          <p className="text-slate-600 mb-8">Our AI risk specialists will assess your AI deployment landscape and design coverage that keeps pace with the technology.</p>
          <Link href="/contact" className="btn-primary">
            Apply for AI-Agent Coverage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
