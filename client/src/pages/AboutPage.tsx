import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";
import { getPageContent } from "@/lib/content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import type { AboutContent, TeamMember } from "@/types";

export default function AboutPage() {
  const [content, setContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    getPageContent<AboutContent>("about").then(setContent);
  }, []);

  if (!content) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>About Us | Lumina Digital – AI & Web3 Agency</title>
        <meta name="description" content="Meet the team behind Lumina Digital. We're AI-native marketers and Web3 pioneers on a mission to future-proof brands." />
        <link rel="canonical" href="https://luminadigital.com/about" />
        <meta property="og:title" content="About Us | Lumina Digital" />
        <meta property="og:url" content="https://luminadigital.com/about" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <PageHeader
          title={content.header.title}
          subtitle={content.header.subtitle}
          gradient="from-blue-500 to-teal-400"
        />

        <section className="pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">{content.mission.title}</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {content.mission.content_1}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {content.mission.content_2}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={content.mission.image}
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <h2 className="text-3xl font-bold mb-12 text-center">{content.team.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.team.members.map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="mb-6 overflow-hidden rounded-2xl aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
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
