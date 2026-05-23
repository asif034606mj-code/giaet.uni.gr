import React from "react";
import { ArrowRight, Cpu, Layers, GraduationCap, Video, HelpCircle, CheckCircle } from "lucide-react";

interface HeroProps {
  setTab: (tab: string) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export default function Hero({ setTab, onOpenApply, onOpenTour }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[#030712]">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      {/* Futuristic Ambient Radials */}
      <div className="absolute top-0 left-1/4 w-[35rem] h-[35rem] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[25rem] h-[25rem] rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/25 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-blue-300 uppercase">
                Stuttgart Engineering Excellence • Online & Hybrid BSc
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              Study Engineering <br className="hidden sm:block"/>
              <span className="bg-gradient-to-r from-blue-400 via-slate-100 to-indigo-300 bg-clip-text text-transparent">
                from Germany
              </span>
              <br/>— Anywhere in the World
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-sans font-light leading-relaxed">
              International engineering education designed for future innovators and industry leaders. Gain your online BSc degree with actual virtual labs, interactive AI tutoring, and Europe's leading academic standards.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOpenApply}
                className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-slate-100 px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setTab("degrees")}
                className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white px-6 py-3.5 rounded-lg text-sm font-semibold border border-white/5 hover:border-slate-700 transition-all cursor-pointer"
              >
                <span>Explore Programs</span>
              </button>

              <button
                onClick={onOpenTour}
                className="flex items-center justify-center gap-2 bg-indigo-950/40 hover:bg-indigo-900/30 text-indigo-300 hover:text-indigo-200 px-6 py-3.5 rounded-lg text-sm font-semibold border border-indigo-500/20 transition-all cursor-pointer"
              >
                <Video className="w-4 h-4" />
                <span>Virtual Tour</span>
              </button>
            </div>

            {/* Core Badges Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 max-w-lg">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-mono">210 ECTS</span>
                <span className="text-[10px] text-slate-400 uppercase font-sans tracking-tight">Standard BSc</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-mono">100% Online</span>
                <span className="text-[10px] text-slate-400 uppercase font-sans tracking-tight">Flexible Hybrid</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-mono">95%</span>
                <span className="text-[10px] text-slate-400 uppercase font-sans tracking-tight">Employability</span>
              </div>
            </div>

          </div>

          {/* Right Image/Mockup Grid Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Outer glowing shield */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-20 blur-xl animate-pulse" />
              
              {/* Main Graphic Card */}
              <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-slate-900/40 backdrop-blur-xl p-4 sm:p-6">
                
                {/* Header detail */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">stuttgart_mainframe.de</span>
                </div>

                {/* Simulated Interactive Engine visualizer */}
                <div className="relative h-64 sm:h-72 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/60 via-slate-950 to-slate-950 border border-white/5 overflow-hidden flex flex-col items-center justify-center">
                  
                  {/* Visual blueprint overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    {/* Animated core icon */}
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center mb-4 cursor-pointer hover:border-blue-400 hover:bg-blue-500/20 transition-all secure-ring">
                      <Cpu className="w-8 h-8 text-blue-400" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400 mb-1 tracking-wider">● CYBERPHYSICAL GRID LAB</span>
                    <h3 className="text-md sm:text-lg text-white font-display font-semibold mb-2">Stuttgart Innovation Campus</h3>
                    <p className="text-[11px] text-slate-400 max-w-xs font-sans">
                      Connect to virtual PLC systems, smart thermodynamic loops, or AI compiler sandboxes natively in Germany.
                    </p>
                  </div>

                  {/* Corner stats decoration */}
                  <div className="absolute bottom-2 left-2 z-10 text-[9px] font-mono text-slate-500 bg-black/40 px-1.5 py-0.5 rounded border border-white/5">
                    LATENCY: 12ms
                  </div>
                  <div className="absolute bottom-2 right-2 z-10 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    LIVE CONNECTION
                  </div>
                </div>

                {/* Sub features listed on micro-cards */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-lg bg-white/3 border border-white/5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[11px] text-slate-200 font-sans">ISO-Certified ECTS</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/3 border border-white/5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[11px] text-slate-200 font-sans">Bosch & BMW Interns</span>
                  </div>
                </div>

              </div>
              
              {/* Floaters */}
              <div className="absolute -top-6 -right-6 bg-slate-800 border border-slate-700/60 rounded-lg p-3 shadow-lg z-20 hidden md:block select-none pointer-events-none animate-bounce" style={{ animationDuration: "6s" }}>
                <div className="flex items-center gap-2.5">
                  <span className="p-1 bg-yellow-500/10 text-yellow-500 rounded">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono">SCHOLARSHIPS</p>
                    <p className="text-[11px] font-bold text-white">Up to 80% Subsidy</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
