import React, { useState } from "react";
import {
  personalInfo,
  educationList,
  skillCategories,
  projectList,
  certificationsList,
  internshipsList,
  achievementsList,
} from "../data";
import { Download, Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Award, Sparkles, RefreshCw } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumeSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById("resume-cv-paper");
    if (!element) return;

    try {
      setIsDownloading(true);

      const opt = {
        scale: 2, // High resolution scale
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: 1024, // Stabilize viewport styling for pristine element capture
      };

      // Perform html2canvas capture
      const canvas = await html2canvas(element, opt);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width
      const pageHeight = 297; // A4 height
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Susmitha_Karaka_Resume.pdf");
    } catch (error) {
      console.error("Error generating or saving PDF resume:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="resume-section"
      className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800/10 print:p-0 print:bg-white print:border-none transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 print:hidden animate-fade-in">
          <h2 className="font-display text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase mb-3">Resume</h2>
          <p className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Integrated Web & ATS CV
          </p>
          <div className="h-1 w-12 bg-brand-blue rounded-full mx-auto mt-3" />
        </div>

        {/* Buttons Action bar - Clean, neat and print optimized */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 max-w-4xl mx-auto print:hidden bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 shadow-sm">
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Professional ATS-Optimized Format
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Synchronized in real-time with website profiles, designed for perfect paper printing and parser compliance.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              aria-label="Download high-fidelity vector PDF resume"
              className="px-5 py-3 bg-brand-blue hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs font-bold rounded-xl cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 duration-150"
            >
              {isDownloading ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download size={14} className="animate-bounce" style={{ animationDuration: "2s" }} />
                  Download Resume (PDF)
                </>
              )}
            </button>
          </div>
        </div>

        {/* CV Paper Plate container (Prints seamlessly on A4) */}
        <div
          id="resume-cv-paper"
          className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 rounded-3xl shadow-md print:shadow-none print:border-none print:bg-white print:p-0 transition-all relative overflow-hidden"
        >

          
          {/* Header Block decoration for screen (hidden in print) */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-500 print:hidden" />

          {/* CV Candidate Identification Header */}
          <div className="border-b-2 border-slate-150 dark:border-slate-800 pb-6 mb-8 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {personalInfo.name}
              </h3>
              <p className="text-sm sm:text-base font-bold text-brand-blue dark:text-blue-400 tracking-wide mt-1.5 uppercase font-display">
                {personalInfo.role}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                {personalInfo.subRole}
              </p>
            </div>
            
            {/* Essential Direct ATS Contact Details */}
            <div className="text-xs space-y-2 text-slate-650 dark:text-slate-350 font-medium shrink-0 md:text-right">
              <div className="flex items-center md:justify-end gap-2">
                <Mail size={13} className="text-brand-blue" />
                <span className="font-semibold select-all">{personalInfo.email}</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Phone size={13} className="text-brand-blue" />
                <span className="font-semibold select-all">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <MapPin size={13} className="text-brand-blue" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center md:justify-end gap-2.5 pt-1 border-t border-slate-100 dark:border-slate-800 md:border-t-0 md:pt-0">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-500 hover:text-brand-blue transition-colors"
                >
                  <Github size={12} />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700 font-light">|</span>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-500 hover:text-brand-blue transition-colors"
                >
                  <Linkedin size={12} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (8 units / 12) - Primary Credentials */}
            <div className="md:col-span-8 space-y-8">
              
              {/* ATS-targeted Professional Summary */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-3.5 pb-1.5 border-b border-slate-150 dark:border-slate-850 font-display">
                  Professional Statement
                </h4>
                <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium">
                  Fresher with a passion for learning and growth, seeking an entry-level role as an AI Engineer / Software Developer in an MNC to apply my skills and contribute to impactful projects. Maintain high academic standing with a strong foundation in Artificial Intelligence, Machine Learning methodologies, and modern web architectures.
                </p>
              </div>

              {/* Professional Internships */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-5 pb-1.5 border-b border-slate-150 dark:border-slate-850 font-display">
                  Professional Internships
                </h4>
                <div className="space-y-4">
                  {internshipsList.map((intern) => (
                    <div key={intern.id} className="text-xs group">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h5 className="text-[13px] font-extrabold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
                          {intern.role}
                        </h5>
                        <span className="text-slate-500 dark:text-slate-400 font-mono text-[10.5px] font-bold">
                          {intern.period}
                        </span>
                      </div>
                      <p className="text-[11.5px] font-bold text-brand-teal dark:text-teal-400 mt-0.5">
                        {intern.company}
                      </p>
                      <p className="text-[12px] text-slate-650 dark:text-slate-355 mt-1.5 leading-relaxed font-medium">
                        {intern.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Profile */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-5 pb-1.5 border-b border-slate-150 dark:border-slate-850 font-display">
                  Education Profile
                </h4>
                <div className="space-y-4">
                  {educationList.map((edu) => (
                    <div key={edu.id} className="text-xs">
                      <div className="flex justify-between items-start">
                        <h5 className="text-[13px] font-extrabold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h5>
                        <span className="text-xs font-bold text-brand-blue dark:text-blue-400 min-w-[80px] text-right font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-[11.5px] font-bold text-brand-teal dark:text-teal-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-semibold">
                        {edu.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Key Projects */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-5 pb-1.5 border-b border-slate-150 dark:border-slate-850 font-display">
                  Key Projects Selected
                </h4>
                <div className="space-y-4.5">
                  {projectList.map((project) => (
                    <div key={project.id} className="text-xs group">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h5 className="text-[13px] font-extrabold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
                          {project.title}
                        </h5>
                        <div className="flex items-center gap-1.5">
                          <span className="text-brand-blue dark:text-blue-400 font-mono text-[9.5px] font-bold bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded border border-blue-100/30">
                            {project.tech.join(", ")}
                          </span>
                        </div>
                      </div>
                      <p className="text-[12px] text-slate-650 dark:text-slate-355 mt-1.5 leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side Column (4 units / 12) - Supporting Metrics */}
            <div className="md:col-span-4 space-y-8 bg-slate-50/50 dark:bg-slate-950/40 p-5 rounded-2xl print:bg-white print:p-0 print:border-none">
              
              {/* SKILLS MATRIX */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-3.5 pb-1.5 border-b border-slate-150 dark:border-slate-850 font-display">
                  Skills Matrix
                </h4>
                <div className="space-y-3.5 text-xs">
                  {skillCategories.map((category, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="font-extrabold text-slate-850 dark:text-slate-200 block text-xs leading-none">
                        {category.categoryName}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 leading-normal block text-[11px] font-medium">
                        {category.skills.map((skill) => skill.name).join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KEY CREDENTIALS (CERTIFICATIONS) */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-3.5 pb-1.5 border-b border-slate-150 dark:border-slate-850 font-display">
                  Key Credentials
                </h4>
                <ul className="text-xs space-y-3 text-slate-650 dark:text-slate-400 font-medium">
                  {certificationsList.map((cert) => (
                    <li key={cert.id} className="leading-snug list-disc list-inside">
                      <span className="font-extrabold text-slate-850 dark:text-slate-200">{cert.title}</span>
                      <span className="block text-[10px] font-bold text-slate-500 dark:text-slate-450 pl-5 uppercase font-mono mt-0.5">
                        {cert.issuer} • {cert.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SALIENT HONORS & ACHIEVEMENTS */}
              <div>
                <h4 className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-3.5 pb-1.5 border-b border-slate-150 dark:border-slate-850 font-display">
                  Salient Honors
                </h4>
                <ul className="text-xs space-y-3.5 text-slate-650 dark:text-slate-400 font-medium pl-0.5">
                  {achievementsList.map((ach) => (
                    <li key={ach.id} className="leading-snug flex items-start gap-2">
                      <Award size={13} className="text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-slate-850 dark:text-slate-200 block text-xs">
                          {ach.title}
                        </span>
                        <span className="text-[10.5px] text-slate-500 dark:text-slate-450 block mt-0.5">
                          {ach.description} ({ach.date})
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
