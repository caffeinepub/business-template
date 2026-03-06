import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "500+", label: "Clients Served", desc: "Across 30+ industries" },
  { value: "10 yrs", label: "In Business", desc: "Founded in 2015" },
  { value: "99%", label: "Satisfaction", desc: "NPS score of 72" },
  { value: "$2.4B", label: "Revenue Impact", desc: "Cumulative client growth" },
];

const pillars = [
  "Founder-led client relationships",
  "Fully integrated strategy & execution",
  "Proprietary growth frameworks",
  "Transparent, outcome-based pricing",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 section-mid">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-gold-600 tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              A Decade of Turning{" "}
              <span className="font-display italic text-gold-500">
                Ambition into Achievement
              </span>
            </h2>

            <p className="text-foreground/70 text-base leading-relaxed mb-5 font-body">
              Nexara was founded with a single conviction: that every ambitious
              company deserves access to the same calibre of strategic thinking
              that the Fortune 500 takes for granted. We levelled the playing
              field.
            </p>
            <p className="text-foreground/70 text-base leading-relaxed mb-8 font-body">
              Today, our team of 60+ practitioners works shoulder-to-shoulder
              with growth-stage companies, private equity portfolio businesses,
              and market leaders across technology, healthcare, retail, and
              professional services.
            </p>

            {/* Pillars */}
            <ul className="space-y-3">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-gold-500 mt-0.5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-foreground/80 text-sm font-body">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — stats + image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Visual */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img
                src="/assets/generated/about-visual.dim_600x500.jpg"
                alt="Our approach to business strategy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="p-5 rounded-xl bg-card border border-border"
                >
                  <div className="font-display text-3xl font-bold text-gold-500 leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="font-sans font-semibold text-sm text-foreground mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground font-body">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
