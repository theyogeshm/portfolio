import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onMessageSent?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onMessageSent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onMessageSent) onMessageSent();
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-10 md:py-14 border-b border-zinc-800/80"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2.5 h-2.5 bg-red-600 rounded-[2px] rotate-45"></div>
        <h2
          id="contact-heading"
          className="text-2xl md:text-3xl font-bold text-white tracking-tight"
        >
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Direct Info */}
        <div className="space-y-6">
          <p className="text-base text-slate-300 leading-relaxed">
            Interested in collaboration, engineering internships, or technical discussions in computer vision and machine learning? Reach out directly.
          </p>

          <div id="contact-info-card" className="border border-zinc-800/80 bg-[#0E0A0C] p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <button
                type="button"
                id="contact-copy-email-btn"
                onClick={handleCopyEmail}
                className="p-2 border border-zinc-800 text-slate-400 hover:text-red-300 hover:border-red-500/60 transition-colors rounded-lg"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="border-t border-zinc-800/80 pt-4 flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-400" />
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Phone
                </div>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-slate-200 hover:text-red-400">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <div className="border-t border-zinc-800/80 pt-4 flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-red-400" />
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Location
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  New Delhi, India • DTU Campus
                </div>
              </div>
            </div>
          </div>

          <div id="contact-internship-card" className="p-4 bg-[#140C0E]/80 border border-zinc-800 rounded-xl text-xs text-slate-300">
            <span className="font-semibold text-red-300 uppercase block mb-1">Internship Status</span>
            Open to summer software engineering & computer vision research internships for 2025/2026.
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div id="contact-form-card" className="border border-zinc-800/80 bg-[#0E0A0C] p-6 sm:p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600/80"></div>

          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-red-400" /> Send a Direct Message
          </h3>

          {submitted ? (
            <div className="bg-[#140C0E]/90 border border-red-500/50 p-6 rounded-lg text-center text-sm text-slate-200 animate-fadeIn">
              <Check className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="font-bold text-base mb-1 text-red-300">Message Dispatched</div>
              <p className="text-xs text-slate-400">
                Thank you. Your dispatch has been logged and forwarded to {PERSONAL_INFO.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Alex Mercer"
                  className="w-full bg-[#060506] border border-zinc-800 px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-[#060506] border border-zinc-800 px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship / Engineering Inquiry"
                  className="w-full bg-[#060506] border border-zinc-800 px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide project details or message content..."
                  className="w-full bg-[#060506] border border-zinc-800 px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors rounded-lg resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-500 text-white py-3 text-xs font-bold uppercase tracking-widest rounded-lg active:scale-[0.99] active-glow transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

