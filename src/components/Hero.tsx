import React, { useState, useEffect } from "react";
import { personalInfo } from "../data";
import { ArrowRight, Download, Brain, Sparkles, Cpu, Code } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const words = ["AI Enthusiast", "Front-End Developer", "Software Developer", "Problem Solver"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const word = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(60);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => word.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleDownload = () => {
    // Triggers a beautiful mock CV download with fallback interactive view state
    const link = document.createElement("a");
    link.href = "#resume-section";
    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true
    });
    link.dispatchEvent(clickEvent);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 dark:from-slate-900 dark:via-slate-900/40 dark:to-slate-950 transition-colors duration-300"
    >
      {/* Decorative Floating AI-themed elements in biological/neural design */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow effect 1 */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 dark:opacity-40 animate-glow"></div>
        {/* Glow effect 2 */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-400/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-30" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-[20%] right-[15%] text-blue-500/30 dark:text-blue-400/30 animate-float" style={{ animationDuration: '8s' }}>
          <Brain size={48} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[25%] left-[10%] text-teal-500/30 dark:text-teal-400/30 animate-float" style={{ animationDuration: '9s', animationDelay: '1s' }}>
          <Cpu size={40} strokeWidth={1} />
        </div>
        <div className="absolute top-[60%] left-[8%] text-blue-600/20 dark:text-blue-500/20 animate-float" style={{ animationDuration: '7s', animationDelay: '3s' }}>
          <Code size={32} strokeWidth={1} />
        </div>
        <div className="absolute top-[15%] left-[20%] text-teal-600/20 dark:text-teal-500/20 animate-float" style={{ animationDuration: '10s' }}>
          <Sparkles size={24} strokeWidth={1} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column - Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-brand-blue dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={14} className="animate-pulse" />
            Specialization: Artificial Intelligence
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-4">
            Hi, I'm <span className="text-brand-blue bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{personalInfo.name}</span>
          </h1>

          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
            <p className="font-display text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-medium">
              <span className="text-brand-teal font-semibold">{currentText}</span>
              <span className="inline-block w-0.5 h-6 ml-1 bg-brand-teal animate-pulse">|</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8 font-sans">
            {personalInfo.tagline} {personalInfo.introduction}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-brand-blue text-white rounded-xl font-semibold shadow-md shadow-blue-500/25 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#resume-section"
              className="px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm font-semibold"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold shadow-md shadow-teal-500/20 hover:from-teal-600 hover:to-teal-700 hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right column - Graphic Profile Circle */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Spinning decorative geometric rings representing AI orbits */}
            <div className="absolute inset-0 border-[3px] border-dashed border-blue-500/30 dark:border-blue-400/20 rounded-full animate-[spin_50s_linear_infinite]" />
            <div className="absolute -inset-4 border border-teal-500/30 dark:border-teal-400/10 rounded-full animate-[spin_35s_linear_infinite_reverse]" />
            <div className="absolute -inset-8 border-[0.5px] border-slate-200 dark:border-slate-800 rounded-full pointer-events-none" />

            {/* Glowing hardware logic gates indicators */}
            <div className="absolute top-4 left-6 w-3 h-3 bg-teal-500 rounded-full animate-ping" />
            <div className="absolute bottom-16 right-2 w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />

            {/* Main Picture Container */}
            <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-850">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover select-none pointer-events-none"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to high quality vector illustration if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=640&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
