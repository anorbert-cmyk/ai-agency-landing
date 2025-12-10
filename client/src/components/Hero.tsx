import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import orbImage from "../../public/images/hero-glass-orb.png";

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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Next-Gen Digital Agency
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900">
            {content.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                {content.cta_primary}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-white/50 border-white/60 hover:bg-white/80 backdrop-blur-sm text-slate-700">
                {content.cta_secondary}
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200/50">
            <p className="text-sm text-slate-500 mb-4">Trusted by leading brands</p>
            <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder logos using text for now */}
              <span className="font-bold text-xl">ACME</span>
              <span className="font-bold text-xl">Globex</span>
              <span className="font-bold text-xl">Soylent</span>
              <span className="font-bold text-xl">Initech</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] w-full flex items-center justify-center"
        >
          {/* Main Glass Orb */}
          <motion.img
            src={orbImage}
            alt="Abstract Glass Orb"
            className="w-full max-w-[600px] object-contain drop-shadow-2xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
          />

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
