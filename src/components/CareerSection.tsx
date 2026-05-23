import React, { useState } from "react";
import { Briefcase, ArrowRight, ArrowLeft, Star, HeartHandshake, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS, PARTNER_LOGOS } from "../data/universityData";

export default function CareerSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimony = TESTIMONIALS[activeIdx];

  return (
    <section id="career-section" className="py-20 relative bg-slate-900/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title details */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-3">PLACEMENT ECOSYSTEM</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Career & Corporate Partnerships
          </h2>
          <p className="text-slate-400 font-sans text-sm">
            GIAET collaborates directly with German conglomerates to secure prestigious internships, virtual field projects, and direct graduate hires.
          </p>
        </div>

        {/* Partners Logos line up */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-20">
          {PARTNER_LOGOS.map((partner, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-slate-950/40 border border-white/5 rounded-xl hover:border-slate-800 transition-colors flex flex-col items-center justify-center gap-2 group cursor-default"
            >
              <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-200">
                {partner.logo}
              </span>
              <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-white transition-colors uppercase">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Slide Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Slide Text Columns (7 block) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-1.5 text-blue-400 bg-blue-500/10 border border-blue-500/25 px-2.5 py-1 rounded-full w-fit">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Alumni Success Story</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Hear From Our Global Engineers
            </h3>

            {/* Main Carousel Card */}
            <div className="relative min-h-[180px] sm:min-h-[140px] mb-3">
              <p className="font-sans italic text-slate-300 text-sm sm:text-base leading-relaxed">
                "{activeTestimony.text}"
              </p>
            </div>

            <div className="border-t border-white/5 pt-4">
              <h4 className="text-sm font-bold text-white">{activeTestimony.name}</h4>
              <p className="text-xs text-slate-400 font-mono">
                {activeTestimony.program} • Class of {activeTestimony.graduationYear}
              </p>
              <p className="text-[10px] text-blue-400 font-mono mt-0.5 uppercase">Origin: {activeTestimony.country}</p>
            </div>

            {/* Slider navigators */}
            <div className="flex gap-2.5">
              <button
                onClick={prevSlide}
                className="p-2 sm:p-2.5 bg-slate-950/60 text-slate-400 hover:text-white rounded-lg border border-white/5 hover:border-slate-700 cursor-pointer transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 sm:p-2.5 bg-slate-950/60 text-slate-400 hover:text-white rounded-lg border border-white/5 hover:border-slate-700 cursor-pointer transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Picture Box Column (5 block) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[280px] sm:max-w-[320px]">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-20 blur-xl animate-pulse" />
              <div className="relative aspect-square rounded-2xl border border-white/10 overflow-hidden bg-slate-950">
                <img
                  src={activeTestimony.image}
                  alt={activeTestimony.name}
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Info badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/60 border border-white/10 rounded-lg p-2.5 backdrop-blur-md">
                  <p className="text-[10px] font-mono text-slate-400">PLACEMENT SUMMARY</p>
                  <p className="text-xs font-bold text-white uppercase mt-0.5">Stuttgart Engineering Intern</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate recruitment pipeline box */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-md font-display font-semibold text-slate-200 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-blue-400" />
              <span>Are you a Corporate Entity interested in GIAET engineers?</span>
            </h4>
            <p className="text-xs text-slate-400 font-sans">
              Contact our corporate relations division to pitch thesis sponsorships or recruit directly from our database.
            </p>
          </div>
          <a
            href="https://forms.gle/uUR1tXRKHKgDshyZ9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-slate-100 font-semibold text-xs rounded-lg transition-colors cursor-pointer text-center"
          >
            Affiliation Request form
          </a>
        </div>

      </div>
    </section>
  );
}
