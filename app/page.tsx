import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import RiskComparisonTool from '@/components/home/RiskComparisonTool';
import ServicesGrid from '@/components/home/ServicesGrid';
import StatsSection from '@/components/home/StatsSection';
import TrustSection from '@/components/home/TrustSection';
import ArticlesPreview from '@/components/home/ArticlesPreview';
import CtaBanner from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'VURA-INSURE | Intelligent Cyber & Tech Insurance Solutions',
  description:
    'The leading InsurTech platform for cyber liability, executive D&O, data breach recovery, tech indemnity, and AI-agent insurance. Compare policies in seconds.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RiskComparisonTool />
      <ServicesGrid />
      <TrustSection />
      <ArticlesPreview />
      <CtaBanner />
    </>
  );
}
