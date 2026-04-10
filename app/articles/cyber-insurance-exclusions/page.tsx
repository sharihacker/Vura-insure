import type { Metadata } from 'next';
import ArticleLayout from '@/components/shared/ArticleLayout';

export const metadata: Metadata = {
  title: '15 Cyber Insurance Exclusions That Will Shock You | VURA-INSURE',
  description: "From war exclusions to unencrypted device carve-outs, these 15 standard cyber insurance exclusions could leave you uninsured when you need coverage most. A complete analysis.",
};

export default function ExclusionsArticle() {
  return (
    <ArticleLayout
      category="Policy Analysis"
      categoryColor="bg-slate-50 text-slate-700"
      title="15 Cyber Insurance Exclusions That Will Shock You"
      excerpt="The small print of your cyber insurance policy contains exclusions that could leave you entirely uninsured in precisely the scenarios you are most worried about. A comprehensive analysis of the 15 exclusions that catch out even sophisticated buyers."
      author={{
        name: 'Robert Ashworth',
        title: 'D&O Coverage Director, VURA-INSURE & Former Partner, Clifford Chance LLP',
        bio: 'Robert Ashworth has spent 20 years analysing insurance policy wordings in coverage disputes. He has identified more cyber insurance exclusion surprises than perhaps any other practitioner in the UK market and now uses that knowledge to help VURA-INSURE clients avoid the traps.',
        credentials: ['Former Partner, Clifford Chance LLP', 'Insurance Coverage Specialist', 'Policy Wording Analyst', 'LLB London School of Economics'],
      }}
      date="January 2024"
      readTime="14 min read"
    >
      <p>
        The gap between what policyholders think their cyber insurance covers and what it actually covers has never been wider. As the cyber insurance market has hardened in response to escalating losses, insurers have introduced — often quietly and without fanfare — a range of exclusions and limitations that significantly narrow the coverage available for exactly the scenarios that are most likely to result in large claims. Understanding these exclusions is essential for any organisation that relies on cyber insurance as a meaningful component of its risk management programme.
      </p>

      <h2>The War and Hostile State Actor Exclusion</h2>
      <p>
        The most significant and controversial exclusion in the current cyber insurance market is the exclusion for war and hostile state actor cyber attacks. This exclusion achieved widespread notoriety following the 2017 NotPetya attack, in which several insurers argued that the attack — officially attributed by multiple governments to the Russian military — was an act of war and therefore excluded from coverage. The subsequent litigation resulted in conflicting court decisions in different jurisdictions, creating significant uncertainty about the scope of the exclusion.
      </p>
      <p>
        In 2023, Lloyd&apos;s of London issued a market bulletin mandating that all cyber policies include explicit war and state-actor exclusion language. The standardised language excludes losses arising from &quot;war, cyber war, or any state-sponsored or state-backed cyber attack.&quot; The challenge is that attribution of cyber attacks to state actors is contested, takes months or years, and is often never conclusive. An exclusion that depends on proving state attribution creates enormous uncertainty at precisely the moment when policyholders need coverage clarity.
      </p>

      <h2>The Unencrypted Device Exclusion</h2>
      <p>
        Many cyber policies exclude claims arising from data breaches involving unencrypted devices — laptops, USB drives, and portable storage media that are lost or stolen. This exclusion is straightforward in theory but creates significant practical problems. Many organisations do not have complete visibility into which devices hold personal or sensitive data, and a stolen laptop from a home working employee may trigger the exclusion even if the organisation has a corporate policy requiring encryption that was not followed in this specific instance.
      </p>

      <h2>The Prior Acts Exclusion</h2>
      <p>
        Standard cyber policies typically contain a &quot;prior acts&quot; exclusion that precludes coverage for incidents arising from events that occurred before the policy incept ion date. In theory, this is a reasonable risk allocation — the insurer should not be liable for losses arising from events that occurred before they took on the risk. In practice, this exclusion is frequently triggered in ways that policyholders do not anticipate.
      </p>
      <p>
        The most common problem arises with dwell-time breaches — the scenario in which an attacker has been in the network for months before the breach is discovered. If the attacker gained initial access before the policy inception date, the insurer may argue that the prior acts exclusion applies to the entire claim, even though the damage only became apparent after the policy began. VURA-INSURE addresses this by including a &quot;retroactive date&quot; provision that provides coverage for incidents discovered during the policy period regardless of when the initial compromise occurred — subject to a defined lookback period.
      </p>

      <h2>Ten More Exclusions to Watch</h2>
      <ul>
        <li><strong>Voluntary payment exclusion:</strong> Some policies exclude payments made voluntarily to third parties, which can include ransom payments</li>
        <li><strong>Bodily injury and property damage:</strong> Cyber policies typically exclude physical harm caused by cyber events — critical as OT/IoT systems converge</li>
        <li><strong>Infrastructure failure:</strong> Outages caused by internet or power infrastructure failure may not be covered</li>
        <li><strong>Contractual liability:</strong> Liability assumed under contract that exceeds your common law liability</li>
        <li><strong>Patent infringement:</strong> IP claims based on patent infringement are typically excluded</li>
        <li><strong>Insider trading:</strong> Securities violations associated with use of breached information</li>
        <li><strong>Criminal conduct:</strong> Claims involving intentional criminal acts by the insured</li>
        <li><strong>Professional liability overlap:</strong> Claims better suited to a PI policy may be excluded</li>
        <li><strong>Regulatory fine caps:</strong> Even where fines are covered, sublimits may be far below actual exposure</li>
        <li><strong>Pending and prior litigation:</strong> Known claims or circumstances at inception are excluded</li>
      </ul>
      <p>
        Understanding these exclusions in advance allows policyholders to negotiate more favourable terms, fill gaps with supplementary coverage, and take operational steps that reduce the likelihood of exclusions being triggered. VURA-INSURE&apos;s policy review service provides a detailed exclusion analysis for any existing cyber policy, identifying potential coverage gaps and proposing solutions.
      </p>
    </ArticleLayout>
  );
}
