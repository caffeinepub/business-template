import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", ocid: undefined },
  { label: "Features", href: "#features", ocid: undefined },
  { label: "How It Works", href: "#how-it-works", ocid: undefined },
  { label: "About", href: "#about", ocid: undefined },
  { label: "Testimonials", href: "#testimonials", ocid: undefined },
  { label: "Pricing", href: "#pricing", ocid: undefined },
  { label: "FAQ", href: "#faq", ocid: undefined },
  { label: "Headings", href: "#headings", ocid: "nav.headings.link" },
  { label: "Typography", href: "#typography", ocid: "nav.typography_link" },
  { label: "Blog", href: "#blog", ocid: "nav.blog.link" },
  { label: "Team", href: "#team", ocid: undefined },
  { label: "Contact", href: "#contact", ocid: undefined },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          }
        },
        { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const obs of observers) obs.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-900/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center shadow-gold-sm">
              <span className="font-display font-black text-charcoal-900 text-lg leading-none">
                N
              </span>
            </div>
            <span className="font-sans font-bold text-xl text-white tracking-tight">
              Nexara
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={link.ocid ?? "nav.link"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/8 ${
                    isActive
                      ? "text-gold-400 hover:text-gold-300"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-white/75 hover:text-white hover:bg-white/10 border border-white/20"
              onClick={() => handleNavClick("#contact")}
            >
              Get in Touch
            </Button>
            <Button
              className="gradient-gold text-charcoal-900 font-semibold hover:opacity-90 shadow-gold-sm"
              onClick={() => handleNavClick("#pricing")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-charcoal-900/98 backdrop-blur-md border-b border-white/10"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    data-ocid={link.ocid ?? "nav.link"}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center gap-2 ${
                      isActive
                        ? "text-gold-400 bg-gold-500/10"
                        : "text-white/80 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    )}
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full border-white/25 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => handleNavClick("#contact")}
                >
                  Get in Touch
                </Button>
                <Button
                  className="w-full gradient-gold text-charcoal-900 font-semibold"
                  onClick={() => handleNavClick("#pricing")}
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
