import React, { useState } from "react";
import { Award, Compass, Calculator, Users, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ScholarshipPage({ onOpenApply }: { onOpenApply: () => void }) {
  
  // State for Calculator
  const [cgpa, setCgpa] = useState<number>(3.5);
  const [country, setCountry] = useState<string>("Bangladesh");
  const [major, setMajor] = useState<string>("Energy Technology");
  const [gender, setGender] = useState<string>("Male");
  const [isWorking, setIsWorking] = useState<boolean>(false);
  
  const [result, setResult] = useState<{
    waivePercentage: number;
    subsidyName: string;
    details: string;
    annualSaving: number;
  } | null>(null);

  const calculateEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    
    let baseWaive = 0;
    let subsidyName = "General GIAET Academic Discount";
    let details = "Congratulations! You qualify for our general online hybrid learning subsidies.";
    
    // Core merit rules
    if (cgpa >= 3.90) {
      baseWaive = 80;
      subsidyName = "German Industry Pioneer Merit Scholarship";
      details = "Stellar Academic Credentials! You qualify for our highest merit award based on Germany's industrial innovation sponsorship. Standard tuition is heavily subsidized.";
    } else if (cgpa >= 3.70) {
      baseWaive = 60;
      subsidyName = "High Achiever Engineering Fellowship";
      details = "Exquisite performance. You qualify for a 60% tuition waiver to expand your laboratory studies in Stuttgart.";
    } else if (cgpa >= 3.50) {
      baseWaive = 45;
      subsidyName = "Emerging Global Innovators Grant";
      details = "Great academic framework. You are granted GIAET's developmental scholarship aimed at empowering technological progress.";
    } else {
      baseWaive = 25;
      subsidyName = "Global Ingress Technology Subsidy";
      details = "GIAET aims to make engineering accessible. You are granted our baseline 25% flexible web subsidy.";
    }

    // Special geographical rule: Developing Nations (Bangladesh, Kenya, Senegal, etc.) get a booster!
    if (["Bangladesh", "Kenya", "Senegal", "Morocco", "Sierra Leone", "Nigeria"].includes(country)) {
      if (baseWaive < 60) {
        baseWaive += 15;
        subsidyName = "Global South Technologist Booster Grant";
        details = `A specialized +15% regional booster has been applied for candidates from ${country} to bridge the global technological divide.`;
      }
    }

    // Special Female in STEM Fellow rule
    if (gender === "Female") {
      baseWaive = Math.min(85, baseWaive + 10);
      subsidyName = "Women in Robotics and automation Fellow";
      details += " Including a special female engineer booster to encourage diversity in Automation & Core STEM.";
    }

    // Working Professional Professional Adjustment
    if (isWorking && baseWaive < 50) {
      baseWaive = 50;
      subsidyName = "Working Professional Flexible Scholarship";
      details = "You qualify for our dedicated 50% flat discount designed for working diploma engineers pursuing career upgrades online.";
    }

    // Caps
    baseWaive = Math.min(85, baseWaive);

    // Calculate savings (Using CS/Energy fee €4500 as benchmark)
    const annualSaving = Math.round(9000 * (baseWaive / 100));

    setResult({
      waivePercentage: baseWaive,
      subsidyName,
      details,
      annualSaving
    });
  };

  const opportunities = [
    {
      title: "German Industry Pioneer Merit Scholarship",
      value: "Up to 80% Tuition Waiver",
      requirements: "Requires CGPA ≥ 3.80 / 4.00, verified academic transcripts, and 2 letters of reference.",
      desc: "Designed to fuel high-intelligence robotics and electrical engineering innovators globally."
    },
    {
      title: "Emerging Global Innovators Grant",
      value: "Up to 60% Subsidy",
      requirements: "Available for students from designated developing countries (e.g. Bangladesh, Kenya, India).",
      desc: "Promotes decentralized digital engineers and renewable energy systems development."
    },
    {
      title: "Women in Robotics & STEM Fellowship",
      value: "Flat 70% Tuition Waiver",
      requirements: "Open to outstanding female candidates entering CS, EEE, or Automation Engineering.",
      desc: "GIAET actively supports gender diversity in highly advanced European manufacturing sectors."
    },
    {
      title: "Working Professional & Diploma Fellow",
      value: "30% - 50% Tuition Waive",
      requirements: "Requires proof of employment or previous engineering/polytechnic diploma registers.",
      desc: "Sponsors flexible, evening-friendly online hybrid models for industrial mechanics looking to upscale."
    }
  ];

  return (
    <section id="scholarship-section" className="py-20 relative bg-slate-950">
      <div className="absolute inset-0 bg-[#090b14] bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-3">FINANCIAL SUBSIDIES</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Global Scholarship Initiatives
          </h2>
          <p className="text-slate-400 font-sans text-sm">
            At GIAET, we believe financial circumstances should never suppress engineering talent. Review our subsidized programs and use the intelligence calculator to estimate your waiver level.
          </p>
        </div>

        {/* Scholarships List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opp, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-800 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                    <Award className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                    {opp.value}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-white">
                  {opp.title}
                </h3>
                <p className="text-slate-400 font-sans text-xs">
                  {opp.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                <p className="text-[10px] uppercase font-mono text-slate-500 font-bold">Eligibility Rule</p>
                <p className="text-xs text-slate-300 font-sans">{opp.requirements}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Eligibility Estimator Calculator */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border-white/10 shadow-xl max-w-3xl mx-auto">
          
          <div className="flex items-center gap-2.5 mb-8 border-b border-white/5 pb-4">
            <Calculator className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-display font-semibold text-white">
              Sponsor Waiver Compatibility Calculator
            </h3>
          </div>

          <form onSubmit={calculateEligibility} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            
            {/* GPA */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest">
                Target CGPA / GPA Record (out of 4.00):
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="2.00"
                  max="4.00"
                  step="0.05"
                  value={cgpa}
                  onChange={(e) => setCgpa(parseFloat(e.target.value))}
                  className="w-full select-none cursor-pointer accent-blue-600"
                />
                <span className="text-sm font-mono font-bold text-white bg-slate-900 border border-white/15 px-2.5 py-1 rounded shrink-0">
                  {cgpa.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest">
                Country of Residence:
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-slate-950 text-white rounded-lg p-2.5 text-xs sm:text-sm border border-white/10 focus:outline-none focus:border-blue-500"
              >
                <option value="Bangladesh">Bangladesh</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Kenya">Kenya</option>
                <option value="Russia">Russia</option>
                <option value="Spain">Spain</option>
                <option value="Senegal">Senegal</option>
                <option value="Morocco">Morocco</option>
                <option value="Canada">Canada</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </div>

            {/* Desired Degree */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest">
                Desired Engineering Discipline:
              </label>
              <select
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="w-full bg-slate-950 text-white rounded-lg p-2.5 text-xs sm:text-sm border border-white/10 focus:outline-none focus:border-blue-500"
              >
                <option value="Mechanical Engineering">BSc Mechanical Engineering</option>
                <option value="Industrial & Production">BSc Industrial & Production (IPE)</option>
                <option value="Automation Engineering">BSc Automation Engineering</option>
                <option value="Electrical Engineering">BSc Electrical & Electronic (EEE)</option>
                <option value="Computer Science">BSc Computer Science & Engineering (CSE)</option>
                <option value="Energy Technology">BSc Energy Technology</option>
              </select>
            </div>

            {/* Gender identity */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest">
                Gender:
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1.5 text-xs text-slate-300">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={() => setGender("Male")}
                    className="accent-blue-600 cursor-pointer"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center gap-1.5 text-xs text-slate-300">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={() => setGender("Female")}
                    className="accent-blue-600 cursor-pointer"
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>

            {/* Work status */}
            <div className="sm:col-span-2 py-2">
              <label className="flex items-center gap-2.5 text-xs text-slate-300 select-none cursor-pointer">
                <input
                  type="checkbox"
                  checked={isWorking}
                  onChange={(e) => setIsWorking(e.target.checked)}
                  className="w-4 h-4 rounded border-white/10 accent-blue-600"
                />
                <span>I am currently actively working in the industry (Working Professional Fellowship rule applies)</span>
              </label>
            </div>

            <button
              type="submit"
              className="sm:col-span-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-slate-100 font-bold rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Analyze Subsidy Eligibility Matrix
            </button>

          </form>

          {/* Results display */}
          {result && (
            <div className="p-6 sm:p-8 rounded-xl bg-blue-950/20 border border-blue-500/25 space-y-4 animate-fadeIn">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono font-semibold text-blue-400 uppercase tracking-widest block mb-1">
                    ESTIMATED DEDUCTION MODEL
                  </span>
                  <h4 className="text-xl font-display font-semibold text-slate-100">
                    {result.subsidyName}
                  </h4>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-emerald-400">
                    {result.waivePercentage}%
                  </span>
                  <p className="text-[9px] uppercase font-mono text-slate-500">Tuition Waiver</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {result.details}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs text-slate-400 font-mono">
                <div>
                  <span>Estimated Annual Savings:</span>
                  <p className="text-slate-200 font-bold text-sm mt-0.5">€{result.annualSaving}</p>
                </div>
                <div>
                  <span>Target major program:</span>
                  <p className="text-slate-200 font-bold text-sm mt-0.5">{major}</p>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={onOpenApply}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Incorporate into digital scholarship application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
