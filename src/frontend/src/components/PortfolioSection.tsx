import { Button } from "@/components/ui/button";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

const caseStudies = [
  {
    id: 1,
    client: "Meridian Capital",
    industry: "Finance",
    result: "+312% Revenue Growth",
    description:
      "Restructured go-to-market strategy and sales funnel, delivering 3x revenue in 18 months.",
    gradientStyle: {
      background:
        "linear-gradient(135deg, oklch(0.18 0.016 58) 0%, oklch(0.22 0.06 68) 50%, oklch(0.14 0.01 55) 100%)",
    },
    accentStyle: {
      background:
        "linear-gradient(90deg, oklch(0.62 0.14 68 / 0.15) 0%, transparent 100%)",
    },
  },
  {
    id: 2,
    client: "Vanta Health",
    industry: "Healthcare",
    result: "2.1M Patients Reached",
    description:
      "Built a digital outreach engine that scaled patient engagement across 14 markets.",
    gradientStyle: {
      background:
        "linear-gradient(135deg, oklch(0.15 0.01 65) 0%, oklch(0.20 0.04 75) 50%, oklch(0.25 0.08 65) 100%)",
    },
    accentStyle: {
      background:
        "linear-gradient(90deg, oklch(0.72 0.10 90 / 0.12) 0%, transparent 100%)",
    },
  },
  {
    id: 3,
    client: "Corex Logistics",
    industry: "Operations",
    result: "40% Cost Reduction",
    description:
      "Optimized procurement and workflow automation, cutting operational spend by nearly half.",
    gradientStyle: {
      background:
        "linear-gradient(135deg, oklch(0.12 0.01 55) 0%, oklch(0.20 0.05 60) 50%, oklch(0.28 0.10 65) 100%)",
    },
    accentStyle: {
      background:
        "linear-gradient(90deg, oklch(0.60 0.12 55 / 0.15) 0%, transparent 100%)",
    },
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 section-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-gold-300 text-sm font-medium tracking-wide">
              Our Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4"
          >
            Results That{" "}
            <span className="font-display italic text-gold-400">
              Speak for Themselves
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/55 text-lg max-w-xl mx-auto font-body"
          >
            Real outcomes from real partnerships. Every number tells a story of
            strategy, execution, and relentless focus.
          </motion.p>
        </div>

        {/* Case study grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              data-ocid={`portfolio.item.${study.id}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-white/10 bg-charcoal-900/60 overflow-hidden hover:border-gold-500/30 hover:shadow-gold transition-colors duration-300"
            >
              {/* Image placeholder with gradient */}
              <div
                className="relative h-[200px] overflow-hidden"
                style={study.gradientStyle}
              >
                {/* Accent overlay */}
                <div
                  className="absolute inset-0"
                  style={study.accentStyle}
                  aria-hidden="true"
                />

                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                  aria-hidden="true"
                />

                {/* Corner accent */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gold-500/30 bg-gold-500/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                </div>

                {/* Industry tag on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-gold-500/40 bg-charcoal-900/70 text-gold-300 text-xs font-medium tracking-wide backdrop-blur-sm">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Result metric */}
                <div className="mb-3">
                  <span className="font-display text-2xl font-bold text-gold-400 leading-tight">
                    {study.result}
                  </span>
                </div>

                {/* Client name */}
                <h3 className="font-sans font-bold text-white text-lg mb-2 leading-snug">
                  {study.client}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm font-body leading-relaxed mb-5">
                  {study.description}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  data-ocid={`portfolio.view_case_study_button.${study.id}`}
                  className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400 hover:text-gold-300 transition-all group/btn"
                >
                  View Case Study
                  <span className="ml-1.5 transition-transform group-hover/btn:translate-x-0.5">
                    →
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
