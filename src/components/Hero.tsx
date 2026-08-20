import React, { useState } from 'react';
import { Code, Link2, Mail, MapPin, Check, Copy, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero-section"
      className="py-10 md:py-14 border-b border-zinc-800/80 relative overflow-hidden"
    >
      {/* Subtle Crimson Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
        {/* Left Column: User Profile Photo */}
        <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start">
          <div
            id="hero-profile-card"
            className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-none bg-[#0E0A0C] border border-red-500/40 rounded-2xl p-3 shadow-2xl active-glow-lg overflow-hidden group"
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

            {/* Photo Container */}
            <div className="overflow-hidden rounded-xl bg-[#060506] relative border border-zinc-800">
              <img
                src={PERSONAL_INFO.profileImage}
                alt="Yogesh Kumar"
                className="w-full h-[340px] sm:h-[370px] md:h-[380px] object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              {/* Geometric Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-[#060506]/90 backdrop-blur-sm border border-red-500/30 rounded-lg text-center">
                <span className="text-[11px] font-mono font-bold text-red-400 tracking-wider uppercase block">
                  Yogesh Kumar • DTU CSE
                </span>
              </div>
            </div>

            {/* Status Footer */}
            <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-red-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                DTU 2nd Year
              </span>
              <span className="text-slate-500">New Delhi</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Headline & Details */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
          {/* Geometric Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-500/40 rounded-full text-red-300 text-xs font-mono uppercase tracking-wider mb-5 w-fit active-glow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Computer Vision & Systems Architect</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">DTU Core</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-headline"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white leading-[1.12] tracking-tight mb-4"
          >
            {PERSONAL_INFO.headline}
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-base sm:text-lg text-slate-300 mb-8 font-normal leading-relaxed"
          >
            {PERSONAL_INFO.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-lg shadow-lg active-glow active:scale-[0.98] transition-all cursor-pointer"
            >
              View Projects
            </a>
            <button
              type="button"
              id="hero-contact-btn"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center border border-zinc-800 hover:border-red-500/80 text-slate-200 px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-red-950/30 active:scale-[0.98] transition-all cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Metadata & Quick Links */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-slate-400 text-xs pt-4 border-t border-zinc-800/80">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-link-github"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors"
            >
              <Code className="w-4 h-4 text-red-400" />
              <span className="font-semibold tracking-wider">GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-link-linkedin"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors"
            >
              <Link2 className="w-4 h-4 text-red-400" />
              <span className="font-semibold tracking-wider">LinkedIn</span>
            </a>

            <button
              type="button"
              id="hero-link-email"
              onClick={handleCopyEmail}
              title="Click to copy email address"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Mail className="w-4 h-4 text-red-400" />
              )}
              <span className="font-semibold tracking-wider">
                {copiedEmail ? 'Copied Email!' : PERSONAL_INFO.email}
              </span>
            </button>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              id="hero-link-phone"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span className="font-semibold tracking-wider">{PERSONAL_INFO.phone}</span>
            </a>

            <div
              id="hero-location-badge"
              className="flex items-center space-x-2 text-slate-500"
            >
              <MapPin className="w-4 h-4 text-red-400" />
              <span className="font-semibold tracking-wider">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
