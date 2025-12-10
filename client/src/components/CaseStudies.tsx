import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { getAllCaseStudies, CaseStudy } from "@/lib/content";
import { useState, useEffect } from "react";

export default function CaseStudies() {
  const [featuredCases, setFeaturedCases] = useState<CaseStudy[]>([]);

  useEffect(() => {
    getAllCaseStudies().then(studies => {
      setFeaturedCases(studies.slice(0, 2));
    });
  }, []);

  if (featuredCases.length === 0) return null;

  return (
    <section id="work" className="py-24 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
            <p className="text-slate-600 text-lg max-w-md">
              Real results for real businesses. See how we transform potential into performance.
            </p>
          </div>
          <Link href="/work" className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            View All Projects <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredCases.map((item, index) => (
            <Link key={item.slug} href={`/work/${item.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-full"
              >
                {/* Image Background */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className={`w-12 h-1 mb-6 bg-gradient-to-r ${item.color}`} />

                  <div className="text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">
                    {item.category}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {item.client}
                  </h3>

                  <p className="text-lg text-white/90 mb-4 font-light">
                    {item.title}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 self-start">
                    <span className="font-bold">{item.result}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/work" className="inline-flex items-center gap-2 text-primary font-medium">
            View All Projects <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
