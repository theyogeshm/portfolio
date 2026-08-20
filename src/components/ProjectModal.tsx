import React from 'react';
import { X, ExternalLink, Activity, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-modal-card"
        className="bg-[#0E0A0C] border border-red-500/40 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-xl shadow-2xl active-glow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

        {/* Close Button */}
        <button
          type="button"
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-zinc-800/60"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-2">
          <span className="bg-red-500/10 px-2.5 py-1 text-xs font-semibold text-red-300 border border-red-500/30 rounded uppercase tracking-wider">
            {project.status}
          </span>
          <span className="text-xs text-slate-500 font-mono">NODE::{project.id.toUpperCase()}</span>
        </div>

        <h3
          id="project-modal-title"
          className="text-2xl font-bold text-white mb-4 tracking-tight"
        >
          {project.title}
        </h3>

        {/* Project Preview Image */}
        {project.image && (
          <div className="mb-5 rounded-lg overflow-hidden border border-zinc-800 bg-[#060506] shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[300px] object-cover object-top"
            />
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#140C0E] border border-zinc-800 px-2.5 py-1 text-xs font-mono text-slate-300 rounded uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {project.longDescription || project.description}
        </p>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-1.5 font-mono">
              <Activity className="w-3.5 h-3.5 text-red-400" /> Benchmarks & Performance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-[#140C0E]/90 border border-zinc-800 p-3.5 rounded-lg text-center"
                >
                  <div className="text-lg font-bold text-white">{metric.value}</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Pipeline */}
        {project.architectureOverview && (
          <div className="mb-6 bg-[#140C0E]/90 border border-zinc-800 rounded-lg p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-1.5 font-mono">
              <Layers className="w-3.5 h-3.5 text-red-400" /> System Architecture Pipeline
            </h4>
            <div className="text-xs font-mono text-slate-300 bg-[#060506] p-3.5 border border-zinc-800 rounded overflow-x-auto leading-relaxed">
              {project.architectureOverview}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-1.5 font-mono">
              <Cpu className="w-3.5 h-3.5 text-red-400" /> Core Technical Implementations
            </h4>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-red-400 mr-2 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between pt-4 border-t border-zinc-800 gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-500 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg active-glow transition-colors cursor-pointer gap-1.5"
              >
                <span>Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-zinc-900 border border-zinc-700 hover:border-red-500/80 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer gap-1.5"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border border-zinc-800 hover:border-red-500/60 text-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

