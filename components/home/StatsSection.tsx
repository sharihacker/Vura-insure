import { TrendingUp, TriangleAlert as AlertTriangle, Globe, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: '$10.5T',
    label: 'Global Cybercrime Cost by 2025',
    subtext: 'World Economic Forum, 2024',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: AlertTriangle,
    value: '74%',
    label: 'Rise in Ransomware Attacks',
    subtext: 'Year-on-year increase, 2024',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Globe,
    value: '43%',
    label: 'of SMEs Targeted by Cyber Attacks',
    subtext: 'NCSC Cyber Breaches Survey 2024',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: TrendingUp,
    value: '194',
    label: 'Average Days to Detect a Breach',
    subtext: 'IBM Cost of a Data Breach 2024',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5 hover-lift">
              <div className={`inline-flex w-10 h-10 rounded-xl ${stat.bg} items-center justify-center mb-4`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} strokeWidth={2} />
              </div>
              <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm font-semibold text-slate-800 mb-1 leading-snug">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
