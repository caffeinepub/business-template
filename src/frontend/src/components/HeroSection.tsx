import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

const floatingBadges = [
  {
    id: "rating",
    text: "⭐ 4.9/5 Rating",
    className: "top-[22%] right-[6%] lg:right-[10%] animate-float",
  },
  {
    id: "growth",
    text: "🚀 140% Avg Growth",
    className: "bottom-[30%] left-[4%] lg:left-[6%] animate-float-slow",
  },
  {
    id: "award",
    text: "🏆 Award Winning",
    className: "top-[48%] right-[3%] lg:right-[8%] animate-float-delay",
  },
];

function StatItem({
  value,
  label,
  isNumeric,
  prefix,
  suffix,
}: {
  value: string;
  label: string;
  isNumeric?: boolean;
  prefix?: string;
  suffix?: string;
}) {
  const numeric = Number.parseFloat(value.replace(/[^0-9.]/g, ""));
  const { count, ref } = useCountUp(isNumeric ? numeric : 0, 2000);

  if (!isNumeric) {
    return (
      <div className="flex flex-col">
        <span className="font-display text-3xl font-bold text-gold-400">
          {value}
        </span>
        <span className="text-sm text-white/50 font-body mt-0.5">{label}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="font-display text-3xl font-bold text-gold-400">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="text-sm text-white/50 font-body mt-0.5">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-dark"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-transparent to-charcoal-950/80" />
      </div>

      {/* Geometric decorative elements */}
      <div className="absolute top-1/4 right-1/6 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/8 w-48 h-48 rounded-full bg-gold-400/8 blur-2xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating badges */}
      {floatingBadges.map((badge) => (
        <div
          key={badge.id}
          aria-hidden="true"
          className={`absolute hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full glass-card select-none ${badge.className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
          <span className="text-white/80 text-xs font-medium whitespace-nowrap">
            {badge.text}
          </span>
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium tracking-wide">
              Trusted by 500+ Growing Companies
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 prose-balance"
          >
            Grow Your Business{" "}
            <span className="font-display italic text-gold-400">
              with Confidence
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-2xl font-body"
          >
            We help ambitious companies unlock sustainable growth through
            strategic clarity, data-driven decisions, and relentless execution.
            Your success is our obsession.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button
              size="lg"
              data-ocid="hero.primary_button"
              className="gradient-gold text-charcoal-900 font-bold text-base px-8 py-6 h-auto shadow-gold hover:opacity-90 transition-opacity group"
              onClick={() => handleScroll("#pricing")}
            >
              Get Started Today
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              data-ocid="hero.secondary_button"
              className="border-white/30 text-white bg-white/8 hover:bg-white/15 hover:border-white/50 text-base px-8 py-6 h-auto group backdrop-blur-sm"
              onClick={() => handleScroll("#features")}
            >
              <Play size={16} className="mr-2 fill-current" />
              Learn More
            </Button>
          </motion.div>

          {/* Stats row with count-up */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-white/10"
          >
            <StatItem value="500" label="Global Clients" isNumeric suffix="+" />
            <StatItem value="10yr" label="In Business" />
            <StatItem
              value="2.4"
              label="Revenue Generated"
              isNumeric
              prefix="$"
              suffix="B"
            />
            <StatItem
              value="99"
              label="Satisfaction Rate"
              isNumeric
              suffix="%"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
