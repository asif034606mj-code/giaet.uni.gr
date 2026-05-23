import React from "react";
import { Cpu, Sun, Layers, Atom, FlaskConical, ArrowUpRight } from "lucide-react";
import { RESEARCH_PROJECTS } from "../data/universityData";

export default function ResearchSection() {
  
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "smartgrid": return Sun;
      case "robot": return Cpu;
      case "cleanfuel": return Atom;
      default: return FlaskConical;
    }
  };

  const getThemeText = (id: string) => {
    switch (id) {
      case "smartgrid": return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
      case "robot": return "text-red-400 bg-red-500/10 border-red-500/20";
      case "cleanfuel": return "text-sky-400 bg-sky-500/10 border-sky-500/20";
      default: return "text-blue-400 bg-blue-500/10 border-blue-500/20";
    }
  };

  return (
    <section id="research-section" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-3">SCIENTIFIC DISCOVERY</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Research & Innovation Center
          </h2>
          <p className="text-slate-400 font-sans text-sm">
            Our professors are actively developing industrial paradigms alongside leading European scientists. Discover our primary active studies.
          </p>
        </div>

        {/* Labs grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_PROJECTS.map((proj) => {
            const ProjectIcon = getProjectIcon(proj.id);
            const badgeTheme = getThemeText(proj.id);

            return (
              <div 
                key={proj.id} 
                className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-800 transition-all duration-300"
              >
                <div className="space-y-4">
                  
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`p-2.5 rounded-xl border flex items-center justify-center ${badgeTheme}`}>
                      <ProjectIcon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">STUTTGART_LABS_2026</span>
                  </div>

                  {/* Project Titles */}
                  <h3 className="text-lg font-display font-semibold text-slate-100 group-hover:text-blue-400 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Director details */}
                <div className="mt-8 pt-4 border-t border-white/5 space-y-2">
                  <div>
                    <span className="text-[9px] uppercase font-mono text-slate-500 font-bold block">Lead Investigator</span>
                    <span className="text-xs font-semibold text-slate-200">{proj.lead}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-slate-500 font-bold block">Affiliated Lab Center</span>
                    <span className="text-[11px] text-slate-300 font-sans">{proj.lab}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic call to action */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-900/60 border border-white/5 rounded-2xl text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-display font-semibold text-slate-200">Are you interested in collaborating as a PhD researcher?</h4>
            <p className="text-xs text-slate-400 font-sans">Contact our admissions registry with your publication records.</p>
          </div>
          <a
            href="https://forms.gle/uUR1tXRKHKgDshyZ9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-slate-100 text-xs font-semibold rounded-lg shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Research Enquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
