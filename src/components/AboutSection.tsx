import React from "react";
import { Compass, Eye, Users, Globe, Award, Briefcase, ThumbsUp } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Enrolled Students", value: "20,000+", icon: Users, desc: "Remote & hybrid scholars worldwide" },
    { label: "Global Reach", value: "60+", icon: Globe, desc: "Countries actively represented" },
    { label: "Faculty Directory", value: "500+", icon: Award, desc: "PhD specialists & industry coaches" },
    { label: "Employability Rating", value: "95%", icon: Briefcase, desc: "Graduates hired within 6 months" },
    { label: "Corporate Partners", value: "150+", icon: ThumbsUp, desc: "German & European industry leaders" },
  ];

  return (
    <section id="about-section" className="py-20 bg-slate-950/40 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">ABOUT GIAET</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Forging Global Engineering Catalysts
          </h3>
          <p className="text-slate-400 font-sans leading-relaxed">
            The Global Institute of Advanced Engineering & Technology (GIAET) is an international online-hybrid university headquartered in Stuttgart, Germany. We unite legendary German engineering precision with seamless internet access frameworks.
          </p>
        </div>

        {/* Mission & Vision Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="glass-panel hover:border-slate-800 transition-colors rounded-2xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-fit mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-display font-semibold text-white mb-3">Our Core Mission</h4>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                Deliver innovative, accessible, and globally recognized engineering education through technology-driven learning. GIAET breaks down physical campuses into browser-based portals containing virtual testbenches and active professional networking rooms.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
              <span>ESTABLISHED GERMANY</span>
              <span>STUTTGART INGRESS</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="glass-panel hover:border-slate-800 transition-colors rounded-2xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl w-fit mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-display font-semibold text-white mb-3">Our Future Vision</h4>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                Become one of Europe's leading international engineering universities for digital and practical education. We envision a boundary-free world where working professionals and ambitious international students can upgrade industrial technologies directly via the cloud.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-indigo-400 transition-colors">
              <span>EUROPEAN CREDIT SYSTEM</span>
              <span>95% RETENTION RATING</span>
            </div>
          </div>

        </div>

        {/* Dynamic Statistics Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div 
                key={i} 
                className="glass-panel-light p-4 rounded-xl flex flex-col justify-between hover:bg-white/5 transition-all glow-hover col-span-1 border-white/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 font-mono text-xs">STAT {i + 1}</span>
                  <StatIcon className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-white font-mono leading-none tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <h5 className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider mb-1 font-display">
                    {stat.label}
                  </h5>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
