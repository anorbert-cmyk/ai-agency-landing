import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { Link } from "wouter";

export interface HeroProps {
  content?: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
  };
}

export default function Hero({ content }: HeroProps) {
  if (!content) return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white px-4">

      {/* Photorealistic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Golden Rings Background"
          className="w-full h-full object-cover opacity-80 animate-pulse scale-105"
          style={{ animationDuration: '8s' }}
        />
        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10 flex flex-col items-center text-center pt-10 md:pt-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-6xl mx-auto"
        >
          {/* Top Navigation Placeholder (Visual match for "ROAR.AI" header in reference) */}
          <div className="w-full flex justify-between items-center mb-16 md:mb-24 opacity-80 border-b border-white/10 pb-4 text-xs tracking-widest text-[#888]">
            <div>AGENCY.AI</div>
            <div className="hidden md:flex gap-8">
              <span>STRATEGY</span>
              <span>WORKFLOWS</span>
              <span className="text-white font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                AGENCY
              </span>
              <span>RESULTS</span>
              <span>CONTACT</span>
            </div>
            <div className="bg-white text-black px-4 py-1.5 font-bold">BOOK CALL</div>
          </div>


          <div className="relative mb-2">
            <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] leading-[0.85] font-light tracking-tighter text-white/90 mix-blend-overlay">
              ALGORITHM
            </h1>
            <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] leading-[0.85] font-normal tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              DOMINANCE
            </h1>
          </div>

          <div className="flex flex-col items-center gap-6 my-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="relative w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
                <span className="relative block w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">AI_STATUS</span>
                <span className="text-sm font-bold text-white tracking-wide">Optimizing</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-light leading-relaxed">
              Automated Business Growth Strategies
            </p>
          </div>

        </motion.div>

        {/* Stats / Features Grid at Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl border-t border-white/10 mt-auto">
          {[
            { label: "Reach Lift", value: "+400%", icon: "Chart", id: "01" },
            { label: "Leads Generated", value: "12.5k", icon: "Users", id: "02" },
            { label: "Execution Speed", value: "10x", icon: "Lightning", id: "03" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className={`text-left p-8 md:p-10 border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors group relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 text-xs text-slate-600 font-mono opacity-50">{stat.id}</div>
              <div className="h-6 w-6 text-white mb-20 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Simple Icon Placeholder */}
                {i === 0 && <svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" /></svg>}
                {i === 1 && <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>}
                {i === 2 && <svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>}
              </div>
              <div className="text-5xl font-light text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
