'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CircleCheck as CheckCircle, Shield, Zap } from 'lucide-react';

const contactReasons = [
  'Request a Policy Quote',
  'Report a Cyber Incident',
  'Policy Query or Amendment',
  'Claims Enquiry',
  'Media / Press Enquiry',
  'Partnership Opportunity',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', reason: '', message: '', consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4 mb-4">
            Talk to a Coverage
            <span className="gradient-text"> Specialist</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Whether you need a quote, have a question about your existing policy, or are facing an active cyber incident — we are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Message Received</h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Thank you for contacting VURA-INSURE. A specialist will review your enquiry and respond within 4 business hours. For urgent cyber incidents, please call our emergency hotline.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-ghost">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                        placeholder="Dr. Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                        placeholder="Acme Technology Ltd"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                        placeholder="+44 20 7000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Reason for Enquiry *</label>
                    <select
                      required
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                    >
                      <option value="">Select a reason...</option>
                      {contactReasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-none"
                      placeholder="Please describe your insurance needs, current coverage, or the incident you are reporting..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                      I consent to VURA-INSURE processing my personal data to respond to this enquiry, in accordance with the{' '}
                      <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>. I understand I can withdraw consent at any time.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 justify-center"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                  <Zap className="w-4.5 h-4.5 text-red-600 w-[18px] h-[18px]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider">Emergency</p>
                  <p className="text-sm font-bold text-slate-900">24/7 Incident Hotline</p>
                </div>
              </div>
              <a href="tel:+442079460958" className="block text-xl font-black text-slate-900 mt-3 hover:text-blue-700 transition-colors">
                +44 (0)20 7946 0958
              </a>
              <p className="text-xs text-slate-500 mt-2">Available 24 hours, 365 days. Press 1 for active cyber incidents.</p>
            </div>

            {[
              { icon: Mail, label: 'General Enquiries', value: 'hello@vura-insure.com', href: 'mailto:hello@vura-insure.com' },
              { icon: Phone, label: 'Office Direct', value: '+44 (0)20 7946 0900', href: 'tel:+442079460900' },
            ].map((c) => (
              <div key={c.label} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-4.5 h-4.5 text-blue-600 w-[18px] h-[18px]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{c.label}</p>
                  <a href={c.href} className="text-sm font-semibold text-slate-800 hover:text-blue-700 transition-colors">{c.value}</a>
                </div>
              </div>
            ))}

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5 w-[18px] h-[18px]" />
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-1">London Office</p>
                  <p className="text-sm text-slate-700 leading-relaxed">1 Fintech Square<br />London, EC2V 8RF<br />United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Clock className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5 w-[18px] h-[18px]" />
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-1">Office Hours</p>
                  <p className="text-sm text-slate-700">Monday–Friday: 08:30–18:00</p>
                  <p className="text-sm text-slate-700">Emergency: 24/7/365</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
