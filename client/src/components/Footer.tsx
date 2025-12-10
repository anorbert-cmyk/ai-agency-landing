import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6 inline-block">
              Lumina Digital
            </a>
            <p className="text-slate-500 max-w-sm mb-8">
              Intelligent growth for the modern web. We build the bridge between traditional business and the decentralized future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-slate-600">
              <li><Link href="/services" className="hover:text-primary transition-colors">AI Analytics</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Brand Strategy</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Web3 Community</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Tokenomics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-600">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 Lumina Digital. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
