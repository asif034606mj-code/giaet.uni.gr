import React, { useState } from "react";
import { Laptop, Cpu, BookOpen, Send, Sparkles, Clock, Calendar, CheckCircle2, Play, Users, Cloud, AlertCircle, FileText, RefreshCw } from "lucide-react";

export default function VirtualCampus() {
  
  // Interactive Chat State
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    { sender: "ai", text: "Welcome to the GIAET Stuttgart AI Study Assistant. I am Professor Hans-Dieter's digital twin. Ask me anything about our thermodynamics, robotics PLC ladder models, or advanced engineering algebra!" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isAiThinking, setIsAiThinking] = useState(false);
  
  // LMS State
  const [activeCourse, setActiveCourse] = useState("LMS-302 SCADA & Automation");
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = userInput.trim();
    if (!query) return;

    // Append user query
    setMessages((prev) => [...prev, { sender: "user", text: query }]);
    setUserInput("");
    setIsAiThinking(true);

    try {
      const response = await fetch("/api/study-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: query,
          programContext: "Automation Engineering / SCADA & PLC",
          userContext: "Active hybrid BSc scholar"
        })
      });

      const data = await response.json();
      if (response.ok && data.text) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.text }]);
      } else {
        throw new Error(data.error || "Simulated timeout");
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠ Academic simulation services are currently initializing. Here is an academic summary:\n\nIn Germany energy technologies and automated loops, the PID feedback loop represents the core of modern mechanical microchip safety. Solenoids control directional actuators based on the equation: e(t) = SP - PV." }
      ]);
    } finally {
      setIsAiThinking(false);
    }
  };

  // Helper parser to render mock HTML markdown tags safely
  const formatMarkdownText = (text: string) => {
    return text.split("\n").map((line, i) => {
      let content = line;
      let clName = "text-xs sm:text-sm text-slate-300 mb-1 leading-relaxed font-sans";

      // Headers
      if (line.startsWith("###")) {
        content = line.replace("###", "").trim();
        clName = "text-sm sm:text-base font-bold text-white mb-2 mt-4 font-display";
      } else if (line.startsWith("##")) {
        content = line.replace("##", "").trim();
        clName = "text-md sm:text-lg font-bold text-blue-300 mb-3 mt-4 font-display";
      } else if (line.startsWith("●") || line.startsWith("-") || line.startsWith("*")) {
        content = "• " + line.replace(/^[●\-*]\s*/, "").trim();
        clName = "text-xs sm:text-sm text-slate-300 pl-4 mb-1 font-sans";
      }

      // Strong / Bold parsing fallback
      if (content.includes("**")) {
        const parts = content.split("**");
        return (
          <p key={i} className={clName}>
            {parts.map((p, idx) => (idx % 2 === 1 ? <strong key={idx} className="text-white font-semibold">{p}</strong> : p))}
          </p>
        );
      }

      return <p key={i} className={clName}>{content}</p>;
    });
  };

  return (
    <section id="virtual-campus-section" className="py-20 relative bg-slate-950">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-3">DIGITAL LEARNING MAINFRAME</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Virtual Learning System (LMS)
          </h2>
          <p className="text-slate-400 font-sans text-sm">
            Experience our accredited cloud infrastructure. Browse assignments, study with digital laboratory simulations, or communicate with our Stuttgart server-side smart AI Study Assistant.
          </p>
        </div>

        {/* Unified 3-Column LMS Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COL 1: Mainframe / Dashboard (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Active Class & Lecture Deck Simulation */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              
              <div className="flex flex-wrap items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block">CONNECTED STUDENT PORTAL</span>
                  <h3 className="text-lg font-display font-bold text-white">Active Classroom Deck</h3>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] uppercase font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/15">
                    ● Server status: Operational
                  </span>
                </div>
              </div>

              {/* Course selection tab list */}
              <div className="flex gap-2 border-b border-white/5 pb-3 mb-6 overflow-x-auto scrollbar-none">
                {["LMS-302 SCADA & SCADA", "LMS-104 Thermodynamic Cycles", "LMS-411 Machine Vision AI"].map((crs) => (
                  <button
                    key={crs}
                    onClick={() => { setActiveCourse(crs); setAssignmentSubmitted(false); }}
                    className={`px-3 py-1.5 text-xs rounded-md font-mono shrink-0 cursor-pointer ${
                      activeCourse === crs
                        ? "bg-blue-600/25 text-blue-400 border border-blue-500/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {crs}
                  </button>
                ))}
              </div>

              {/* Active Stream simulation */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/5 mb-6 flex flex-col justify-between p-4 group">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10" />
                
                {/* Background high-tech abstraction */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Status elements */}
                <div className="relative z-20 flex items-center justify-between">
                  <span className="bg-red-600 text-[10px] font-mono text-white font-bold px-2 py-0.5 rounded animate-pulse uppercase">
                    LIVE LECTURE
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-blue-400" />
                    <span>84 Engineers Online</span>
                  </span>
                </div>

                {/* Simulated center Play button */}
                <div className="relative z-20 self-center p-4 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer hover:scale-105 transition-all shadow-xl backdrop-blur-sm border border-white/20">
                  <Play className="w-8 h-8 fill-current" />
                </div>

                <div className="relative z-20">
                  <p className="text-[11px] text-blue-400 font-mono font-medium lowercase">stuttgart_transmission_channel_6a</p>
                  <h4 className="text-sm font-semibold text-white mt-0.5">
                    SCADA Security & Modbus Fieldbus Encryption Models
                  </h4>
                </div>
              </div>

              {/* Interactive Assignment hand-in simulation */}
              <div className="p-4 bg-white/3 border border-white/5 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xs font-bold text-slate-200">Weekly lab report submission</h5>
                    <p className="text-[11px] text-slate-400">Task: Upload Modbus protocol encryption schematic analysis report.</p>
                  </div>
                  <span className="text-[10px] font-mono text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                    PENDING RATING
                  </span>
                </div>

                {assignmentSubmitted ? (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>✔ Transcript submitted. GIAET server recorded block hash #SF-382901-X.</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAssignmentSubmitted(true)}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Process Mock Submission
                    </button>
                    <span className="text-[10px] text-slate-500 font-mono">Format requirements: PDF / ASCII text</span>
                  </div>
                )}
              </div>

            </div>

            {/* Digital Scientific Library Resources */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h4 className="flex items-center gap-2 text-md font-display font-semibold text-white mb-4 border-b border-white/5 pb-3">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>GIAET Digital Research Library</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { title: "German Energy Transition (Energiewende) load metrics", size: "14.2 MB", desc: "Sustainable Grid Analysis" },
                  { title: "KUKA Industrial robot kinematics matrix equations", size: "8.5 MB", desc: "School of Robotics and Automation" },
                  { title: "High speed compiler lexical automation and parsing trees", size: "11.1 MB", desc: "School of Computer Science" },
                  { title: "Structural fatigue and strain charts for aluminum structures", size: "19.3 MB", desc: "School of Mechanical Engineering" }
                ].map((doc, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/40 rounded-lg hover:bg-slate-900 border border-white/5 flex gap-3 cursor-pointer">
                    <FileText className="w-6 h-6 text-slate-400 hover:text-blue-400 mr-1 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-200 line-clamp-1">{doc.title}</h5>
                      <span className="text-[9px] font-mono text-slate-500 block mt-0.5">{doc.desc} • {doc.size}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* COL 2: AI Study assistant (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl border-blue-500/20 overflow-hidden shadow-xl flex flex-col h-[520px] sm:h-[600px]">
              
              {/* AI Terminal Head */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-950 to-slate-900 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-500/10 rounded text-blue-400 secure-ring">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-display flex items-center gap-1.5">
                      <span>Professor AI Study Assistant</span>
                    </h4>
                    <p className="text-[9px] text-slate-400 font-mono">POWERED BY GEMINI 3.5 FLASH</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block bg-emerald-500/10 px-2 py-0.5 rounded">
                  ONLINE
                </span>
              </div>

              {/* Chat messages viewport */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-950/40">
                {messages.map((msg, i) => (
                  <div 
                    key={i}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <span className="text-[9px] font-mono text-slate-500 uppercase mb-1">
                      {msg.sender === "user" ? "You (Student)" : "GIAET AI Professor"}
                    </span>
                    <div 
                      className={`p-3 rounded-xl border select-text ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white border-blue-500"
                          : "bg-slate-900 text-slate-200 border-white/5"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <p className="text-xs sm:text-sm font-sans">{msg.text}</p>
                      ) : (
                        <div className="space-y-1">
                          {formatMarkdownText(msg.text)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isAiThinking && (
                  <div className="mr-auto max-w-[85%] flex flex-col items-start">
                    <span className="text-[9px] font-mono text-slate-500 uppercase mb-1 animate-pulse">Professor Thinking...</span>
                    <div className="p-3 bg-slate-950 rounded-xl border border-blue-500/20 text-slate-400 text-xs flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-400" />
                      <span>Formulating model matrix definitions...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input form */}
              <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-white/5 flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a technical study question..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  disabled={isAiThinking}
                  className="flex-1 bg-slate-950 text-white text-xs sm:text-sm rounded-lg py-2 px-3 border border-white/10 focus:outline-none focus:border-blue-500 placeholder-slate-500"
                />
                <button
                  type="submit"
                  disabled={isAiThinking || !userInput.trim()}
                  className="p-2 sm:px-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center cursor-pointer disabled:bg-slate-800 disabled:text-slate-600 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
