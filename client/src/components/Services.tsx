import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface ServicesProps {
  content?: {
    title: string;
    subtitle: string;
    web2_tab: string;
    web3_tab: string;
    web2_items: ServiceItem[];
    web3_items: ServiceItem[];
  };
}

export default function Services({ content }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<"web2" | "web3">("web2");

  if (!content) return null;

  const currentItems = activeTab === "web2" ? content.web2_items : content.web3_items;

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-slate-600 text-lg mb-8">
            {content.subtitle}
          </p>

          {/* Toggle */}
          <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab("web2")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "web2"
                ? "bg-white text-primary shadow-sm"
                : "text-slate-500 hover:text-slate-700"
                }`}
            >
              {content.web2_tab}
            </button>
            <button
              onClick={() => setActiveTab("web3")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "web3"
                ? "bg-white text-primary shadow-sm"
                : "text-slate-500 hover:text-slate-700"
                }`}
            >
              {content.web3_tab}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentItems.map((service, index) => {
              // @ts-ignore
              const Icon = Icons[service.icon] || Icons.HelpCircle;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 flex flex-col h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>

                  {service.image && (
                    <div className="mt-auto rounded-lg overflow-hidden h-40 w-full relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" />
    </section>
  );
}
