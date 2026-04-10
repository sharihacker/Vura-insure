import { User, Linkedin, Twitter } from 'lucide-react';

interface ExpertAuthorBoxProps {
  name: string;
  title: string;
  bio: string;
  credentials: string[];
}

export default function ExpertAuthorBox({ name, title, bio, credentials }: ExpertAuthorBoxProps) {
  return (
    <div className="expert-box my-10">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow-md">
          <User className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Expert Author</p>
              <h4 className="text-lg font-bold text-slate-900">{name}</h4>
              <p className="text-sm text-slate-600 mb-3">{title}</p>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors">
                <Linkedin className="w-4 h-4 text-blue-700" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center cursor-pointer hover:bg-sky-100 transition-colors">
                <Twitter className="w-4 h-4 text-sky-600" />
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">{bio}</p>
          <div className="flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span key={c} className="px-2.5 py-1 rounded-full bg-white border border-blue-100 text-xs font-medium text-blue-700">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
