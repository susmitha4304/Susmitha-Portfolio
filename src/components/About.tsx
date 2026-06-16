import React from "react";
import { personalInfo } from "../data";
import { User, MapPin, GraduationCap, Heart, Languages, Target, Calendar } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase mb-3">About Me</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Foundation & Personal Goals
          </p>
          <div className="h-1.5 w-16 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Summary Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-brand-blue dark:text-blue-400 flex items-center justify-center">
                  <User size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-800 dark:text-white">Professional Summary</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-base sm:text-lg">
                I am currently pursuing a B.Tech in Computer Science Engineering (Artificial Intelligence) and am passionate about artificial intelligence, machine learning, web development, and problem-solving. I enjoy creating meaningful digital experiences and continuously learning emerging technologies. My goal is to become a skilled AI Engineer who develops impactful solutions that improve people's lives.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-brand-teal dark:text-teal-400 flex items-center justify-center">
                  <Target size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-800 dark:text-white">Career Goal</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-base">
                To secure a challenging position that allows me to learn, develop my technical skills, and contribute to the organization's success.
              </p>
            </div>
          </div>

          {/* Right Side: Quick Facts Section */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1">
            {/* Quick Fact 1: Degree */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-blue-400/30 transition-all">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-brand-blue">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Degree Pursuing</h4>
                <p className="text-base font-bold text-slate-800 dark:text-white mt-1">{personalInfo.degree}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Class of 2027</p>
              </div>
            </div>

            {/* Quick Fact 2: Location */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-blue-400/30 transition-all">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-brand-teal">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location</h4>
                <p className="text-base font-bold text-slate-800 dark:text-white mt-1">{personalInfo.location}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Visakhapatnam, AP, India</p>
              </div>
            </div>

            {/* Quick Fact 3: Languages */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-blue-400/30 transition-all">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-500">
                <Languages size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Languages Known</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {personalInfo.languages.map((lang) => (
                    <span key={lang} className="px-2 py-0.5 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100/40 dark:border-indigo-900/30">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Fact 4: Interests */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-blue-400/30 transition-all">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950 flex items-center justify-center text-rose-500">
                <Heart size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Interests & Specialties</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {personalInfo.interests.map((interest) => (
                    <span key={interest} className="px-2 py-0.5 rounded-md text-xs font-medium bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-450 border border-rose-100/30 dark:border-rose-900/30">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
