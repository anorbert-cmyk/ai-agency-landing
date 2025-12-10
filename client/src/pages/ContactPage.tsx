import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Navigation />
      
      <main className="flex-grow">
        <PageHeader 
          title="Let's Talk" 
          subtitle="Ready to future-proof your brand? Tell us about your project."
          gradient="from-orange-400 to-rose-400"
        />

        <section className="pb-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <p className="text-slate-600 mb-2">For general inquiries and new business.</p>
                      <a href="mailto:hello@lumina.digital" className="text-primary font-medium hover:underline">
                        hello@lumina.digital
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <p className="text-slate-600 mb-2">Mon-Fri from 9am to 6pm EST.</p>
                      <a href="tel:+15550000000" className="text-primary font-medium hover:underline">
                        +1 (555) 000-0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <p className="text-slate-600">
                        123 Innovation Drive, Suite 400<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-4">FAQ</h3>
                  <p className="text-slate-600 mb-4">
                    Looking for quick answers? Check out our frequently asked questions before reaching out.
                  </p>
                  <a href="/#faq" className="text-primary font-medium hover:underline">
                    View FAQ &rarr;
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass p-8 md:p-10 rounded-3xl"
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-slate-700">First Name</label>
                      <Input id="first-name" placeholder="Jane" className="bg-white/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-slate-700">Last Name</label>
                      <Input id="last-name" placeholder="Doe" className="bg-white/50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                    <Input id="email" type="email" placeholder="jane@company.com" className="bg-white/50" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                    <Input id="subject" placeholder="Project Inquiry" className="bg-white/50" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project goals, timeline, and budget..." 
                      className="min-h-[150px] bg-white/50" 
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl shadow-lg shadow-primary/20">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
