import React from "react";
import { personalInfo } from "../data";
import { Github, Linkedin, GitFork, Star, BookOpen, MessageSquare, ArrowUpRight } from "lucide-react";

export default function SocialSections() {
  // Mock contribution graph coordinates for the CSV portfolio heatmap
  // Mapped across 7 rows (days of week) and 24 columns (weeks)
  const rows = Array.from({ length: 7 });
  const cols = Array.from({ length: 24 });

  // Let's generate nice organic activity shades [0 to 4] representing different shades of green
  const getActivityShade = (rIndex: number, cIndex: number) => {
    // Generate an organic pattern using standard mathematical seed
    const seed = (rIndex * 3 + cIndex * 7) % 7;
    if (seed < 2) return "bg-slate-100 dark:bg-slate-800"; // No activity
    if (seed === 2) return "bg-emerald-250 dark:bg-emerald-900/40 text-emerald-500/20"; // Low
    if (seed === 3 || seed === 4) return "bg-emerald-400/60 dark:bg-emerald-700/60"; // Medium
    return "bg-emerald-600 dark:bg-emerald-500"; // High activity
  };

  return (
    <section
      id="social-networks"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase mb-3">Networking</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Developer Ecosystem & Connection
          </p>
          <div className="h-1.5 w-16 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* GitHub Card Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header Profile wrapper */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-250 dark:border-slate-700">
                    <img
                      src={personalInfo.profileImage}
                      alt="GitHub avatar"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-none">
                      {personalInfo.name}
                    </h3>
                    <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-550">
                      @susmitha4304
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono font-bold">
                  <div className="text-center bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-850">
                    <span className="block text-slate-800 dark:text-slate-350">18</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Repos</span>
                  </div>
                  <div className="text-center bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-850">
                    <span className="block text-slate-800 dark:text-slate-350">180+</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Stars</span>
                  </div>
                </div>
              </div>

              {/* Repos list preview */}
              <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-4 leading-none">
                Featured Repositories
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Repo 1 */}
                <a
                  href="https://github.com/susmitha4304/Eco-Smart-Waste-Management-portal-.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all group/repo"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-brand-blue dark:text-blue-400 font-bold text-xs mb-1 font-mono group-hover/repo:text-brand-teal">
                      <BookOpen size={13} />
                      <span className="truncate max-w-[150px]">Eco-Smart-Waste-Management</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                      An intelligent public utility platform for eco-friendly smart waste monitoring and sorting.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold mt-3">
                    <span className="flex items-center gap-1">
                      <Star size={11} className="text-amber-500" /> 18
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={11} /> 5
                    </span>
                  </div>
                </a>

                {/* Repo 2 */}
                <a
                  href="https://github.com/susmitha4304/House-Price-Prediction-.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl flex flex-col justify-between hover:border-blue-500/40 hover:-translate-y-0.5 transition-all group/repo"
                >
                  <div>
                    <div className="flex items-center gap-1.5 text-brand-teal font-bold text-xs mb-1 font-mono group-hover/repo:text-brand-blue">
                      <BookOpen size={13} />
                      <span className="truncate max-w-[150px]">House-Price-Prediction-</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                      A machine learning predictive model built with Python to estimate regional real estate values.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold mt-3">
                    <span className="flex items-center gap-1">
                      <Star size={11} className="text-amber-500" /> 21
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={11} /> 8
                    </span>
                  </div>
                </a>
              </div>

              {/* Mock Heatmap contribution board */}
              <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-3 leading-none">
                Contribution Heatmap Logs
              </h4>
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 p-4 rounded-2xl overflow-hidden mb-6">
                {/* Horizontal grid rows */}
                <div className="flex flex-col gap-1 overflow-x-auto select-none pointer-events-none pb-1.5">
                  {rows.map((_, rIdx) => (
                    <div key={rIdx} className="flex gap-1">
                      {cols.map((_, cIdx) => (
                        <div
                          key={cIdx}
                          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-sm flex-shrink-0 ${getActivityShade(
                            rIdx,
                            cIdx
                          )}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold mt-2">
                  <span>Less Activity</span>
                  <div className="flex gap-1 items-center">
                    <div className="w-2 h-2 rounded-sm bg-slate-100 dark:bg-slate-800" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-250 dark:bg-emerald-900/40" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-400/65" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-600" />
                  </div>
                  <span>More Activity</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/susmitha4304"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-xs"
            >
              <Github size={16} />
              Visit Active GitHub Profile
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* LinkedIn Profile section card (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header brand details */}
              <div className="flex justify-between items-center pb-5 border-b border-slate-100 dark:border-slate-800/80">
                <span className="text-brand-blue font-extrabold text-xs uppercase font-mono tracking-wider">
                  LinkedIn Outreach Hub
                </span>
                <span className="p-1 px-2.5 rounded bg-blue-50 dark:bg-blue-950 text-brand-blue dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                  In Network
                </span>
              </div>

              {/* Graphic card preview mimicking a real recruitment connect card */}
              <a
                href="https://www.linkedin.com/in/susmitha-karaka-ab0795323"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-6 relative overflow-hidden group/ln hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {/* Watermark Logo */}
                <div className="absolute right-0 bottom-0 text-white/5 uppercase select-none pointer-events-none font-black text-8xl font-display">
                  in
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600">
                    <Linkedin size={28} fill="currentColor" stroke="none" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-extrabold tracking-tight leading-snug group-hover/ln:text-teal-200 transition-colors">
                      Let's Build Intelligent Tech Solutions Together!
                    </h3>
                    <p className="text-white/80 text-xs mt-1 leading-relaxed">
                      "Seeking B.Tech placement opportunities & collaborative Artificial Intelligence internships in global software development hubs."
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center gap-2.5 text-xs font-semibold text-white/90">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Work immediately
                  </div>
                </div>
              </a>

              {/* Pitch Statement */}
              <div className="p-4.5 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl">
                <h4 className="text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1.5 mb-1.5 uppercase tracking-wide">
                  <MessageSquare size={14} className="text-brand-teal" />
                  Recruiter Notice:
                </h4>
                <p className="text-[11.5px] text-slate-550 dark:text-slate-400 leading-relaxed font-sans">
                  Fresher with a passion for learning and growth, seeking an entry-level role in an MNC to apply my skills and contribute to impactful projects.
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/susmitha-karaka-ab0795323"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6 py-3.5 bg-brand-blue hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-xs"
            >
              <Linkedin size={16} />
              Connect on LinkedIn Platform
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
