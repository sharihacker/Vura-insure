'use client';

import { useState } from 'react';
import { Plus, X, Zap, Shield, Check, ArrowRight, TrendingUp, Lock, TriangleAlert as AlertTriangle } from 'lucide-react';

const POLICIES = [
  {
    id: 'cyber-essential',
    name: 'Cyber Essential',
    type: 'Cyber Liability',
    price: '£1,200/yr',
    cover: '£500K',
    rating: 4.3,
    color: 'from-blue-500 to-sky-400',
    features: ['Data Breach Response', 'Ransomware Coverage', 'Business Interruption', '24/7 Incident Hotline'],
    tag: 'Best for SMEs',
  },
  {
    id: 'cyber-elite',
    name: 'Cyber Elite',
    type: 'Cyber Liability',
    price: '£4,800/yr',
    cover: '£5M',
    rating: 4.8,
    color: 'from-blue-700 to-blue-500',
    features: ['All Essential features', 'Social Engineering', 'Regulatory Defence', 'Cyber Extortion', 'Reputational Recovery'],
    tag: 'Most Popular',
  },
  {
    id: 'do-executive',
    name: 'D&O Executive',
    type: 'Directors & Officers',
    price: '£3,600/yr',
    cover: '£10M',
    rating: 4.7,
    color: 'from-slate-700 to-slate-500',
    features: ['Personal Asset Protection', 'Securities Claims', 'Employment Practices', 'Crisis Communications'],
    tag: 'Leadership Shield',
  },
  {
    id: 'tech-pro',
    name: 'Tech Pro Indemnity',
    type: 'Professional Indemnity',
    price: '£2,100/yr',
    cover: '£2M',
    rating: 4.5,
    color: 'from-sky-600 to-cyan-400',
    features: ['Errors & Omissions', 'Intellectual Property', 'Contract Disputes', 'Defamation Coverage'],
    tag: 'Tech Specialists',
  },
  {
    id: 'ai-agent',
    name: 'AI-Agent Liability',
    type: 'AI & Emerging Tech',
    price: '£5,500/yr',
    cover: '£3M',
    rating: 4.9,
    color: 'from-blue-600 to-sky-500',
    features: ['Autonomous AI Errors', 'Algorithmic Bias', 'Third-Party AI Claims', 'Regulatory Breaches', 'Model Failure'],
    tag: 'Industry First',
  },
];

export default function RiskComparisonTool() {
  const [selected, setSelected] = useState<string[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const togglePolicy = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
      setAnalyzed(false);
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
      setAnalyzed(false);
    }
  };

  const handleAnalyze = () => {
    if (selected.length < 2) return;
    setAnalyzing(true);
    setTimeout(() => { setAnalyzing(false); setAnalyzed(true); }, 1800);
  };

  const selectedPolicies = POLICIES.filter((p) => selected.includes(p.id));
  const emptySlots = Math.max(0, 2 - selectedPolicies.length);

  return (
    <section id="compare" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">
            <TrendingUp className="w-3.5 h-3.5" /> Policy Comparison Engine
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Compare Insurance
            <span className="gradient-text"> Policies</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Select up to 3 policies to perform an AI-powered risk-coverage analysis. Discover gaps before they become costly claims.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Select Policies to Compare</h3>
              <p className="text-sm text-slate-500 mt-0.5">{selected.length}/3 selected</p>
            </div>
            {selected.length >= 2 && (
              <button
                onClick={handleAnalyze}
                disabled={analyzing}
                className="btn-primary text-sm py-2.5 px-6 rounded-xl"
              >
                {analyzing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Analyze Coverage
                  </span>
                )}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {POLICIES.map((policy) => {
              const isSelected = selected.includes(policy.id);
              return (
                <button
                  key={policy.id}
                  onClick={() => togglePolicy(policy.id)}
                  className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-200 hover-lift ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/60 shadow-md shadow-blue-100'
                      : selected.length >= 3
                      ? 'border-slate-100 bg-slate-50/50 opacity-50 cursor-not-allowed'
                      : 'border-slate-200/70 bg-white/50 hover:border-blue-300 hover:bg-blue-50/30'
                  }`}
                  disabled={!isSelected && selected.length >= 3}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  )}
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${policy.color} flex items-center justify-center mb-3`}>
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{policy.type}</div>
                  <div className="text-sm font-bold text-slate-900 mb-1">{policy.name}</div>
                  <div className="text-xs text-slate-500 mb-2">Cover: {policy.cover}</div>
                  <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold">
                    {policy.tag}
                  </div>
                  <div className="mt-2 text-xs font-bold text-slate-700">{policy.price}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {selectedPolicies.map((policy) => (
            <div key={policy.id} className="glass-card rounded-3xl p-6 hover-lift relative">
              <button
                onClick={() => togglePolicy(policy.id)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-red-50 flex items-center justify-center transition-colors group"
              >
                <X className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-500" />
              </button>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${policy.color} mb-4`}>
                <Shield className="w-3 h-3" /> {policy.type}
              </div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-black text-slate-900">{policy.name}</h4>
                  <div className="text-sm text-slate-500 mt-0.5">Up to {policy.cover} coverage</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-blue-700">{policy.price}</div>
                  <div className="flex items-center gap-1 justify-end mt-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <div key={s} className={`w-2 h-2 rounded-full ${s <= Math.floor(policy.rating) ? 'bg-amber-400' : 'bg-slate-200'}`} />
                    ))}
                    <span className="text-xs text-slate-500 ml-1">{policy.rating}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5">
                {policy.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <div key={i} className="rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center py-16 hover:border-blue-300 transition-colors cursor-pointer group" onClick={() => {}}>
              <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-slate-300 group-hover:border-blue-400 flex items-center justify-center mb-4 transition-colors">
                <Plus className="w-7 h-7 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <p className="text-sm font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">Add Policy</p>
              <p className="text-xs text-slate-300 mt-1">Select from above</p>
            </div>
          ))}
        </div>

        {analyzed && selectedPolicies.length >= 2 && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-green-200/60 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">AI Coverage Analysis Complete</h4>
                <p className="text-sm text-slate-500">Comparing {selectedPolicies.map(p => p.name).join(' vs ')}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50/60 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-bold text-green-800">Best Value</span>
                </div>
                <div className="text-lg font-black text-slate-900">{selectedPolicies[0].name}</div>
                <div className="text-xs text-slate-500 mt-1">Optimal cost-to-coverage ratio for your risk profile</div>
              </div>
              <div className="bg-blue-50/60 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-blue-800">Widest Cover</span>
                </div>
                <div className="text-lg font-black text-slate-900">{selectedPolicies[selectedPolicies.length - 1].name}</div>
                <div className="text-xs text-slate-500 mt-1">Maximum protection across all risk categories</div>
              </div>
              <div className="bg-amber-50/60 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-bold text-amber-800">Coverage Gap</span>
                </div>
                <div className="text-lg font-black text-slate-900">AI Liability</div>
                <div className="text-xs text-slate-500 mt-1">Neither policy covers autonomous AI system failures</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/contact" className="btn-primary flex-1 text-center justify-center text-sm">
                Get Expert Advice <ArrowRight className="w-4 h-4" />
              </a>
              <button onClick={() => { setAnalyzed(false); setSelected([]); }} className="btn-ghost flex-1 text-center justify-center text-sm">
                Start New Comparison
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
