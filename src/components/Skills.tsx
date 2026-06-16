import React from "react";
import { skillCategories } from "../data";
import { Code, Layout, Brain, Hammer } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Programming Languages":
        return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "Web Development":
        return <Layout className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case "AI":
        return <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "Tools & Frameworks":
        return <Hammer className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase mb-3">Skills</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Arsenal & Core Strengths
          </p>
          <div className="h-1.5 w-16 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.categoryName}
              className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/60">
                  {getCategoryIcon(category.categoryName)}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-850 dark:text-white group-hover:text-brand-blue transition-colors">
                  {category.categoryName}
                </h3>
              </div>

              {/* Skills tags/chips inside card */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-brand-blue/35 dark:hover:border-blue-500/35 transition-all shadow-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
