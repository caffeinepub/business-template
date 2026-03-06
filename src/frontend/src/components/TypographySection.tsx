import { motion } from "motion/react";
import ParagraphStyles from "./ParagraphStyles";
import SectionHeading from "./SectionHeading";

const variants = [
  {
    id: "lead",
    label: "LEAD",
    description: "Opening paragraph",
    bgAccent: "bg-gold-500/5 border-gold-500/20",
    sampleContent: (
      <ParagraphStyles variant="lead">
        At Nexara, we believe that exceptional strategy is the single greatest
        lever a business can pull. Every engagement starts with deep listening —
        because the best insights are already inside your organisation.
      </ParagraphStyles>
    ),
  },
  {
    id: "body",
    label: "BODY",
    description: "Standard readable copy",
    bgAccent: "bg-card border-border",
    sampleContent: (
      <ParagraphStyles variant="body">
        Our integrated approach combines rigorous market analysis with hands-on
        execution support. From competitive positioning to go-to-market
        acceleration, we deliver measurable outcomes — not just advisory decks
        gathering dust on a shelf.
      </ParagraphStyles>
    ),
  },
  {
    id: "caption",
    label: "CAPTION",
    description: "Small, subdued auxiliary text",
    bgAccent: "bg-card border-border",
    sampleContent: (
      <ParagraphStyles variant="caption">
        Data sourced from Nexara client cohort 2021–2025. Results vary by
        industry, company size, and engagement scope. Past performance does not
        guarantee future outcomes.
      </ParagraphStyles>
    ),
  },
  {
    id: "blockquote",
    label: "BLOCKQUOTE",
    description: "Attributed citation",
    bgAccent: "bg-card border-border",
    sampleContent: (
      <ParagraphStyles
        variant="blockquote"
        author="Sarah Chen, CEO — Meridian Capital"
      >
        Nexara didn't just give us a growth strategy — they embedded with our
        team and made sure every initiative actually stuck. Revenue is up 180%
        in 18 months.
      </ParagraphStyles>
    ),
  },
  {
    id: "pull-quote",
    label: "PULL QUOTE",
    description: "Large decorative featured quote",
    bgAccent: "bg-charcoal-950/[0.03] border-charcoal-200",
    sampleContent: (
      <ParagraphStyles
        variant="pull-quote"
        author="James Okonkwo, Founder — Vanta Health"
      >
        Strategy without execution is hallucination.
      </ParagraphStyles>
    ),
  },
  {
    id: "callout",
    label: "CALLOUT",
    description: "Highlighted informational box",
    bgAccent: "bg-card border-border",
    sampleContent: (
      <ParagraphStyles variant="callout">
        <strong>Pro tip:</strong> Companies that align their growth strategy
        with data operations see 2.4× faster revenue acceleration within the
        first fiscal year of engagement.
      </ParagraphStyles>
    ),
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function TypographySection() {
  return (
    <section id="typography" className="py-24 lg:py-32 section-mid">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <SectionHeading
          variant="badge"
          eyebrow="Design System"
          title="Paragraph Styles"
          highlight="Paragraph Styles"
          subtitle="A curated set of typographic patterns for clear hierarchy, readable copy, and persuasive long-form communication across every section of your business narrative."
          align="center"
          className="mb-16"
        />

        {/* Card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {variants.map((v) => (
            <motion.article
              key={v.id}
              variants={cardVariants}
              data-ocid={`typography.${v.id}.card`}
              className={`rounded-2xl border p-7 flex flex-col gap-4 ${v.bgAccent}`}
            >
              {/* Label row */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-600 text-[10px] font-bold tracking-widest uppercase">
                  {v.label}
                </span>
                <span className="text-xs text-muted-foreground font-body">
                  {v.description}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Sample paragraph */}
              <div className="flex-1">{v.sampleContent}</div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground font-body"
        >
          All variants accept a{" "}
          <code className="px-1.5 py-0.5 rounded bg-gold-500/10 text-gold-600 text-xs font-mono">
            className
          </code>{" "}
          prop for one-off overrides without breaking the system.
        </motion.p>
      </div>
    </section>
  );
}
