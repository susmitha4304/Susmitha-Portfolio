import React from "react";
import { educationList } from "../data";
import { GraduationCap, Award, BookOpen, Clock, Calendar } from "lucide-react";

export default function Education() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6" />;
      case "Award":
        return <Award className="w-6 h-6" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="education"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase mb-3">Education</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Timeline & Path
          </p>
          <div className="h-1.5 w-16 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Path container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central stem line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-[0px] md:-translate-x-[1px]" />

          <div className="space-y-12">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Circular Node Pin */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center -translate-x-1/2 z-10 shadow-md ${
                      index === 0
                        ? "bg-brand-blue text-white shadow-blue-500/25"
                        : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300"
                    }`}
                  >
                    {getIcon(edu.icon)}
                  </div>

                  {/* Info Card Content */}
                  <div
                    className={`w-full md:w-[45%] pl-14 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/20 active:scale-[0.99] transition-all relative group">
                      {/* Decorative border bar for current state */}
                      {index === 0 && (
                        <div className="absolute inset-y-0 left-0 md:left-auto md:right-0 w-1 bg-brand-blue rounded-r" />
                      )}

                      {/* Period Badge */}
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-brand-blue dark:text-blue-400 mb-4 ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}>
                        <Calendar size={13} />
                        {edu.period}
                      </span>

                      {/* Header */}
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-sm font-semibold text-brand-teal dark:text-teal-400 mb-2">
                        {edu.institution}
                      </p>

                      {/* Performance status */}
                      <div className={`mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-450 ${
                        isEven ? "md:justify-end" : ""
                      }`}>
                        <Clock size={14} className="text-slate-400" />
                        <span className="font-medium">{edu.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
