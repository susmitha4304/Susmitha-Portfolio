import React from "react";
import { personalInfo } from "../data";
import { Linkedin, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-200/50 dark:border-slate-900 pb-8 mb-8">
          
          {/* Logo Brand area */}
          <div className="text-center md:text-left animate-fade-in">
            <h3 className="font-display text-lg font-black text-slate-900 dark:text-white tracking-tight">
              k<span className="text-brand-blue">.susmitha</span>
            </h3>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-550 mt-1 uppercase tracking-wider">
              CSE Spec. Artificial Intelligence
            </p>
          </div>

          {/* Navigation Options in Horizontal orientation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-slate-500 dark:text-slate-400">
            <a href="#about" className="hover:text-brand-blue transition-colors">About</a>
            <a href="#education" className="hover:text-brand-blue transition-colors">Education</a>
            <a href="#skills" className="hover:text-brand-blue transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-blue transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-brand-blue transition-colors">Certifications</a>
            <a href="#resume-section" className="hover:text-brand-blue transition-colors">Resume</a>
            <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
          </div>

          {/* Social icons */}
          <div className="flex gap-2">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-550 hover:text-brand-blue flex items-center justify-center transition-colors cursor-pointer"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-550 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <Github size={16} />
            </a>
          </div>

        </div>

        {/* Lower Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-400 dark:text-slate-550">
          <p className="flex items-center gap-1">
            © 2027 Susmitha Karaka. Crafted with Code & <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
