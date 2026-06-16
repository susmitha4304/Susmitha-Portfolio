import React from "react";
import { certificationsList, internshipsList } from "../data";
import { Award, Calendar, ExternalLink, ShieldCheck, Briefcase, Building } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase mb-3">Certifications & Experience</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internships & Professional Credentials
          </p>
          <div className="h-1.5 w-16 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Internships Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200/50 dark:border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-brand-blue flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
              Professional Internships
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internshipsList.map((intern) => (
              <div
                key={intern.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6.5 shadow-sm hover:shadow-md hover:border-brand-blue/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-display text-base sm:text-lg font-bold text-slate-850 dark:text-white group-hover:text-brand-blue transition-colors">
                      {intern.role}
                    </h4>
                    <span className="text-[10px] font-bold font-mono uppercase px-2.5 py-1 rounded bg-blue-50/50 dark:bg-blue-950/50 border border-blue-100/30 dark:border-blue-900/30 text-brand-blue dark:text-blue-400">
                      {intern.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-teal-600 dark:text-teal-400">
                    <Building size={15} />
                    <span>{intern.company}</span>
                  </div>

                  {intern.description && (
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans mb-4">
                      {intern.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200/50 dark:border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-brand-teal flex items-center justify-center">
              <Award size={20} />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
              Verified Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6.5 shadow-sm hover:shadow-md hover:border-teal-500/25 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950 text-brand-teal flex items-center justify-center">
                      <ShieldCheck size={22} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-bold font-mono uppercase px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500">
                      Credential Verified
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-850 dark:text-white group-hover:text-brand-blue leading-snug transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm font-semibold text-brand-teal mb-4">
                    {cert.issuer}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex justify-between items-center text-xs font-semibold text-slate-400 dark:text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    Issued {cert.date}
                  </span>

                  <span className="text-brand-blue hover:underline cursor-pointer flex items-center gap-1 text-[11px] font-bold">
                    View Badge
                    <ExternalLink size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
