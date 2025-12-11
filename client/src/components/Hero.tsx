import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import InteractiveOrb from "./InteractiveOrb";
import orbImage from "../../public/images/hero-glass-orb.webp";

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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white">

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveOrb />
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10 flex flex-col items-center text-center pt-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">
              System Online
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            ALGORITHM
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">
            DOMINANCE
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
                {content.cta_primary}
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/20 hover:bg-white/10 hover:border-white/40 text-white backdrop-blur-sm transition-all hover:scale-105">
                {content.cta_secondary}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats / Features Grid at Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-5xl border-t border-white/10 pt-12">
          {[
            { label: "Reach Lift", value: "+400%", icon: "Chart" },
            { label: "Leads Generated", value: "12.5k", icon: "Users" },
            { label: "Execution Speed", value: "10x", icon: "Lightning" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-left p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-light text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
