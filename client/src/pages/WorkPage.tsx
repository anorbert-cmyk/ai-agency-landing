import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { getAllCaseStudies, CaseStudy } from "@/lib/content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function WorkPage() {
  const [projects, setProjects] = useState<CaseStudy[]>([]);

  useEffect(() => {
    getAllCaseStudies().then(setProjects);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>Our Work | AI & Web3 Case Studies | Lumina Digital</title>
        <meta name="description" content="A showcase of our impact across industries. See how we help brands grow with AI marketing, Web3 communities, and generative strategies." />
        <link rel="canonical" href="https://luminadigital.com/work" />
        <meta property="og:title" content="Our Work | Lumina Digital" />
        <meta property="og:url" content="https://luminadigital.com/work" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <PageHeader
          title="Selected Work"
          subtitle="A showcase of our impact across industries. From high-fashion to high-finance."
          gradient="from-purple-500 to-pink-500"
        />

        <section className="pb-24">
          <div className="container">
            <div className="space-y-20">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group grid md:grid-cols-2 gap-8 items-center"
                >
                  <Link href={`/work/${project.slug}`} className={`block rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl cursor-pointer ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className={`w-12 h-1 mb-6 bg-gradient-to-r ${project.color}`} />
                    <div className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">
                      {project.category}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{project.client}</h2>
                    <Link href={`/work/${project.slug}`} className="block hover:text-primary transition-colors">
                      <h3 className="text-xl font-medium text-slate-800 mb-4">{project.title}</h3>
                    </Link>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                      View Case Study <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
