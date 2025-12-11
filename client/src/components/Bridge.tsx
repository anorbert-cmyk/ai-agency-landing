import { motion } from "framer-motion";

export interface BridgeProps {
  content?: {
    title: string;
    subtitle: string;
    web2_label: string;
    web2_sublabel: string;
    web3_label: string;
    web3_sublabel: string;
  };
}

export default function Bridge({ content }: BridgeProps) {
  if (!content) return null;

  return (
    <section className="py-32 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Gradient - CSS Fallback since image is missing */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-purple-950/50 opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900/0 to-transparent" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="relative h-40 md:h-64 flex items-center justify-center group">
          {/* Base Bridge Line - Full Width */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

          {/* Content Container */}
          <div className="w-full max-w-4xl mx-auto px-4 relative z-10">

            {/* Animated Energy Flow - Single beam with color transition */}
            <div className="absolute left-4 right-4 top-1/2 h-8 -translate-y-1/2 pointer-events-none overflow-hidden" style={{ containerType: "inline-size" }}>
              {/* Single beam - GPU accelerated with color shift */}
              <div
                className="absolute left-0 w-24 h-1 rounded-full animate-slide-beam"
                style={{
                  top: "50%",
                  marginTop: "-2px"
                }}
              />
            </div>

            {/* Labels Container */}
            <div className="flex justify-between items-center relative">
              {/* Web2 Side */}
              <motion.div
                className="text-left cursor-default p-4 rounded-xl transition-all duration-500 hover:bg-white/5"
                whileHover={{ x: 5 }}
              >
                <div className="text-2xl font-bold text-indigo-300 mb-2 group-hover:text-indigo-200 transition-colors">{content.web2_label}</div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{content.web2_sublabel}</div>
              </motion.div>

              {/* Central Node */}
              <div className="relative z-20">
                <motion.div
                  className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                  animate={{
                    boxShadow: ["0 0 30px rgba(99,102,241,0.3)", "0 0 50px rgba(99,102,241,0.6)", "0 0 30px rgba(99,102,241,0.3)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl text-white">∞</span>
                </motion.div>
              </div>

              {/* Web3 Side */}
              <motion.div
                className="text-right cursor-default p-4 rounded-xl transition-all duration-500 hover:bg-white/5"
                whileHover={{ x: -5 }}
              >
                <div className="text-2xl font-bold text-pink-300 mb-2 group-hover:text-pink-200 transition-colors">{content.web3_label}</div>
                <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{content.web3_sublabel}</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
