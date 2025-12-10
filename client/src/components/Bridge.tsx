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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[url('/images/bg-aurora-gradient.webp')] opacity-10 bg-cover bg-center mix-blend-overlay" />

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

        <div className="relative h-40 md:h-64 flex items-center justify-center">
          {/* Animated Bridge Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

          <div className="flex justify-between w-full max-w-4xl mx-auto px-4">
            <div className="text-left">
              <div className="text-2xl font-bold text-indigo-300 mb-2">{content.web2_label}</div>
              <div className="text-sm text-slate-400">{content.web2_sublabel}</div>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                <span className="text-2xl">∞</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-pink-300 mb-2">{content.web3_label}</div>
              <div className="text-sm text-slate-400">{content.web3_sublabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
