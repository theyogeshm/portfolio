import React from 'react';
import { ABOUT_TEXT, PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import { Compass, Cpu, GraduationCap, Award, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-10 md:py-14 border-b border-zinc-800/80"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2.5 h-2.5 bg-red-600 rounded-[2px] rotate-45"></div>
        <h2
          id="about-heading"
          className="text-2xl md:text-3xl font-bold text-white tracking-tight"
        >
          About & Education
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Bio Text Card */}
        <div className="lg:col-span-6 bg-[#0E0A0C] border border-zinc-800/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600/80"></div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-red-400" /> Engineering Profile
            </h3>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
              <p id="about-bio-p1">
                {ABOUT_TEXT.p1}
              </p>
              <p id="about-bio-p2" className="text-slate-400">
                {ABOUT_TEXT.p2}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs pt-4 border-t border-zinc-800/80">
            <div className="border border-zinc-800 bg-[#160B0E]/80 p-3.5 rounded-lg">
              <div className="flex items-center space-x-1.5 text-red-400 mb-1 font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Specialization</span>
              </div>
              <p className="text-slate-400">Computer Vision & ML</p>
            </div>

            <div className="border border-zinc-800 bg-[#160B0E]/80 p-3.5 rounded-lg">
              <div className="flex items-center space-x-1.5 text-red-400 mb-1 font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Institution</span>
              </div>
              <p className="text-slate-400">DTU, New Delhi</p>
            </div>
          </div>
        </div>

        {/* Education Breakdown Card */}
        <div
          id="about-education-card"
          className="lg:col-span-6 bg-[#0E0A0C] border border-zinc-800/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600/80"></div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-red-400" /> Academic Credentials
            </h3>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#140C0E]/90 border border-zinc-800 rounded-lg p-4 relative"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono text-red-300 font-semibold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium mb-1">
                    {edu.institution} {edu.grade && <span className="text-red-400 font-bold ml-1">• {edu.grade}</span>}
                  </div>
                  {edu.details && (
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              DTU CSE Core (2nd Year)
            </span>
            <span>Academic Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};
