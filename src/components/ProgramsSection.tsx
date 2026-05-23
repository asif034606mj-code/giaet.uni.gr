import React, { useState } from "react";
import { Program, FacultyMember } from "../types";
import { Clock, Book, Laptop, Briefcase, DollarSign, Award, Grid, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";

interface ProgramsSectionProps {
  programs: Program[];
  facultyMembers: FacultyMember[];
  selectedProgramId: string;
  setSelectedProgramId: (id: string) => void;
  onOpenApply: () => void;
}

export default function ProgramsSection({
  programs,
  facultyMembers,
  selectedProgramId,
  setSelectedProgramId,
  onOpenApply
}: ProgramsSectionProps) {
  
  const [activeSemester, setActiveSemester] = useState<number>(1);

  // Find currently active program object
  const activeProgram = programs.find(p => p.id === selectedProgramId) || programs[0];

  // Helper to filter faculty members assigned to this specific school department
  const assignedFaculty = facultyMembers.filter(
    f => f.department === activeProgram.faculty
  );

  return (
    <section id="programs-section" className="py-20 relative bg-slate-950">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-3">CURRICULUM & SYLLABI</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            BSc Eng. Program Directives
          </h2>
          <p className="text-slate-400 font-sans text-sm">
            Review detailed course structures and virtual laboratory outlines. Each course is custom-engineered alongside Stuttgart manufacturing pioneers with rigid scientific guidelines.
          </p>
        </div>

        {/* Six Programs Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {programs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => {
                setSelectedProgramId(prog.id);
                setActiveSemester(1);
              }}
              className={`px-4 py-2.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                activeProgram.id === prog.id
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/10"
                  : "bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800"
              }`}
            >
              {prog.shortName}
            </button>
          ))}
        </div>

        {/* Program Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Overview & Labs & Fees (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Overview Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded">
                  {activeProgram.faculty}
                </span>
                <span className="text-xs font-mono text-slate-400">GIAET-BSc-ENG</span>
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-white">
                {activeProgram.name}
              </h3>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                {activeProgram.overview}
              </p>

              {/* Core Features list */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Duration: {activeProgram.duration}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>Credits: {activeProgram.ects} ECTS Standard</span>
                </div>
              </div>
            </div>

            {/* Virtual Labs Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h4 className="flex items-center gap-2 text-md font-display font-semibold text-white mb-4">
                <Laptop className="w-5 h-5 text-blue-400" />
                <span>Integrated Virtual Laboratories</span>
              </h4>
              <p className="text-xs text-slate-400 mb-4 font-sans leading-relaxed">
                Students access server-side simulations powered by GIAET's Stuttgart mainframe. Run digital stress calculations, automated logic circuits, and fluid modeling.
              </p>
              <div className="space-y-3">
                {activeProgram.virtualLabs.map((lab, idx) => (
                  <div key={idx} className="p-3 bg-white/3 rounded-lg border border-white/5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-sans font-medium text-slate-200">{lab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Outcomes Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h4 className="flex items-center gap-2 text-md font-display font-semibold text-white mb-4">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span>Strategic Placement Outcomes</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProgram.careerOutcomes.map((career, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/45 rounded-lg flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-xs font-sans text-slate-300 leading-tight">{career}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Semester Breakdown & Tuition (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Semester-by-Semester Curriculum Accordion */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <h4 className="flex items-center gap-2 text-md font-display font-semibold text-white">
                  <Book className="w-5 h-5 text-blue-400" />
                  <span>Module Syllabus Syllabus</span>
                </h4>
                <span className="text-[10px] font-mono text-slate-500">SEMESTERS 1 - 7</span>
              </div>

              {/* Semester Tabs Selector */}
              <div className="flex items-center gap-1 overflow-x-auto pb-3 mb-4 scrollbar-none">
                {activeProgram.semesters.map((sem) => (
                  <button
                    key={sem.number}
                    onClick={() => setActiveSemester(sem.number)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md shrink-0 cursor-pointer ${
                      activeSemester === sem.number
                        ? "bg-blue-600/25 text-blue-400 border border-blue-500/20"
                        : "text-slate-400 bg-white/3 hover:text-white border border-transparent"
                    }`}
                  >
                    Sem {sem.number}
                  </button>
                ))}
              </div>

              {/* Course Units list */}
              <div className="space-y-4">
                {activeProgram.semesters
                  .find((s) => s.number === activeSemester)
                  ?.courses.map((course) => (
                    <div key={course.code} className="p-3 bg-white/3 border border-white/5 rounded-lg select-text">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10">
                          {course.code}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">
                          {course.ects} ECTS
                        </span>
                      </div>
                      <h5 className="text-xs font-semibold text-slate-100 mb-1 font-sans">
                        {course.name}
                      </h5>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Program Tuition Fees Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 bg-blue-950/20 border-blue-500/20">
              <h4 className="flex items-center gap-2 text-md font-display font-semibold text-white mb-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
                <span>Program Fees & Costs</span>
              </h4>
              <div className="space-y-4 pt-3">
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-xs text-slate-400 font-sans">Tuition per Semester</span>
                  <span className="text-lg font-mono font-bold text-white">€{activeProgram.tuitionPerSemester}</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-xs text-slate-400 font-sans">Required Semester Credit Loads</span>
                  <span className="text-xs font-mono text-slate-200">30 ECTS</span>
                </div>
                <div className="flex justify-between items-end pb-2">
                  <span className="text-xs text-slate-400 font-sans">Accredited Degrees Total (7 Sem)</span>
                  <span className="text-sm font-mono text-slate-200">210 ECTS Standard</span>
                </div>

                {/* Subsidized tag */}
                <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                  * Tuition may be subsidized by the regional scholarship program based on origin state or merit. Complete eligibility on GIAET Scholarship calculators.
                </p>

                <button
                  onClick={onOpenApply}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-slate-100 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/10 transition-colors mt-6"
                >
                  <span>Submit Digital enrollment form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* School Faculty Members preview list */}
            {assignedFaculty.length > 0 && (
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                  <h4 className="flex items-center gap-2 text-sm font-sans font-semibold text-slate-300">
                    <Grid className="w-4 h-4 text-blue-400" />
                    <span>Dean & Key Lecturers</span>
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500">{assignedFaculty.length} Assigned</span>
                </div>
                <div className="space-y-3.5">
                  {assignedFaculty.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <img 
                        src={f.image} 
                        alt={f.name}
                        className="w-9 h-9 rounded-full object-cover border border-white/10 shrink-0" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-200 truncate">{f.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{f.title}</p>
                        <p className="text-[9px] text-blue-400 truncate mt-0.5">{f.specialization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
