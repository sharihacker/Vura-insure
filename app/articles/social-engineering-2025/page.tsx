import type { Metadata } from 'next';
import ArticleLayout from '@/components/shared/ArticleLayout';

export const metadata: Metadata = {
  title: 'Social Engineering in 2025: AI-Powered Attacks Explained | VURA-INSURE',
  description: 'AI-generated deepfakes, voice cloning, and hyper-personalised phishing are making social engineering attacks 300% more effective. A complete threat analysis and insurance coverage guide.',
};

export default function SocialEngineeringArticle() {
  return (
    <ArticleLayout
      category="Threat Intelligence"
      categoryColor="bg-red-50 text-red-700"
      title="Social Engineering in 2025: AI-Powered Attacks Explained"
      excerpt="AI-generated deepfakes, voice cloning, and hyper-personalised spear-phishing are making social engineering 300% more effective than traditional attacks. Here is how the threat has evolved and what insurance coverage is available."
      author={{
        name: 'Dr. Priya Sharma',
        title: "Chief Actuary, VURA-INSURE & Former Head of Quantitative Risk, Lloyd's of London",
        bio: "Dr. Sharma's actuarial work focuses on quantifying emerging technology risks, including the rapidly evolving threat posed by AI-enhanced social engineering attacks. Her research on AI fraud risk has been cited by the UK NCSC and published in the Journal of Risk Management.",
        credentials: ["FIA (Fellow, Institute and Faculty of Actuaries)", "AI Fraud Risk Researcher", "NCSC Advisory Panel", "PhD Statistics, Imperial College London"],
      }}
      date="July 2024"
      readTime="10 min read"
    >
      <p>
        In January 2024, an employee at a multinational corporation&apos;s Hong Kong office was tricked into transferring $25 million after attending a video conference call with what appeared to be the company&apos;s CFO and several senior colleagues. The call was entirely fake — every participant, including the CFO, was a deepfake created using AI. The employee&apos;s reasonable request to verify the transfer by seeing the CFO&apos;s face on video was answered with a convincing AI-generated simulation.
      </p>
      <p>
        This case, widely reported in February 2024, represents the bleeding edge of AI-enhanced social engineering. But the underlying phenomenon — using AI to make social engineering attacks more convincing, more targeted, and more scalable — is not a future threat. It is happening right now, at scale, against businesses of all sizes.
      </p>

      <h2>The Three AI-Enhancement Vectors</h2>
      <p>
        AI is enhancing social engineering attacks through three primary mechanisms. <strong>Hyper-personalisation</strong> uses large language models trained on publicly available information about target individuals — LinkedIn profiles, company websites, social media, news articles, and industry publications — to craft phishing emails and messages that are indistinguishable from genuine communications. Traditional phishing relied on generic templates; AI-powered spear-phishing creates individually tailored messages that reference specific colleagues, ongoing projects, and personal interests.
      </p>
      <p>
        <strong>Voice cloning</strong> uses AI audio synthesis to create convincing imitations of specific individuals&apos; voices from relatively short audio samples — in some cases, as little as three seconds of audio from a public recording. Voice-cloned calls are increasingly used for business email compromise attacks, where an attacker who has identified a target from social media will impersonate a CEO or CFO calling to authorise an urgent payment.
      </p>
      <p>
        <strong>Deepfake video</strong> extends voice cloning to real-time video, allowing attackers to conduct convincing video calls that impersonate executives, clients, or professional advisers. While the technology is not yet perfect — careful observers can sometimes detect artefacts — it is sufficient to deceive most people in normal business circumstances, particularly when the content of the call is consistent with a plausible business request.
      </p>

      <h2>The Insurance Coverage Question</h2>
      <p>
        Social engineering attacks present complex coverage questions that depend on the specific type of attack and the policy wording. Business email compromise and fraudulent instruction attacks — where an employee is tricked into authorising a financial transfer — are covered under VURA-INSURE&apos;s cyber policy under the &quot;Social Engineering and Fraud&quot; extension, subject to a sublimit that reflects the moral hazard inherent in this type of coverage.
      </p>
      <p>
        Deepfake attacks that result in data disclosure — for example, where an employee shares confidential documents believing they are responding to a legitimate request from a senior executive — typically trigger the data breach coverage under a cyber policy, as the confidential data has been disclosed to an unauthorised party.
      </p>
      <p>
        The most important mitigation against social engineering attacks is not technical but procedural: robust verification procedures for any request involving financial transfers, credential sharing, or access to sensitive data. The Hong Kong deepfake case was enabled by the absence of a verification procedure requiring callback to a known number for large transfers. Implementing such procedures is both good security practice and a requirement of many cyber insurance policies&apos; social engineering coverage extensions.
      </p>
    </ArticleLayout>
  );
}
