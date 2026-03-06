import { motion } from "motion/react";

const partners = [
  {
    name: "Meridian Capital",
    industry: "Finance",
    initials: "MC",
    color: "oklch(0.62 0.14 68)",
    bg: "oklch(0.62 0.14 68 / 0.12)",
  },
  {
    name: "Vanta Health",
    industry: "Healthcare",
    initials: "VH",
    color: "oklch(0.65 0.15 160)",
    bg: "oklch(0.65 0.15 160 / 0.1)",
  },
  {
    name: "Corex Logistics",
    industry: "Logistics",
    initials: "CL",
    color: "oklch(0.6 0.12 230)",
    bg: "oklch(0.6 0.12 230 / 0.1)",
  },
  {
    name: "Arcturus Tech",
    industry: "Technology",
    initials: "AT",
    color: "oklch(0.68 0.16 290)",
    bg: "oklch(0.68 0.16 290 / 0.1)",
  },
  {
    name: "Helix Retail",
    industry: "Retail",
    initials: "HR",
    color: "oklch(0.63 0.18 30)",
    bg: "oklch(0.63 0.18 30 / 0.1)",
  },
  {
    name: "Stratum Energy",
    industry: "Energy",
    initials: "SE",
    color: "oklch(0.7 0.17 100)",
    bg: "oklch(0.7 0.17 100 / 0.1)",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-widest uppercase mb-3">
            Trusted Partners
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Companies That{" "}
            <span className="font-display italic text-gold-500">
              Grow With Us
            </span>
          </h2>
          <p className="text-foreground/65 text-lg max-w-xl mx-auto font-body">
            From fast-scaling startups to established market leaders — our
            partners span every stage and sector.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-gold-400/30 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                {/* Abstract logo placeholder */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: partner.bg }}
                >
                  {/* Geometric SVG logo mark */}
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="9"
                      height="9"
                      rx="2"
                      fill={partner.color}
                      opacity="0.9"
                    />
                    <rect
                      x="14"
                      y="3"
                      width="9"
                      height="9"
                      rx="2"
                      fill={partner.color}
                      opacity="0.5"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="9"
                      height="9"
                      rx="2"
                      fill={partner.color}
                      opacity="0.5"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="9"
                      height="9"
                      rx="2"
                      fill={partner.color}
                      opacity="0.9"
                    />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-bold text-foreground text-base leading-tight truncate">
                    {partner.name}
                  </h3>
                  <span
                    className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                    style={{
                      background: partner.bg,
                      color: partner.color,
                    }}
                  >
                    {partner.industry}
                  </span>
                </div>
              </div>

              {/* Initials watermark */}
              <div
                className="absolute bottom-3 right-4 font-display font-black text-3xl leading-none opacity-5 select-none"
                style={{ color: partner.color }}
              >
                {partner.initials}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
