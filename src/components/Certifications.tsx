import React from 'react';
import { CERTIFICATIONS_DATA, EXTRACURRICULAR_DATA } from '../data/portfolioData';
import { Award, Trophy, CheckCircle, Flame } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-10 md:py-14 border-b border-zinc-800/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Certifications & Coursework */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-2.5 bg-red-600 rounded-[2px] rotate-45"></div>
            <h2
              id="certifications-heading"
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
            >
              Certifications & Coursework
            </h2>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                id={`cert-card-${idx}`}
                className="bg-[#0E0A0C] border border-zinc-800/80 rounded-xl p-5 hover:border-red-500/60 transition-all duration-200 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-zinc-800 group-hover:bg-red-600 transition-colors"></div>
                <div className="flex items-start justify-between gap-3 mb-1.5 pl-2">
                  <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors flex items-center gap-2">
                    <Award className="w-4 h-4 text-red-400 shrink-0" />
                    {cert.title}
                  </h3>
                  <span className="bg-red-500/10 border border-red-500/30 text-red-300 text-[10px] font-mono font-semibold px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                    {cert.issuer}
                  </span>
                </div>
                <p className="text-xs text-slate-400 pl-8 leading-relaxed">
                  {cert.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Extracurricular & Activities */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-2.5 bg-red-600 rounded-[2px] rotate-45"></div>
            <h2
              id="extracurricular-heading"
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
            >
              Extracurricular & Arts
            </h2>
          </div>

          <div className="space-y-4">
            {EXTRACURRICULAR_DATA.map((extra, idx) => (
              <div
                key={idx}
                id={`extra-card-${idx}`}
                className="bg-[#0E0A0C] border border-zinc-800/80 rounded-xl p-5 hover:border-red-500/60 transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-red-400 uppercase tracking-wider mb-2">
                  <Flame className="w-3.5 h-3.5 text-red-400" />
                  {extra.category}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {extra.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
