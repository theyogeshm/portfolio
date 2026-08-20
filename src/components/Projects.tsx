import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ChevronRight, Layers, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-10 md:py-14 border-b border-zinc-800/80"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-[2px] rotate-45"></div>
          <h2
            id="projects-heading"
            className="text-2xl md:text-3xl font-bold text-white tracking-tight"
          >
            Projects
          </h2>
        </div>
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          {PROJECTS.length} PRODUCTION DEPLOYMENTS
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="border border-zinc-800/80 p-5 sm:p-6 bg-[#0E0A0C] rounded-xl hover:border-red-500/70 active-glow relative overflow-hidden transition-all duration-300 group cursor-pointer"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 group-hover:bg-red-600 transition-colors"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Project Image Preview */}
              {project.image && (
                <div className="md:col-span-5">
                  <div className="rounded-lg overflow-hidden border border-zinc-800 bg-[#060506] aspect-[16/10] relative group-hover:border-red-500/50 shadow-md transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className={project.image ? "md:col-span-7 flex flex-col justify-between" : "md:col-span-12"}>
                <div>
                  {/* Top Row: Title & Status */}
                  <div className="flex justify-between items-start mb-2.5 gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="bg-red-500/10 px-2.5 py-0.5 text-xs font-semibold text-red-300 border border-red-500/30 rounded uppercase tracking-wider shrink-0 active-glow-sm">
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#140C0E] border border-zinc-800 px-2.5 py-1 text-xs font-mono text-slate-300 rounded tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Prompt & Direct Links */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-800/80">
                  <div className="flex items-center text-xs font-semibold text-red-400 opacity-90 group-hover:text-red-300 group-hover:translate-x-1 transition-all">
                    <span>View Key Highlights & Metrics</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>

                  <div className="flex items-center gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-red-600/90 hover:bg-red-500 text-white px-2.5 py-1 rounded transition-colors cursor-pointer"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-slate-200 px-2.5 py-1 rounded border border-zinc-700 transition-colors cursor-pointer"
                      >
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

