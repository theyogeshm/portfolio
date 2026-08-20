import React, { useState } from 'react';
import { X, Printer, GraduationCap, Code2, Briefcase, Award, Flame, Phone, Mail, MapPin, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION_DATA, CERTIFICATIONS_DATA, EXTRACURRICULAR_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'dossier'>('pdf');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="resume-modal-card"
        className="bg-[#0E0A0C] border border-red-500/40 w-full max-w-6xl w-[96vw] h-[92vh] flex flex-col rounded-xl shadow-2xl active-glow-lg relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-zinc-800 bg-[#0A0708] gap-3">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Yogesh Kumar • Resume PDF
            </span>

            {/* View Switcher Pills */}
            <div className="hidden sm:inline-flex bg-[#160B0E] p-1 rounded-lg border border-zinc-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-md transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF Document
              </button>
              <button
                type="button"
                onClick={() => setViewMode('dossier')}
                className={`px-3 py-1 rounded-md transition-all ${
                  viewMode === 'dossier'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Interactive Dossier
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/Yogesh_Kumar_Resume.pdf"
              download="Yogesh_Kumar_Resume.pdf"
              className="inline-flex items-center px-3 py-1.5 border border-zinc-800 text-xs font-semibold text-slate-200 hover:text-red-300 hover:border-red-500/70 hover:bg-red-950/30 transition-all rounded-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 mr-1.5 text-red-400" />
              Download PDF
            </a>

            <a
              href="/Yogesh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 border border-zinc-800 text-xs font-semibold text-slate-200 hover:text-red-300 hover:border-red-500/70 hover:bg-red-950/30 transition-all rounded-md cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-red-400" />
              Open New Tab
            </a>

            <button
              type="button"
              id="resume-print-btn"
              onClick={handlePrint}
              className="hidden md:inline-flex items-center px-3 py-1.5 border border-zinc-800 text-xs font-semibold text-slate-300 hover:text-red-300 hover:border-red-500/70 transition-colors rounded-md cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 mr-1.5 text-red-400" />
              Print
            </button>

            <button
              type="button"
              id="resume-close-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-zinc-800"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="sm:hidden flex bg-[#0A0708] border-b border-zinc-800 p-2 justify-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode('pdf')}
            className={`px-3 py-1 text-xs font-semibold rounded-md ${
              viewMode === 'pdf' ? 'bg-red-600 text-white' : 'text-slate-400'
            }`}
          >
            PDF Document
          </button>
          <button
            type="button"
            onClick={() => setViewMode('dossier')}
            className={`px-3 py-1 text-xs font-semibold rounded-md ${
              viewMode === 'dossier' ? 'bg-red-600 text-white' : 'text-slate-400'
            }`}
          >
            Interactive Dossier
          </button>
        </div>

        {/* Modal Content Body */}
        {viewMode === 'pdf' ? (
          /* PDF Viewer Embed */
          <div className="p-2 sm:p-3 bg-[#060506] flex-1 w-full h-full flex flex-col">
            <iframe
              src="/Yogesh_Kumar_Resume.pdf#toolbar=1&navpanes=0&view=FitH"
              title="Yogesh Kumar Resume PDF"
              className="w-full h-full min-h-[75vh] rounded-lg border border-zinc-800 shadow-lg bg-white"
            />
          </div>
        ) : (
          /* Interactive Dossier View */
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-left text-slate-300">
            {/* Header Contact Block */}
            <div className="border-b border-zinc-800/80 pb-6">
              <h1 className="text-3xl font-bold text-white tracking-tight">YOGESH KUMAR</h1>
              <p className="text-sm font-semibold text-red-300 mt-1">
                B.Tech in Computer Science & Engineering • Delhi Technological University (DTU)
              </p>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                Duration: 2025 – 2029 (Expected) • Currently in 2nd Year
              </p>
              
              <div className="mt-4 flex flex-wrap gap-y-2 gap-x-5 text-xs text-slate-300 font-mono">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-slate-400">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                  LinkedIn: linkedin.com/in/theyogeshm
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                  GitHub: github.com/theyogeshm
                </a>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2 font-mono">
                <GraduationCap className="w-4 h-4 text-red-400" /> Education History
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu, i) => (
                  <div key={i} className="bg-[#140C0E]/80 border border-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                      <span className="text-xs font-mono text-red-300 font-semibold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {edu.institution} {edu.grade && <span className="text-red-400 font-bold ml-1">• {edu.grade}</span>}
                    </div>
                    {edu.details && <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2 font-mono">
                <Briefcase className="w-4 h-4 text-red-400" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="bg-[#140C0E]/80 border border-zinc-800 rounded-lg p-3.5 text-xs">
                    <div className="font-bold text-red-300 mb-1">{cat.title}</div>
                    <div className="text-slate-300 leading-normal">{cat.skills.join(', ')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2 font-mono">
                <Code2 className="w-4 h-4 text-red-400" /> Engineering Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="bg-[#140C0E]/80 border border-zinc-800 rounded-lg p-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                      <span className="text-xs text-red-300 font-mono">[{proj.tags.join(', ')}]</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                      {proj.longDescription || proj.description}
                    </p>
                    {proj.keyFeatures && (
                      <ul className="text-xs text-slate-400 list-disc list-inside space-y-1">
                        {proj.keyFeatures.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Coursework */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2 font-mono">
                <Award className="w-4 h-4 text-red-400" /> Certifications & Coursework
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <div key={idx} className="bg-[#140C0E]/80 border border-zinc-800 rounded-lg p-3.5 text-xs">
                    <div className="font-bold text-white flex justify-between items-center mb-1">
                      <span>{cert.title}</span>
                      <span className="text-[10px] text-red-300 font-mono font-semibold bg-red-500/10 px-1.5 py-0.5 rounded">
                        {cert.issuer}
                      </span>
                    </div>
                    <div className="text-slate-400 text-[11px] leading-relaxed">{cert.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Activities */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2 font-mono">
                <Flame className="w-4 h-4 text-red-400" /> Extracurricular Activities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRACURRICULAR_DATA.map((extra, idx) => (
                  <div key={idx} className="bg-[#140C0E]/80 border border-zinc-800 rounded-lg p-3.5 text-xs">
                    <div className="font-bold text-red-300 mb-1">{extra.category}</div>
                    <div className="text-slate-300 text-[11px] leading-relaxed">{extra.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-[#0A0708] flex justify-between items-center">
          <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Candidate Dossier :: Verified DTU Student</span>
          <button
            type="button"
            onClick={onClose}
            className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-lg active-glow transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
