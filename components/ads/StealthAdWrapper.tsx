'use client';

import { useEffect, useRef, useState } from 'react';
import { Zap, ShieldAlert } from 'lucide-react';
import type { AdSlot } from '@/config/ad-slots';

interface StealthAdWrapperProps {
  slot: AdSlot;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function StealthAdWrapper({ slot, className = '' }: StealthAdWrapperProps) {
  const [adDetected, setAdDetected] = useState(false);
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        setAdDetected(true);
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch {}
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (adDetected) {
    return (
      <div className={`overflow-hidden ${className}`} ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: slot.width, height: slot.height }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot.slot}
          data-ad-format={slot.format}
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  return (
    <div className={`stealth-ad p-5 ${className}`} ref={adRef}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
          <ShieldAlert className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{slot.label}</span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-700">
              <Zap className="w-2.5 h-2.5" /> LIVE
            </span>
          </div>
          <p className="text-xs font-bold text-slate-700 mb-1.5">Did you know?</p>
          <p className="text-xs text-slate-600 leading-relaxed">{slot.threatFact}</p>
          <div className="mt-3 pt-3 border-t border-sky-200/60 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-medium">Cyber Threat Intelligence by VURA-INSURE</span>
            <span className="text-[10px] text-slate-400">Sponsored</span>
          </div>
        </div>
      </div>
    </div>
  );
}
