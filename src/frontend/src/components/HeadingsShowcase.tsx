import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const variants: {
  label: string;
  element: React.ReactNode;
}[] = [
  {
    label: "Default Variant",
    element: (
      <SectionHeading
        variant="default"
        eyebrow="Our Approach"
        title="Building  That Last"
        highlight="Brands"
        subtitle="A showcase of our default heading style with eyebrow label."
        darkMode={true}
        align="center"
      />
    ),
  },
  {
    label: "Split Variant",
    element: (
      <SectionHeading
        variant="split"
        title="Strategy Meets"
        highlight="Execution"
        subtitle="Two-line split with italic gold accent."
        darkMode={true}
        align="center"
      />
    ),
  },
  {
    label: "Underline Variant",
    element: (
      <SectionHeading
        variant="underline"
        title="Award-Winning Results"
        subtitle="Animated underline draws on load."
        darkMode={true}
        align="center"
      />
    ),
  },
  {
    label: "Outlined Variant",
    element: (
      <SectionHeading
        variant="outlined"
        title="Innovation"
        outlineText="VISION"
        subtitle="Large outlined ghost text creates depth."
        darkMode={true}
        align="center"
      />
    ),
  },
  {
    label: "Badge Variant",
    element: (
      <SectionHeading
        variant="badge"
        eyebrow="New"
        title="Launching Soon"
        subtitle="Pill badge above the heading for announcements."
        darkMode={true}
        align="center"
      />
    ),
  },
];

export default function HeadingsShowcase() {
  return (
    <section id="headings" className="py-24 lg:py-32 section-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-gold-400 tracking-widest uppercase mb-3">
            Design System
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Heading{" "}
            <span className="font-display italic text-gold-400">
              Design System
            </span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto font-body">
            Five heading variants crafted for hierarchy, rhythm, and visual
            impact across every section of the template.
          </p>
        </motion.div>

        {/* Variant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-8 flex flex-col ${
                i === variants.length - 1 && variants.length % 2 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Variant label */}
              <p className="text-white/40 text-xs uppercase tracking-widest mb-6 font-sans">
                {v.label}
              </p>

              {/* Heading variant */}
              <div className="flex-1 flex flex-col justify-center pt-4">
                {v.element}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
