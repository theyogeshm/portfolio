import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-10 md:py-14 border-b border-zinc-800/80"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2.5 h-2.5 bg-red-600 rounded-[2px] rotate-45"></div>
        <h2
          id="skills-heading"
          className="text-2xl md:text-3xl font-bold text-white tracking-tight"
        >
          Technical Expertise
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            id={`skill-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            className="bg-[#0E0A0C] border border-zinc-800/80 rounded-xl p-5 sm:p-6 relative overflow-hidden group hover:border-red-500/50 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-3.5">
              <h3 className="text-lg md:text-xl font-bold text-red-400 tracking-tight">
                {category.title}
              </h3>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                {category.skills.length} MODULES
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#140C0E] border border-zinc-800/90 px-3.5 py-1.5 text-xs font-medium text-slate-200 rounded-md tracking-wider hover:border-red-500/70 hover:text-red-300 hover:bg-red-500/10 transition-all select-none cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

