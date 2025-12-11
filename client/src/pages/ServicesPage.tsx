import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getPageContent } from "@/lib/content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import type { ServicesContent, ServicesCategory, ServicesListItem } from "@/types";

export default function ServicesPage() {
  const [content, setContent] = useState<ServicesContent | null>(null);

  useEffect(() => {
    getPageContent<ServicesContent>("services").then(setContent);
  }, []);

  if (!content) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>AI & Web3 Marketing Services | Lumina Digital</title>
        <meta name="description" content="Full-service AI marketing, Web3 community building, generative content, and growth strategy. Discover our comprehensive digital services." />
        <link rel="canonical" href="https://luminadigital.com/services" />
        <meta property="og:title" content="AI & Web3 Marketing Services | Lumina Digital" />
        <meta property="og:url" content="https://luminadigital.com/services" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <PageHeader
          title={content.header.title}
          subtitle={content.header.subtitle}
        />

        <section className="pb-24">
          <div className="container">
            {content.services_list.map((section: ServicesCategory, sectionIndex: number) => (
              <div key={section.category} className="mb-20 last:mb-0">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-10 pl-4 border-l-4 border-primary"
                >
                  {section.category}
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {section.items.map((item: ServicesListItem, index: number) => {
                    const IconComponent = Icons[item.icon as keyof typeof Icons];
                    const Icon = (typeof IconComponent === 'function' ? IconComponent : Icons.HelpCircle) as LucideIcon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/bg-aurora-gradient.webp')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.cta.title}</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              {content.cta.subtitle}
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors">
              {content.cta.button_text}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
