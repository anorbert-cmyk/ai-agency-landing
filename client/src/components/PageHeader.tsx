import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  gradient = "from-primary to-secondary" 
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
              {title}
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  );
}
