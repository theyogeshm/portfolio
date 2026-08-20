import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060506] text-slate-300 flex flex-col font-['Arimo',sans-serif] relative selection:bg-red-600 selection:text-white transition-colors duration-300">
      {/* Background Geometric Grid */}
      <div className="fixed inset-0 geometric-grid opacity-30 pointer-events-none -z-10"></div>

      {/* Ambient Crimson Glow Accents */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Portfolio Layout */}
      <main className="max-w-[1100px] w-full mx-auto px-6 md:px-12 flex-1">
        <Hero onOpenContact={handleOpenContact} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Resume Dossier Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
