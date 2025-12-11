import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Desktop Nav - Centered Layout */}
        <div className="w-full hidden md:flex items-center justify-between px-6 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">

          {/* Logo */}
          <Link href="/" className="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 cursor-pointer whitespace-nowrap">
            Lumina Digital
          </Link>

          {/* Centered Links */}
          <div className="flex items-center gap-8 mx-auto">
            <Link href="/services"><a className="text-sm font-medium text-white/80 hover:text-white transition-colors">Services</a></Link>
            <Link href="/work"><a className="text-sm font-medium text-white/80 hover:text-white transition-colors">Work</a></Link>
            <Link href="/about"><a className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Agency
            </a></Link>
            <Link href="/blog"><a className="text-sm font-medium text-white/80 hover:text-white transition-colors">Insights</a></Link>
          </div>

          {/* CTA */}
          <Link href="/contact">
            <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full px-6 font-bold text-sm">
              Book Call
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="menu"
          className="absolute top-full left-0 right-0 glass-nav p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/20">
              Book Consultation
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
