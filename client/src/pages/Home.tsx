import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Bridge from "@/components/Bridge";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Link } from "wouter";
import { getPageContent } from "@/lib/content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import type { HomeContent } from "@/types";

export default function Home() {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    getPageContent<HomeContent>("home").then(setContent);
  }, []);

  if (!content) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>Lumina Digital | AI & Web3 Marketing Agency – Scale Your Brand</title>
        <meta name="description" content="We're an AI-native digital agency helping brands scale with cutting-edge AI marketing, Web3 community building, and generative content strategies." />
        <link rel="canonical" href="https://luminadigital.com/" />
        <meta property="og:title" content="Lumina Digital | AI & Web3 Marketing Agency" />
        <meta property="og:description" content="We're an AI-native digital agency helping brands scale with cutting-edge AI marketing, Web3 community building, and generative content strategies." />
        <meta property="og:url" content="https://luminadigital.com/" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <Hero content={content.hero} />
        <Services content={content.services_section} />
        <Bridge content={content.bridge_section} />
        <CaseStudies />
        <Testimonials content={content.testimonials_section} />
        <FAQ content={content.faq_section} />

        <section className="py-24 container text-center relative z-10">
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
            {/* CTA Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6">{content.cta_section.title}</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              {content.cta_section.subtitle}
            </p>
            <Link href={content.cta_section.button_link}>
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-2xl">
                {content.cta_section.button_text}
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
