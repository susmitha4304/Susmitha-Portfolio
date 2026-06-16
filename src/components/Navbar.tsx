import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight, Award } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Load and apply theme on mounting
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  // Shadow indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor intersection to highlight active section in Navbar
  useEffect(() => {
    const sections = ["hero", "about", "education", "skills", "projects", "resume-section", "certifications", "social-networks", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies focal view
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Resume", id: "resume-section" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/40 dark:border-slate-900 py-3"
          : "bg-transparent py-5"
      } print:hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand logo click back to hero */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-black text-slate-950 dark:text-white tracking-tight cursor-pointer"
        >
          k<span className="text-brand-blue">.susmitha</span>
        </button>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`transition-colors cursor-pointer relative py-1.5 ${
                activeSection === item.id || (item.id === "resume-section" && activeSection === "resume-section")
                  ? "text-brand-blue dark:text-blue-400 font-extrabold"
                  : "hover:text-brand-blue hover:dark:text-blue-400"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue dark:bg-blue-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Option action elements */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Light dark toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle user color theme preference"
            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400 cursor-pointer flex items-center justify-center transition-all"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Quick hiring tag button */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="px-4.5 py-2.5 bg-brand-blue hover:bg-blue-700 text-white text-[12px] font-bold rounded-xl shadow-sm cursor-pointer transition-all active:scale-95 flex items-center gap-1.5"
          >
            Hire Susmitha
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Tablet / Mobile toggle widgets */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle mobile theme preference"
            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-350 cursor-pointer flex items-center justify-center transition-all"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle drawer layout menu"
            className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer flex items-center justify-center transition-all"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Slide and menu items rendering */}
      {isMobileOpen && (
        <div className="lg:hidden absolute top-[100%] inset-x-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 shadow-lg px-6 py-6 space-y-4 animate-slide-down">
          <nav className="flex flex-col gap-3.5 text-sm font-bold text-slate-600 dark:text-slate-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`text-left transition-colors cursor-pointer py-1.5 border-b border-slate-50 dark:border-slate-900 pb-2 ${
                  activeSection === item.id ? "text-brand-blue dark:text-blue-400" : "hover:text-brand-blue"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full py-3 bg-brand-blue text-white hover:bg-blue-700 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all text-center"
          >
            Hire Susmitha
            <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
}
