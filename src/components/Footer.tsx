import React, { useEffect, useState } from "react";
import { School, MapPin, Mail, Phone, Calendar, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [stuttgartTime, setStuttgartTime] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Live Stuttgart Time Calculator (UTC + 2 hours in CEST / May)
  useEffect(() => {
    const updateTime = () => {
      const utc = new Date();
      // Germany is in CEST (UTC+2) in May
      const offset = 2; 
      const local = new Date(utc.getTime() + offset * 3600000);
      
      const hours = String(local.getUTCHours()).padStart(2, "0");
      const minutes = String(local.getUTCMinutes()).padStart(2, "0");
      const seconds = String(local.getUTCSeconds()).padStart(2, "0");
      
      setStuttgartTime(`${hours}:${minutes}:${seconds} (CEST)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer id="footer-contact" className="bg-[#02050b] text-slate-300 border-t border-white/5 relative z-10 pt-16 pb-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Main GIAET info (5 Cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded text-slate-100">
                <School className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">GIAET Stuttgart</span>
            </div>
            
            <p className="text-xs text-slate-400 font-sans max-w-sm leading-relaxed">
              Global Institute of Advanced Engineering & Technology is Europe's state-adhered hybrid engineering university. Designed for remote professionals, giving actual 210 ECTS BSc degrees.
            </p>

            {/* Ingress stuttgart clock */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-between shadow-sm max-w-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 animate-pulse shrink-0" />
                <span className="text-[11px] font-mono text-slate-400">Campus local Stuttgart time:</span>
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wider">
                {stuttgartTime || "Loading..."}
              </span>
            </div>
          </div>

          {/* Quick link columns (3 Cols) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-widest">
              Germany HQ Address
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-400 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  Innovation Engineering Campus <br />
                  Industriestraße 145 <br />
                  70565 Stuttgart <br />
                  Baden-Württemberg, Germany
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>admissions@giaet.de</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>+49 (0) 711 38291-0</span>
              </div>
            </div>
          </div>

          {/* Contact / Newsletter Forms (4 Cols) */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-widest">
              Office of Admissions Form
            </h4>
            
            <p className="text-xs text-slate-400">
              Submit credentials uploads or request direct advisor counseling. We respond within 1 working day.
            </p>

            <a
              href="https://forms.gle/uUR1tXRKHKgDshyZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Submit Google Contact Form</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mini Newsletter signup */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-2">
              <p className="text-[10px] font-mono lowercase text-slate-500">Subscribe for research publications announcements:</p>
              {subscribed ? (
                <p className="text-xs text-emerald-400">Thank you! Subscribed to GIAET circular.</p>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-slate-950 border border-white/10 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-slate-800 text-xs text-white font-semibold px-3 py-1.5 rounded hover:bg-slate-700 cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Legal bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-sans">
          <p>© 2026 GIAET Stuttgart. All rights reserved. Registered under Federal European Credit Systems.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-300 cursor-pointer">Stuttgarter Ingress Registration</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
