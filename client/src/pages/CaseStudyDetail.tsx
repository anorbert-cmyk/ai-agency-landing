import { useRoute, Link } from "wouter";
import { getCaseStudy, CaseStudy } from "@/lib/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";

export default function CaseStudyDetail() {
  const [, params] = useRoute("/work/:slug");
  const slug = params?.slug;
  const [project, setProject] = useState<CaseStudy | null | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      getCaseStudy(slug).then(setProject);
    }
  }, [slug]);

  if (project === null) {
    return <NotFound />;
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>{project.title} | Lumina - Case Study</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <div className="container mb-16">
          <Link href="/work" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} /> Back to Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-16 h-2 mb-6 bg-gradient-to-r ${project.color} rounded-full`} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-slate-600 mb-8">
              <span className="font-medium text-primary">{project.client}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>{project.category}</span>
            </div>
          </motion.div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mb-16"
        >
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <ReactMarkdown>{project.content}</ReactMarkdown>
            </motion.div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-6">Project Details</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Key Result</h4>
                  <p className="text-2xl font-bold text-primary">{project.result}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white border border-slate-100 rounded-full text-sm text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-4">Ready for similar results?</h3>
              <p className="text-slate-300 mb-6">Let's discuss how we can help your business grow.</p>
              <Link href="/contact">
                <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                  Start a Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
