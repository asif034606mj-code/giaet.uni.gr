import React from "react";
import { Settings, Truck, Cpu, Zap, Code, Sun, Clock, BookOpen, UserCheck, ArrowUpRight } from "lucide-react";
import { Program } from "../types";

interface FacultiesSectionProps {
  programs: Program[];
  setTab: (tab: string) => void;
  setSelectedProgram: (programId: string) => void;
}

export default function FacultiesSection({ programs, setTab, setSelectedProgram }: FacultiesSectionProps) {
  
  // Icon mapper helper
  const getIcon = (id: string) => {
    switch (id) {
      case "me": return Settings;
      case "ipe": return Truck;
      case "ae": return Cpu;
      case "eee": return Zap;
      case "cse": return Code;
      case "et": return Sun;
      default: return BookOpen;
    }
  };

  // Banner color mapper
  const getGlow = (id: string) => {
    switch (id) {
      case "me": return "border-blue-500/20 shadow-blue-500/5 hover:border-blue-500/40";
      case "ipe": return "border-slate-500/20 shadow-slate-500/5 hover:border-slate-500/40";
      case "ae": return "border-red-500/20 shadow-red-500/5 hover:border-red-500/40";
      case "eee": return "border-yellow-500/20 shadow-yellow-500/5 hover:border-yellow-500/40";
      case "cse": return "border-emerald-500/20 shadow-emerald-500/5 hover:border-emerald-500/40";
      case "et": return "border-sky-500/20 shadow-sky-500/5 hover:border-sky-500/40";
      default: return "border-white/5 shadow-white/5 hover:border-white/20";
    }
  };

  const getThemeText = (id: string) => {
    switch (id) {
      case "me": return "text-blue-400";
      case "ipe": return "text-slate-400";
      case "ae": return "text-red-400";
      case "eee": return "text-yellow-400";
      case "cse": return "text-emerald-400";
      case "et": return "text-sky-400";
      default: return "text-slate-400";
    }
  };

  return (
    <section id="faculties-section" className="py-20 relative overflow-hidden bg-slate-900/10">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl text-left">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-3">OUR ACADEMIC FACULTIES</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              World-Class Engineering Entities
            </h2>
            <p className="text-slate-400 font-sans leading-relaxed text-sm">
              Explore our six foundational universities schools. Each is supported by accredited German curricula, dedicated research labs, and live remote access terminals.
            </p>
          </div>
          <button 
            onClick={() => setTab("degrees")} 
            className="mt-6 md:mt-0 text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Syllabus Directory</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Schools Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => {
            const FacultyIcon = getIcon(prog.id);
            const borderGlow = getGlow(prog.id);
            const highlightText = getThemeText(prog.id);

            // Fetch dynamic placeholder matching target
            const coverImage = `https://picsum.photos/seed/${prog.id}/800/450`;

            return (
              <div 
                key={prog.id}
                className={`flex flex-col bg-slate-950/40 rounded-2xl border ${borderGlow} overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-900/60`}
              >
                {/* School cover image with referral policy */}
                <div className="h-44 w-full relative overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                  <img
                    src={coverImage}
                    alt={prog.faculty}
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute Badge */}
                  <div className="absolute top-3 left-3 z-20 p-2 bg-slate-950/80 rounded-lg backdrop-blur border border-white/10 text-white">
                    <FacultyIcon className={`w-5 h-5 ${highlightText}`} />
                  </div>

                  <div className="absolute bottom-3 right-3 z-20 text-[10px] font-mono font-medium text-slate-300 bg-black/50 px-2 py-1 rounded backdrop-blur">
                    {prog.duration}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white mb-2 leading-snug">
                      {prog.faculty}
                    </h3>
                    <p className="text-slate-400 text-xs font-sans mb-4 line-clamp-3 leading-relaxed">
                      {prog.overview}
                    </p>

                    {/* Metadata items */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Credit Load: {prog.ects} ECTS</span>
                      </div>
                      <div className="flex items-start gap-2 text-[11px] font-mono text-slate-300">
                        <BookOpen className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>Core: {prog.keyCourses.join(", ")}</span>
                      </div>
                    </div>

                    {/* Career Outcomes Preview */}
                    <div className="mb-6 pt-4 border-t border-white/5">
                      <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Target Careers & Employment
                      </h4>
                      <ul className="space-y-1">
                        {prog.careerOutcomes.slice(0, 2).map((career, i) => (
                          <li key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            <span className="truncate">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={() => {
                      setSelectedProgram(prog.id);
                      setTab("degrees");
                    }}
                    className="w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:text-white hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/20 cursor-pointer transition-all uppercase tracking-wider"
                  >
                    View Degree Curriculum
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
