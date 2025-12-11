import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { getAllBlogPosts, BlogPost } from "@/lib/content";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllBlogPosts().then(setPosts);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>Insights | AI & Web3 Marketing Blog | Lumina Digital</title>
        <meta name="description" content="Thoughts on the convergence of AI, Web3, and digital culture. Stay ahead of the curve with insights from industry experts." />
        <link rel="canonical" href="https://luminadigital.com/blog" />
        <meta property="og:title" content="Insights | Lumina Digital" />
        <meta property="og:url" content="https://luminadigital.com/blog" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <PageHeader
          title="Insights"
          subtitle="Thoughts on the convergence of AI, Web3, and digital culture."
          gradient="from-cyan-400 to-blue-500"
        />

        <section className="pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer flex flex-col h-full"
                  >
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 shadow-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <User size={16} className="text-slate-400" />
                        {post.author}
                      </div>
                      <span className="text-primary font-bold flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={16} />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
