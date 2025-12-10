import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export interface TestimonialsProps {
  content?: {
    title: string;
    subtitle: string;
    items: {
      quote: string;
      author: string;
      role: string;
      image: string;
    }[];
  };
}

export default function Testimonials({ content }: TestimonialsProps) {
  if (!content) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-slate-600 text-lg">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />

              <p className="text-slate-700 mb-8 relative z-10 leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
