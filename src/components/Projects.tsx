import React from "react";
import { projectList } from "../data";
import { Github, Bot, Brain, Sparkles, Cpu, Terminal, ExternalLink, Activity, ShoppingBag, Truck, Trash2, Home } from "lucide-react";

export default function Projects() {
  // Generates unique interactive inline SVG visuals based on project identity
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case "proj-1": // Eco Smart WasteManagement Portal
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-500/10 flex items-center justify-center p-6 transition-transform group-hover:scale-105 duration-500">
            <div className="relative w-full h-full rounded-2xl bg-white/75 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 p-4 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-500">Eco-Classification</span>
                </div>
                <Trash2 className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="space-y-2 mt-2">
                <div className="text-[10.5px] bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-150 p-2 rounded-lg text-emerald-800 dark:text-emerald-300 font-sans font-semibold">
                  Detected: Plastic Bottle (99% Recyclable)
                </div>
                <div className="text-[10px] text-slate-450 font-mono">
                  Smart Bin Gate opened automatically...
                </div>
              </div>
            </div>
          </div>
        );

      case "proj-2": // House Price Prediction
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-500/10 flex items-center justify-center p-6 transition-transform group-hover:scale-105 duration-500">
            <div className="relative w-full h-full rounded-2xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 p-4 overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold font-mono text-indigo-500 uppercase">LinearRegression Model</span>
                <Home className="w-4 h-4 text-indigo-500" />
              </div>
              <div className="flex flex-col gap-1 my-1 justify-center flex-grow">
                <div className="flex justify-between items-center text-[11px] font-bold font-mono">
                  <span className="text-slate-400">R² Score:</span>
                  <span className="text-indigo-600 dark:text-indigo-400">0.942</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: "94%" }} />
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 text-center">
                y = θ₀ + θ₁(SqFt) + θ₂(Rooms)
              </div>
            </div>
          </div>
        );

      case "proj-3": // Online medicine Ordering
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-emerald-500/10 flex items-center justify-center p-6 transition-transform group-hover:scale-105 duration-500">
            <div className="relative w-full h-full rounded-2xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 p-4 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold font-mono text-teal-600 uppercase">Medicine Companion</span>
                <Activity size={16} className="text-teal-600" />
              </div>
              <div className="bg-teal-50 dark:bg-teal-950/40 p-2.5 rounded-xl border border-teal-100 dark:border-teal-900/50 my-1">
                <div className="text-[10px] font-bold text-teal-800 dark:text-teal-300">Daily Alarm Set</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-0.5">Take Metformin at 8:00 AM</div>
              </div>
            </div>
          </div>
        );

      case "proj-4": // Fashionbar
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-rose-500/10 flex items-center justify-center p-6 transition-transform group-hover:scale-105 duration-500">
            <div className="relative w-full h-full rounded-2xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 p-4 flex flex-col justify-between overflow-hidden font-sans">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold font-mono text-pink-500 uppercase">Fashionbar Core</span>
                <ShoppingBag size={14} className="text-pink-500" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-slate-50 dark:bg-slate-800/60 p-2 border border-slate-100 dark:border-slate-800 rounded-xl text-center">
                  <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Apparel</span>
                  <span className="text-[10px] font-extrabold text-pink-500">New Arrivals</span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 p-2 border border-slate-100 dark:border-slate-800 rounded-xl text-center">
                  <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold">Cart Items</span>
                  <span className="text-[10px] font-extrabold text-blue-500">Checkout (2)</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "proj-5": // RoadBite-Express
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-500/10 flex items-center justify-center p-6 transition-transform group-hover:scale-105 duration-500">
            <div className="relative w-full h-full rounded-2xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 p-4 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-amber-600">RoadBite Express</span>
                <Truck className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex items-center gap-2 mt-2 bg-amber-50 dark:bg-amber-950/40 p-2 rounded-xl border border-amber-100 dark:border-amber-900/50">
                <div className="flex-grow">
                  <div className="text-[9px] uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">Delivery Status</div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-white">Arriving in 12 mins</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-850 flex items-center justify-center">
            <Terminal size={40} className="text-slate-400" />
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase mb-3">Projects</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic & Practical Projects
          </p>
          <div className="h-1.5 w-16 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Projects Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all flex flex-col group h-full"
            >
              {/* Product Visual Container Frame */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-150 border-b border-slate-100 dark:border-slate-800/40">
                {renderProjectVisual(project.id)}
              </div>

              {/* Text Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Category Chip */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 mb-3">
                    {project.category === "ai"
                      ? "Artificial Intelligence"
                      : project.category === "data"
                      ? "Data Science"
                      : "Web Development"}
                  </span>

                  <h3 className="font-display text-lg font-bold text-slate-850 dark:text-white mb-2 leading-tight group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed mb-4 font-sans line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack items wrap tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100 dark:border-slate-800/50">
                    {project.tech.map((term) => (
                      <span
                        key={term}
                        className="px-2 py-0.5 text-[10px] font-semibold bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200/30 dark:border-slate-800/40"
                      >
                        {term}
                      </span>
                    ))}
                  </div>

                  {/* Operational Action Buttons */}
                  <div className="w-full">
                    {project.githubUrl.includes("vercel.app") ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-2.5 bg-brand-blue text-white hover:bg-blue-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                      >
                        <ExternalLink size={14} />
                        View Project
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:text-brand-blue text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Github size={14} />
                        View Code on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
