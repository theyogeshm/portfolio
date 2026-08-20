import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenContact,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-50 w-full border-b border-red-950/40 transition-colors duration-200 ${
        scrolled ? 'bg-[#0A0708]/95 backdrop-blur-md' : 'bg-[#0A0708]'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand Name with Geometric Icon */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-3 text-lg md:text-xl font-bold tracking-tight text-white group"
        >
          <div className="w-6 h-6 bg-red-600 rounded-[3px] rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-300 shadow-[0_0_12px_rgba(239,68,68,0.5)]">
            <div className="w-2.5 h-2.5 bg-white rounded-[1px]"></div>
          </div>
          <span className="group-hover:text-red-400 transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase()}`}
              className="text-xs font-semibold tracking-wider text-slate-400 hover:text-red-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons: Theme Toggle & Resume */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            type="button"
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            className="p-2 border border-zinc-800 text-slate-300 rounded-md hover:border-red-500/80 hover:text-red-400 hover:bg-red-950/30 transition-all cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            type="button"
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center justify-center px-3.5 py-1.5 border border-zinc-800 text-slate-200 text-xs font-semibold tracking-wider rounded-md hover:border-red-500/80 hover:text-red-300 hover:bg-red-950/30 active:scale-[0.98] transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 mr-1.5 text-red-400" />
            Resume
          </button>
        </div>

        {/* Mobile Actions & Menu Trigger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            type="button"
            id="theme-toggle-mobile-btn"
            onClick={onToggleTheme}
            className="p-1.5 border border-zinc-800 text-slate-300 rounded-md hover:border-red-500"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            type="button"
            id="nav-resume-mobile-btn"
            onClick={onOpenResume}
            className="px-3 py-1.5 border border-zinc-800 text-xs font-semibold text-slate-300 rounded-md hover:border-red-500"
          >
            Resume
          </button>
          
          <button
            type="button"
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-b border-red-950/40 bg-[#0A0708] px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`mobile-nav-${link.name.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wide text-slate-400 hover:text-red-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            id="mobile-nav-contact-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full text-left text-sm font-semibold text-red-400 py-1"
          >
            Quick Message
          </button>
        </div>
      )}
    </nav>
  );
};
