import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Certifications from "./components/Certifications";
import SocialSections from "./components/SocialSections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Brain, Sparkles, ArrowUp, Zap } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Initial loading mock sequence
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  // Monitor window scroll to display Floating Back to Top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-6 transition-all duration-500 font-sans select-none">
        <div className="relative flex flex-col items-center max-w-sm w-full space-y-6">
          {/* Animated Glowing AI Core Ring */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-dashed border-teal-500/30 rounded-full animate-spin" style={{ animationDuration: '6s' }} />
            <div className="absolute inset-2 border border-blue-500/40 rounded-full animate-[spin_4s_linear_infinite_reverse]" />
            <div className="absolute inset-4 bg-gradient-to-tr from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Brain size={28} className="text-white animate-pulse" />
            </div>
          </div>

          {/* Loading status strings */}
          <div className="text-center space-y-2">
            <h2 className="font-display font-black text-xl tracking-wider uppercase text-slate-100">
              k<span className="text-brand-teal text-teal-400">.susmitha</span>
            </h2>
            <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase flex items-center justify-center gap-1.5 font-bold">
              <Zap size={11} className="text-amber-400 animate-pulse" />
              Initializing Portfolio Environment
            </p>
          </div>

          {/* Progress Percent tracker card bar */}
          <div className="w-full space-y-1">
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-100"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-550 font-semibold uppercase">
              <span>Syncing Nodes</span>
              <span>{loadProgress}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 selection:bg-blue-500 selection:text-white transition-colors duration-300">
      
      {/* Sticky Top Navigation Frame */}
      <Navbar />

      {/* Primary Main Portfolio Sections Grid Flow */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <ResumeSection />
        <Certifications />
        <SocialSections />
        <Contact />
      </main>

      {/* Global Brand Footer section */}
      <Footer />

      {/* Floating Micro-Interactions: Back to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll immediately to top of interface"
          className="fixed bottom-6 right-6 z-40 p-3 bg-white hover:bg-brand-blue dark:bg-slate-900 dark:hover:bg-brand-blue text-slate-750 hover:text-white dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg hover:shadow-xl active:scale-90 transition-all cursor-pointer animate-fade-in group"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

    </div>
  );
}
