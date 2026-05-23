import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FacultiesSection from "./components/FacultiesSection";
import ProgramsSection from "./components/ProgramsSection";
import CertificateVerification from "./components/CertificateVerification";
import ScholarshipPage from "./components/ScholarshipPage";
import VirtualCampus from "./components/VirtualCampus";
import ResearchSection from "./components/ResearchSection";
import CareerSection from "./components/CareerSection";
import Footer from "./components/Footer";

// Data
import { PROGRAMS, FACULTY_MEMBERS } from "./data/universityData";

// Icons
import { 
  FileText, Upload, CheckCircle2, X, Award, MapPin, 
  Clock, Calendar, BookOpen, UserCheck, ShieldAlert, Laptop, Play
} from "lucide-react";

export default function App() {
  const [currentTab, setTab] = useState<string>("home");
  const [selectedProgramId, setSelectedProgramId] = useState<string>("me");

  // Modals
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  // Application Form States
  const [applyStep, setApplyStep] = useState(1);
  const [applyName, setApplyName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [applyCountry, setApplyCountry] = useState("Bangladesh");
  const [applyMajor, setApplyMajor] = useState("et");
  const [applyCgpa, setApplyCgpa] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Scroll back to top on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentTab]);

  // File Upload Handlers (Drag & Drop + Click manual selection)
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyStep(2); // Success Step
  };

  const resetApplyForm = () => {
    setApplyStep(1);
    setApplyName("");
    setApplyEmail("");
    setUploadedFile(null);
    setIsApplyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans select-none antialiased">
      
      {/* Sticky Top-Bar */}
      <Header currentTab={currentTab} setTab={setTab} />

      {/* Main View Area */}
      <main className="flex-grow select-text">
        {currentTab === "home" && (
          <div className="animate-fadeIn">
            <Hero 
              setTab={setTab} 
              onOpenApply={() => setIsApplyModalOpen(true)}
              onOpenTour={() => setIsTourModalOpen(true)}
            />
            <AboutSection />
            <FacultiesSection 
              programs={PROGRAMS} 
              setTab={setTab} 
              setSelectedProgram={setSelectedProgramId} 
            />
            <ResearchSection />
            <CareerSection />
          </div>
        )}

        {currentTab === "about" && (
          <div className="animate-fadeIn">
            <div className="py-12 bg-slate-900/40 border-b border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <span className="text-xs font-mono text-blue-400">GIAET MATRIX</span>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                  About GIAET University
                </h1>
              </div>
            </div>
            <AboutSection />
            
            {/* Added Executive and Administrative Department subsection */}
            <section className="py-16 bg-slate-950">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <div className="max-w-3xl mb-12">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">GERMAN REGISTRARS & LEADERS</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Executive & Administrative Division
                  </h2>
                  <p className="text-slate-400 text-sm font-sans mt-2 leading-relaxed">
                    Our administrative services center manages student enrollment, ECTS transcripts auditing, virtual hardware access channels, and global scholarship distributions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {FACULTY_MEMBERS.filter(f => f.department === "Executive & Administrative Department").map((f, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-2xl border-white/5 text-left flex flex-col justify-between">
                      <div className="space-y-4">
                        <img 
                          src={f.image} 
                          alt={f.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="text-base font-bold text-slate-100">{f.name}</h4>
                          <p className="text-xs text-blue-400 font-mono font-medium">{f.title}</p>
                        </div>
                        <p className="text-xs text-slate-400 font-sans leading-relaxed">
                          Role: Oversight of digital university framework, managing standard and specialized enrollment criteria.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/5 mt-6 space-y-1">
                        <p className="text-[10px] font-mono text-slate-500">Academic Background:</p>
                        <p className="text-[11px] text-slate-300 truncate font-sans">{f.education}</p>
                        <p className="text-[11px] text-blue-300 font-mono mt-1.5">{f.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {currentTab === "faculties" && (
          <div className="animate-fadeIn">
            <div className="py-12 bg-slate-900/40 border-b border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <span className="text-xs font-mono text-blue-400">DIRECTIVES</span>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                  Our Engineering Faculties
                </h1>
              </div>
            </div>
            <FacultiesSection 
              programs={PROGRAMS} 
              setTab={setTab} 
              setSelectedProgram={setSelectedProgramId} 
            />
          </div>
        )}

        {currentTab === "degrees" && (
          <div className="animate-fadeIn">
            <ProgramsSection 
              programs={PROGRAMS}
              facultyMembers={FACULTY_MEMBERS}
              selectedProgramId={selectedProgramId}
              setSelectedProgramId={setSelectedProgramId}
              onOpenApply={() => setIsApplyModalOpen(true)}
            />
          </div>
        )}

        {currentTab === "scholarships" && (
          <div className="animate-fadeIn">
            <ScholarshipPage onOpenApply={() => setIsApplyModalOpen(true)} />
          </div>
        )}

        {currentTab === "admissions" && (
          <div className="animate-fadeIn">
            
            {/* Banner */}
            <div className="py-12 bg-slate-900/40 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <span className="text-xs font-mono text-emerald-400">ENROLLMENT DIRECTIVES</span>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                  Admissions Criteria & Tuition Fees
                </h1>
              </div>
            </div>

            {/* Admission requirements section */}
            <section className="py-16 bg-slate-950">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                  
                  {/* Left Column (Admissions checklist, 7 block) */}
                  <div className="lg:col-span-7 space-y-8">
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5">
                      <h3 className="text-xl font-display font-bold text-white mb-4">Admissions Guide</h3>
                      <p className="text-xs text-slate-400 mb-6 font-sans">
                        GIAET recruits students with outstanding records in STEM disciplines. All online degree admissions strictly align with Germany's university enrollment directives.
                      </p>

                      <div className="space-y-4">
                        {[
                          { title: "Academic Qualifications", text: "Higher Secondary Certificate or equivalent polytechnic engineering diploma with premium grades in Mathematics and Physics." },
                          { title: "English Language Standard", text: "Exemptions apply to students who have studied completely in English. TOEFL iBT ≥ 80 or IELTS Academic ≥ 6.5 accepted." },
                          { title: "Digital Compatibility Audit", text: "Candidates must have high-speed internet to operate GIAET's virtual laboratories, SCADA controls, and cloud environments." },
                          { title: "Application Materials checklist", text: "Signed transcript certificates, native country address certifications, and reference letter from previous technical lecturers." }
                        ].map((req, idx) => (
                          <div key={idx} className="p-4 bg-white/3 border border-white/5 rounded-xl flex items-start gap-3.5">
                            <span className="p-1 px-2.5 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold rounded shrink-0">0{idx + 1}</span>
                            <div>
                              <h4 className="text-xs sm:text-sm font-semibold text-slate-200">{req.title}</h4>
                              <p className="text-[11px] text-slate-400 mt-1 font-sans leading-relaxed">{req.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Detailed Fees Breakdown, 5 block) */}
                  <div className="lg:col-span-5 space-y-8">
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 bg-slate-900/30">
                      <h3 className="text-xl font-display font-bold text-white mb-4">Tuition Fees Schedule</h3>
                      <p className="text-xs text-slate-400 mb-6 font-sans leading-relaxed">
                        To maintain digital global excellence, tuition at GIAET is structured on a per-semester credit basis. Clear breakdown of charges:
                      </p>

                      <div className="space-y-3.5 text-xs">
                        <div className="flex justify-between pb-2 border-b border-white/5">
                          <span className="text-slate-400">One-time Matriculation Fee</span>
                          <span className="font-mono text-slate-200">€250 (Non-refundable)</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-white/5">
                          <span className="text-slate-400">Regular Tuition Fee per semester</span>
                          <span className="font-mono text-slate-200">€4300 - €4700</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-white/5">
                          <span className="text-slate-400">Virtual Lab Access Charge</span>
                          <span className="font-mono text-slate-200">No Cost (Included in tuition)</span>
                        </div>
                        <div className="flex justify-between pb-1">
                          <span className="text-slate-400">Thesis Mentorship Surcharge</span>
                          <span className="font-mono text-slate-200">€400 (Semester 7 only)</span>
                        </div>
                      </div>

                      <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl mt-6">
                        <h4 className="text-xs font-bold text-indigo-300">Subsidy Eligible</h4>
                        <p className="text-[10px] text-slate-400 leading-relaxed mt-1 font-sans">
                          Waivers are automatically processed on a merit or origin country priority basis (reducing tuition by up to 80%). Check your eligibility now:
                        </p>
                        <button
                          onClick={() => setTab("scholarships")}
                          className="mt-3.5 w-full py-2 bg-indigo-950/40 text-indigo-300 hover:text-white rounded text-xs font-medium border border-indigo-500/25 cursor-pointer text-center"
                        >
                          Launch Scholarship Estimator
                        </button>
                      </div>

                      <button
                        onClick={() => setIsApplyModalOpen(true)}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider mt-6 cursor-pointer"
                      >
                        Initiate Application File
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </section>
          </div>
        )}

        {currentTab === "verification" && (
          <div className="animate-fadeIn">
            <CertificateVerification />
          </div>
        )}

        {currentTab === "virtual-campus" && (
          <div className="animate-fadeIn">
            <VirtualCampus />
          </div>
        )}

        {currentTab === "research" && (
          <div className="animate-fadeIn">
            <div className="py-12 bg-slate-900/40 border-b border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <span className="text-xs font-mono text-blue-400 font-bold">STUTTGART_LABS</span>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                  Active Scientific Studies
                </h1>
              </div>
            </div>
            <ResearchSection />
          </div>
        )}

        {currentTab === "career" && (
          <div className="animate-fadeIn">
            <div className="py-12 bg-slate-900/40 border-b border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <span className="text-xs font-mono text-blue-400">GLOBAL PLACEMENTS</span>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                  Corporate Collaborations & Alumni
                </h1>
              </div>
            </div>
            <CareerSection />
          </div>
        )}
      </main>

      {/* Global Immersive Footer */}
      <Footer />

      {/* APPLICATION REGISTRAR MODAL OVERLAY */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm select-text">
          <div className="bg-slate-950 border border-white/10 rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl animate-scaleIn">
            
            <button
              onClick={resetApplyForm}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {applyStep === 1 ? (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-left">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <h3 className="text-md sm:text-lg font-display font-bold text-white">Digital Enrollment Form</h3>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Applicants Full Name</label>
                  <input
                    type="text"
                    required
                    value={applyName}
                    onChange={(e) => setApplyName(e.target.value)}
                    placeholder="e.g. Asifur Rahman"
                    className="w-full bg-slate-900 text-white rounded px-3 py-2 text-xs sm:text-sm border border-white/5 focus:outline-none focus:border-blue-500 placeholder-slate-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Valid Email Address</label>
                  <input
                    type="email"
                    required
                    value={applyEmail}
                    onChange={(e) => setApplyEmail(e.target.value)}
                    placeholder="candidate@example.com"
                    className="w-full bg-slate-900 text-white rounded px-3 py-2 text-xs sm:text-sm border border-white/5 focus:outline-none focus:border-blue-500 placeholder-slate-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Country of origin</label>
                    <select
                      value={applyCountry}
                      onChange={(e) => setApplyCountry(e.target.value)}
                      className="w-full bg-slate-900 text-white rounded px-3 py-2 text-xs sm:text-sm border border-white/5 focus:outline-none"
                    >
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Germany">Germany</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Intended Program</label>
                    <select
                      value={applyMajor}
                      onChange={(e) => setApplyMajor(e.target.value)}
                      className="w-full bg-slate-900 text-white rounded px-3 py-2 text-xs sm:text-sm border border-white/5 focus:outline-none"
                    >
                      {PROGRAMS.map((p) => (
                        <option key={p.id} value={p.id}>{p.shortName}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Previous academic CGPA</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 3.75"
                    value={applyCgpa}
                    onChange={(e) => setApplyCgpa(e.target.value)}
                    className="w-full bg-slate-900 text-white rounded px-3 py-2 text-xs sm:text-sm border border-white/5 focus:outline-none focus:border-blue-500 placeholder-slate-600"
                  />
                </div>

                {/* File Upload Zone supporting Click + Drag over */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Upload Transcripts / Academic Logs</label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-5 text-center transition-all cursor-pointer ${
                      isDragging 
                        ? "border-blue-500 bg-blue-500/5" 
                        : "border-white/10 hover:border-slate-700 bg-slate-900/60"
                    }`}
                  >
                    <input
                      type="file"
                      id="apply-file-input"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="apply-file-input" className="cursor-pointer">
                      <div className="flex flex-col items-center space-y-1.5">
                        <Upload className="w-6 h-6 text-slate-400 group-hover:text-white" />
                        {uploadedFile ? (
                          <div className="text-xs text-emerald-400 font-sans font-semibold">
                            ✔ Detected: {uploadedFile.name}
                          </div>
                        ) : (
                          <>
                            <p className="text-xs text-slate-300 font-sans">
                              Drag & Drop transcript file here or <span className="text-blue-400 underline font-bold">browse</span>
                            </p>
                            <p className="text-[9px] text-slate-500 font-mono">PDF, PNG or JPG max 15MB</p>
                          </>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg uppercase tracking-wider mt-6 cursor-pointer"
                >
                  Filing Admissions Docket
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-5">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <div>
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide">DOCKET SUCCESSFULLY RECORDED</h3>
                  <p className="text-xs text-slate-300 font-sans max-w-sm mx-auto leading-relaxed mt-2">
                    Matriculation algorithms recorded your profile file for <strong className="text-blue-300">{applyName}</strong>. 
                  </p>
                  <p className="text-xs text-slate-400 font-sans max-w-sm mx-auto leading-relaxed mt-1">
                    To finalize the file and speak to an institutional supervisor, you <strong>MUST</strong> upload official transcripts via GIAET's verified Google Form channel.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl text-left border border-white/5 space-y-2">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Required Action Link:</span>
                  <a
                    href="https://forms.gle/uUR1tXRKHKgDshyZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
                  >
                    <span>Finalize with GIAET Google Form</span>
                    <Upload className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={resetApplyForm}
                  className="px-6 py-2 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-xs"
                >
                  Dismiss Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* VIRTUAL DRONE TOUR MODAL OVERLAY */}
      {isTourModalOpen && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-slate-950 border border-white/10 rounded-2xl w-full max-w-2xl p-4 sm:p-6 relative shadow-2xl animate-scaleIn">
            
            <button
              onClick={() => setIsTourModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <Laptop className="w-5 h-5 text-blue-400 animate-pulse" />
                <h3 className="text-md sm:text-lg font-display font-bold text-white">Stuttgart Campus Virtual Tour</h3>
              </div>

              {/* Simulated visual player */}
              <div className="relative aspect-video rounded-xl bg-black overflow-hidden flex flex-col justify-between p-4 border border-white/5">
                <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('https://picsum.photos/seed/stuttgart/1280/720')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                <div className="relative z-20 flex justify-end">
                  <span className="text-[10px] font-mono text-white bg-black/55 px-2 py-0.5 rounded">Drone angle: Industriestraße 145 Campus</span>
                </div>

                {/* Player actions visual mock */}
                <div className="relative z-20 self-center p-3 sm:p-5 bg-blue-600/80 rounded-full cursor-pointer hover:bg-blue-500 animate-pulse">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current text-white" />
                </div>

                <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span>► ONLINE BROADCAST ACTIVE</span>
                  <span>02:40 / 10:00</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">
                Explore GIAET's physical Innovation Campus located at Industriestraße 145, 70565 Stuttgart, Germany. From Stuttgart's high-tech robotics workshops to hybrid lecture centers, see where international engineering studies come alive.
              </p>

              <div className="flex justify-end pt-4 border-t border-white/5">
                <button
                  onClick={() => setIsTourModalOpen(false)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg cursor-pointer"
                >
                  Conclude Virtual Tour
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
