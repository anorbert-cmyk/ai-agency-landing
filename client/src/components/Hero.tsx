import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Abstract Golden Rings Background"
          className="w-full h-full object-cover opacity-80 animate-spin-slow scale-150"
          style={{ animationDuration: '60s' }}
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
          {/* Top Navigation */}
          <div className="w-full flex justify-between items-center mb-16 md:mb-24 z-20 relative text-sm tracking-widest text-slate-300">
            <Link href="/">
              <a className="font-bold text-white hover:text-emerald-400 transition-colors">LUMINA DIGITAL</a>
            </Link>

            <div className="hidden md:flex gap-8 items-center bg-black/20 backdrop-blur-sm px-8 py-3 rounded-full border border-white/5">
              <Link href="/services"><a className="hover:text-white transition-colors cursor-pointer">SERVICES</a></Link>
              <Link href="/work"><a className="hover:text-white transition-colors cursor-pointer">WORK</a></Link>
              <Link href="/about"><a className="text-white font-bold flex items-center gap-2 cursor-pointer">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                AGENCY
              </a></Link>
              <Link href="/contact"><a className="hover:text-white transition-colors cursor-pointer">CONTACT</a></Link>
            </div>

            <Link href="/contact">
              <Button size="sm" className="bg-white text-black hover:bg-slate-200 font-bold px-6 rounded-full">
                BOOK CALL
              </Button>
            </Link>
          </div>


          <div className="relative mb-8 text-center">
            {/* Tagline */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                  Next-Gen Digital Agency
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight mb-6 drop-shadow-2xl">
              Scaling Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                in the Age of AI & Web3
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md">
              We define the digital frontier. From generative marketing to decentralized communities,
              we build the systems that power the next generation of business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/work">
                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg shadow-lg shadow-blue-900/20 border border-blue-500/30">
                  Our Work <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 h-14 text-lg backdrop-blur-sm">
                  View Services
                </Button>
              </Link>
            </div>
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
