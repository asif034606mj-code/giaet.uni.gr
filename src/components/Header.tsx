import React, { useState } from "react";
import { School, Menu, X, ShieldCheck, HelpCircle, GraduationCap } from "lucide-react";

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Header({ currentTab, setTab }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About GIAET" },
    { id: "faculties", label: "Faculties" },
    { id: "degrees", label: "Online Degrees" },
    { id: "scholarships", label: "Scholarships" },
    { id: "admissions", label: "Admissions & Fees" },
    { id: "verification", label: "Verify Certificate" },
    { id: "virtual-campus", label: "Virtual LMS & AI" },
    { id: "research", label: "Research" },
    { id: "career", label: "Career & Partners" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            onClick={() => { setTab("home"); setIsMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2.5 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              <School className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl tracking-wider text-slate-100">GIAET</span>
                <span className="text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-500/20">Stuttgart</span>
              </div>
              <p className="text-[10px] text-slate-400 font-sans tracking-tight hidden sm:block">
                Global Institute of Advanced Engineering & Technology
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => setTab(item.id)}
                  className={`px-3 py-2 text-xs font-medium rounded-md tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/20 shadow-sm"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Callouts */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={() => setTab("verification")}
              className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-500/5 px-3 py-1.5 rounded-md border border-emerald-500/15 cursor-pointer hover:bg-emerald-500/15 transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verify ID</span>
            </button>
            <button
              onClick={() => {
                const target = document.getElementById("footer-contact");
                if (target) target.scrollIntoView({ behavior: "smooth" });
                else setTab("home");
              }}
              className="bg-blue-600 hover:bg-blue-500 text-slate-100 px-4 py-2 text-xs font-semibold rounded-md shadow-md shadow-blue-500/10 cursor-pointer transition-all duration-155"
            >
              Contact Office
            </button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex xl:hidden items-center gap-3">
            {/* Quick action for phone size */}
            <button
              onClick={() => setTab("verification")}
              className="p-1 px-2 text-[10px] text-emerald-400 bg-emerald-500/5 border border-emerald-500/15 rounded flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Verify</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-400 hover:text-slate-100 focus:outline-none cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="xl:hidden glass-panel border-t border-white/5 px-4 pt-2 pb-6 space-y-1 animate-fadeIn">
          {menuItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  isActive 
                    ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-500"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5 px-4">
            <button
              onClick={() => { setTab("verification"); setIsMenuOpen(false); }}
              className="flex justify-center items-center gap-1.5 py-2.5 text-xs font-medium rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify Official Credentials</span>
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                const target = document.getElementById("footer-contact");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "https://forms.gle/uUR1tXRKHKgDshyZ9";
                }
              }}
              className="py-2.5 text-xs text-center font-semibold rounded-md bg-blue-600 hover:bg-blue-500 text-white"
            >
              Academic Contact Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
