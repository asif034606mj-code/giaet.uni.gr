import React, { useState } from "react";
import { Search, ShieldAlert, ShieldCheck, Download, Award, Share2, Clock, CheckCircle2, RefreshCw } from "lucide-react";
import { Student } from "../types";
import { STUDENTS_DATA } from "../data/students";

export default function CertificateVerification() {
  const [regNo, setRegNo] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchStep, setSearchStep] = useState(0);
  const [queriedStudent, setQueriedStudent] = useState<Student | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanReg = regNo.trim();
    if (!cleanReg) return;

    setIsSearching(true);
    setSearchStep(1);
    setQueriedStudent(null);
    setHasSearched(false);

    // Simulated cryptographic mainframe lookup sequence
    setTimeout(() => {
      setSearchStep(2);
      setTimeout(() => {
        setSearchStep(3);
        setTimeout(() => {
          // Actual record matching inside STUDENTS_DATA
          const matched = STUDENTS_DATA.find(
            (s) => s.registrationNo === cleanReg
          );
          setQueriedStudent(matched || null);
          setIsSearching(false);
          setHasSearched(true);
          setSearchStep(0);
        }, 600);
      }, 500);
    }, 450);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="verification-section" className="py-20 relative bg-slate-950 min-h-[75vh]">
      <div className="absolute inset-0 bg-[#0c101d] bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Content */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-full mb-3 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider">Accredited Verification Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Certificate & Credentials Registry
          </h2>
          <p className="text-slate-400 font-sans text-sm">
            Instantly audit individual student transcripts, degrees, and CGPA calculations directly on GIAET’s secure university database registries.
          </p>
        </div>

        {/* Outer verification box */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto border-white/10 shadow-2xl">
          
          <form onSubmit={handleSearch} className="space-y-4 mb-8">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
              Input Student Registration ID Number:
            </label>
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Enter Student Registration ID..."
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  disabled={isSearching}
                  className="w-full bg-slate-950/80 text-white rounded-lg pl-11 pr-4 py-3.5 text-sm sm:text-base border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching || !regNo.trim()}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shrink-0"
              >
                {isSearching ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <span>Verify Credentials</span>
                )}
              </button>
            </div>
          </form>

          {/* Stepper indicator during active simulated scanning */}
          {isSearching && (
            <div className="p-6 rounded-lg bg-blue-950/10 border border-blue-500/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider animate-pulse">Mainframe Security Handshake</span>
                <span className="text-xs font-mono text-slate-500">{searchStep * 33}%</span>
              </div>
              <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${searchStep * 33}%` }}
                />
              </div>
              <div className="text-[11px] font-mono text-slate-400 space-y-1.5 pt-1">
                <p className={`${searchStep >= 1 ? "text-emerald-400" : "text-slate-600"}`}>
                  {searchStep >= 1 ? "✔" : "●"} Connecting secure TLS socket to Stuttgart registry database...
                </p>
                <p className={`${searchStep >= 2 ? "text-emerald-400" : "text-slate-600"}`}>
                  {searchStep >= 2 ? "✔" : "●"} Auditing cryptographic hash signatures & key directories...
                </p>
                <p className={`${searchStep >= 3 ? "text-emerald-400" : "text-slate-600"}`}>
                  {searchStep >= 3 ? "✔" : "●"} Locating student file register for ID no. {regNo}...
                </p>
              </div>
            </div>
          )}

          {/* SCRIPTED SEARCH RESULTS */}
          {hasSearched && queriedStudent && (
            <div className="space-y-6 animate-fadeIn select-text">
              
              {/* Success Badge */}
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400">VERIFICATION SUCCESSFUL</h4>
                  <p className="text-xs text-slate-300 font-sans">
                    Document identified as genuine on GIAET Registry. System Reference: #DE-REG-{queriedStudent.registrationNo}
                  </p>
                </div>
              </div>

              {/* PRINTABLE DIPLOMA PANEL SECTION */}
              <div 
                id="printable-diploma-document"
                className="relative bg-white text-slate-900 rounded-xl p-6 sm:p-10 border-8 border-double border-slate-300 shadow-2xl overflow-hidden"
              >
                
                {/* Visual Watermark Emblem background overlay */}
                <div className="absolute inset-x-0 top-1/4 flex justify-center opacity-[0.03] select-none pointer-events-none">
                  <Award className="w-96 h-96" />
                </div>

                {/* Germany federal-inspired margin ribbon */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-600 via-amber-500 to-black" />

                {/* University Crest Header */}
                <div className="flex flex-wrap items-start justify-between border-b-2 border-slate-300 pb-6 mb-6">
                  <div className="text-left">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 block">GERMANY HIGHER EDUCATION</span>
                    <h5 className="font-display font-extrabold text-xl tracking-tight text-slate-800">GIAET</h5>
                    <p className="text-[11px] text-slate-500 font-sans font-medium">
                      Global Institute of Advanced Engineering & Technology
                    </p>
                    <p className="text-[9px] text-slate-400 font-mono">
                      Industriestraße 145, 70565 Stuttgart, Germany
                    </p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <Award className="w-12 h-12 text-slate-400/80 mb-1" />
                    <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      ✔ SECURED VALID
                    </span>
                  </div>
                </div>

                {/* Diploma Content Body */}
                <div className="space-y-6 text-center py-4">
                  <span className="font-serif italic text-lg text-slate-500 block">
                    This is to officially certify that
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 pb-2 w-fit mx-auto">
                    {queriedStudent.name}
                  </h3>

                  <p className="text-xs font-sans text-slate-600 max-w-lg mx-auto leading-relaxed">
                    having successfully completed the prescribed courses of study, fulfilled all laboratory experiments, and passed the comprehensive examinations has been declared graduated under Europe’s state guidelines with the academic degree of:
                  </p>

                  {/* Pass Out Details */}
                  <div className="my-6 bg-slate-50 border border-slate-200 rounded-lg p-5 text-left max-w-xl mx-auto space-y-3">
                    <div className="grid grid-cols-2 gap-y-2 text-xs font-sans text-slate-700">
                      <div>
                        <span className="text-slate-400 font-medium text-[10px] uppercase font-mono block">Registration ID Number</span>
                        <span className="font-mono font-bold text-slate-800">{queriedStudent.registrationNo}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium text-[10px] uppercase font-mono block">Designated Major</span>
                        <span className="font-bold text-slate-800">{queriedStudent.major}</span>
                      </div>
                      <div className="col-span-2 h-px bg-slate-200 my-1" />
                      <div>
                        <span className="text-slate-400 font-medium text-[10px] uppercase font-mono block">Degree Awarded</span>
                        <span className="font-bold text-slate-800">{queriedStudent.degree}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium text-[10px] uppercase font-mono block">Curriculum Credit Total</span>
                        <span className="font-bold text-slate-800">{queriedStudent.duration}</span>
                      </div>
                      <div className="col-span-2 h-px bg-slate-200 my-1" />
                      <div>
                        <span className="text-slate-400 font-medium text-[10px] uppercase font-mono block">Passing Year</span>
                        <span className="font-bold text-slate-800">{queriedStudent.passingYear}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium text-[10px] uppercase font-mono block">Cumulative GPA (CGPA)</span>
                        <span className="font-mono font-bold text-emerald-600 text-sm">
                          {queriedStudent.cgpa.toFixed(2)} / 4.00
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest pt-2">
                    STUTTGART DIPLOMA DIRECT REQUEST CERTIFICATION
                  </p>
                </div>

                {/* Signatures Row */}
                <div className="grid grid-cols-2 gap-10 mt-10 pt-6 border-t border-slate-200 text-left">
                  <div>
                    <p className="font-serif italic text-slate-400 hover:text-slate-600 transition-colors text-xs select-none">
                      H. Schöning
                    </p>
                    <p className="text-[9px] font-mono uppercase text-slate-500 font-bold border-t border-slate-300 pt-1">
                      Prof. Dr.-Ing. Hans-Dieter Schöning <br/>
                      University Rector & Executive Dean
                    </p>
                  </div>
                  <div className="text-right flex flex-col items-end justify-between">
                    <p className="text-[9px] font-mono text-slate-400 text-right">
                      Verified On: May 23, 2026 UTC <br/>
                      Hash: SHA-256: e8b9c2a381f...
                    </p>
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-red-500/30 flex items-center justify-center text-[10px] font-mono text-red-500 font-bold rotate-12 bg-red-500/5 p-1 select-none pointer-events-none mt-2">
                      OFFICIAL SEAL
                    </div>
                  </div>
                </div>

              </div>

              {/* Printable Controller Bar */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-700 cursor-pointer transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Print PDF</span>
                </button>
              </div>

            </div>
          )}

          {/* SEARCH FAILED EXCEPTION SCREEN */}
          {hasSearched && !queriedStudent && (
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/15 max-w-xl mx-auto space-y-4 text-center animate-fadeIn">
              <ShieldAlert className="w-12 h-12 text-red-400 mx-auto" />
              <div>
                <h4 className="text-md font-semibold text-red-400 uppercase tracking-wide">Verification Failed</h4>
                <p className="text-xs text-slate-300 font-sans mt-2">
                  We could not locate academic registers matching credential entry "<strong>{regNo}</strong>" inside GIAET's Stuttgart files center.
                </p>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">
                Ensure correctness of digits. Note that registers must fall between 208382 to 208431, and 208371.
              </p>
              <button
                type="button"
                onClick={() => { setRegNo(""); setHasSearched(false); }}
                className="px-4 py-2 bg-slate-900 border border-white/5 text-slate-400 hover:text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Clear Search & Try Again
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
