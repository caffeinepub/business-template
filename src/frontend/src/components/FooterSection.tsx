import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const footerLinks = {
  Services: [
    { label: "Strategic Planning", href: "#features" },
    { label: "Revenue Growth", href: "#features" },
    { label: "Data & Analytics", href: "#features" },
    { label: "Brand & Design", href: "#features" },
    { label: "Digital Marketing", href: "#features" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Blog", href: "#blog" },
    { label: "Typography", href: "#typography" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Contact", href: "#contact" },
    { label: "Pricing", href: "#pricing" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaXTwitter, label: "X (Twitter)", href: "#" },
  { icon: FaFacebook, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
];

export default function FooterSection() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const handleScroll = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-white/8">
      {/* Pre-footer CTA band */}
      <div
        className="border-y border-gold-500/20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.016 58) 0%, oklch(0.16 0.02 62) 50%, oklch(0.11 0.01 55) 100%)",
        }}
      >
        <div className="container mx-auto px-6 max-w-7xl py-14 flex flex-col items-center text-center gap-5">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            Ready to Accelerate{" "}
            <span className="font-display italic text-gold-400">
              Your Growth?
            </span>
          </h3>
          <p className="text-white/60 text-base font-body max-w-md">
            Join 500+ companies already growing with Nexara. Your first strategy
            session is on us.
          </p>
          <Button
            data-ocid="footer.primary_button"
            className="gradient-gold text-charcoal-900 font-bold px-8 py-5 h-auto shadow-gold hover:opacity-90 transition-opacity group"
            onClick={() => handleScroll("#contact")}
          >
            Start Today
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand — 2 cols */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center shadow-gold-sm">
                <span className="font-display font-black text-charcoal-900 text-lg leading-none">
                  N
                </span>
              </div>
              <span className="font-sans font-bold text-xl text-white tracking-tight">
                Nexara
              </span>
            </div>

            <p className="text-white/55 text-sm leading-relaxed max-w-xs font-body mb-6">
              We help ambitious companies unlock sustainable growth through
              strategic clarity, data-driven decisions, and relentless
              execution.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-gold-500/20 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans font-semibold text-sm text-white/90 mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href !== "#") {
                          e.preventDefault();
                          handleScroll(link.href);
                        }
                      }}
                      className="text-white/50 hover:text-white/90 text-sm font-body transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-body text-center sm:text-left">
            © {year} Nexara. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Built with <span className="text-gold-500/70">♥</span> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white/70 underline underline-offset-2 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
