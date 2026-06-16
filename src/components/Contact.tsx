import React, { useState } from "react";
import { personalInfo } from "../data";
import { Mail, Phone, MapPin, Send, CheckCircle2, RefreshCw, Linkedin, Github, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../firebase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please enter Name, Email, and Message before submitting.");
      return;
    }

    setStatus('submitting');

    try {
      const messagesCol = collection(db, "messages");
      const newDocRef = doc(messagesCol); // Auto-generate safe Firestore document reference
      
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        timestamp: new Date().toISOString(),
      };

      // Handle standard and optional fields correctly as specified in firebase-blueprint schema
      if (!payload.subject) {
        delete (payload as any).subject;
      }

      await setDoc(newDocRef, payload);

      // Save query locally to client storage to show off database persistence-mimic
      const previousMessages = JSON.parse(localStorage.getItem("portfolio_queries") || "[]");
      previousMessages.push(payload);
      localStorage.setItem("portfolio_queries", JSON.stringify(previousMessages));

      setStatus('success');
      // Reset form variables
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus('idle');
      handleFirestoreError(error, OperationType.CREATE, "messages");
    }
  };


  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-blue dark:text-blue-400 tracking-wider uppercase mb-3">Contact</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Initiate Conversation
          </p>
          <div className="h-1.5 w-16 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Coordinates & Information card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-slate-850 dark:text-white mb-2 leading-none">
                Reach Out Directly
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Recruiters, engineering leads, and classmates are welcome to send direct messages at any time.
              </p>

              {/* Coordinates List */}
              <div className="space-y-6">
                {/* Email link */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-550 uppercase tracking-wider">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-brand-blue transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-brand-teal flex items-center justify-center flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-550 uppercase tracking-wider">Contact Number</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-brand-blue transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Geography Map location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-500 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-550 uppercase tracking-wider">Location Gutter</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels card wrap */}
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-550">
                Connect and follow:
              </span>
              <div className="flex gap-2">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-355 hover:bg-brand-blue hover:text-white hover:border-brand-blue flex items-center justify-center transition-all cursor-pointer"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-355 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all cursor-pointer"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form with smooth submission state machine */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            
            {status === 'success' ? (
              /* Success celebration splash area */
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-500 flex items-center justify-center animate-bounce shadow-md">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-550 dark:text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you so much! Your query is registered in Susmitha's client database. Mapped callback triggers are pending review. Connect soon!
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 bg-brand-blue text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw size={14} />
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Core Input form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-xl text-slate-800 dark:text-white text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. recruiter@tech.com"
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-xl text-slate-800 dark:text-white text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Summer Apprenticeship Opportunity"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-xl text-slate-800 dark:text-white text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
                  />
                </div>

                {/* Message text area */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Hi Susmitha, I reviewed your computer engineering projects and certifications..."
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-xl text-slate-800 dark:text-white text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 bg-brand-blue hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer text-xs"
                  >
                    {status === 'submitting' ? (
                      <>
                        <RefreshCw size={15} className="animate-spin" />
                        Transmitting message...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Transmit Encrypted Message
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
