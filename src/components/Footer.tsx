import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer
      id="main-footer"
      className="bg-[#0A0708] border-t border-red-950/40 mt-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-12 py-8 max-w-[1100px] mx-auto gap-6">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded-[2px] rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-[0.5px]"></div>
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            © 2025 {PERSONAL_INFO.name}. Geometric Balance Architecture.
          </p>
          <p className="text-xs text-slate-500 font-mono mt-1">
            {PERSONAL_INFO.status}
          </p>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center space-x-6 text-xs font-semibold">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin-link"
            className="text-slate-400 hover:text-red-400 transition-colors tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github-link"
            className="text-slate-400 hover:text-red-400 transition-colors tracking-wide"
          >
            GitHub
          </a>
          <button
            type="button"
            id="footer-email-link"
            onClick={onOpenContact}
            className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer tracking-wide"
          >
            Email
          </button>
        </div>
      </div>
    </footer>
  );
};

