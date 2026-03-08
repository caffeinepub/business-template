import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

/* ── Animation variants ─────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

/* ── Subsection divider ─────────────────────────────────────────────────── */
function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-sans font-semibold text-xs text-foreground/45 uppercase tracking-[0.14em] mb-5 flex items-center gap-3">
      <span className="flex-shrink-0">{children}</span>
      <span className="h-px flex-1 bg-border" />
    </h3>
  );
}

/* ── Card wrapper — standardized height + label ─────────────────────────── */
function ShowcaseCard({
  title,
  description,
  children,
  ocid,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  ocid: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      data-ocid={ocid}
      className="group flex flex-col gap-0 rounded-2xl overflow-hidden border border-border/50 hover:border-gold-500/30 transition-colors duration-300"
    >
      {/* Preview area */}
      <div className="relative h-44 overflow-hidden">{children}</div>
      {/* Label below */}
      <div className="px-4 py-3 bg-card border-t border-border/40">
        <p className="font-sans font-semibold text-foreground text-[13px] leading-tight">
          {title}
        </p>
        <p className="text-muted-foreground font-body text-[11px] leading-snug mt-0.5">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Pattern Previews ───────────────────────────────────────────────────── */
function MeshGradientPreview() {
  return (
    <div className="w-full h-full bg-mesh-gradient flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm mx-auto mb-2 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-gold-400/60" />
        </div>
        <p className="text-white/40 text-[10px] font-body">radial OKLCH</p>
      </div>
    </div>
  );
}

function RadialSpotlightPreview() {
  return (
    <div className="w-full h-full bg-radial-spotlight flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 rounded-full bg-gold-500/20 ring-4 ring-gold-400/10 ring-offset-0 mx-auto mb-2 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gold-400" />
        </div>
        <p className="text-white/40 text-[10px] font-body">centered glow</p>
      </div>
    </div>
  );
}

function DotGridPreview() {
  return (
    <div className="w-full h-full pattern-tile-dot flex items-center justify-center">
      <div className="w-20 h-20 rounded-xl border border-gold-500/30 flex items-center justify-center">
        <div className="w-8 h-8 rounded-lg bg-gold-500/25 border border-gold-400/40" />
      </div>
    </div>
  );
}

function DiagonalStripePreview() {
  return (
    <div className="w-full h-full pattern-tile-stripe flex items-center justify-center">
      <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/15">
        <p className="text-white/50 text-xs font-sans font-semibold tracking-widest">
          45° STRIPE
        </p>
      </div>
    </div>
  );
}

function NoiseTexturePreview() {
  return (
    <div className="w-full h-full bg-mesh-gradient bg-noise flex items-center justify-center">
      <div className="text-center">
        <div className="w-14 h-14 rounded-full bg-gold-400/15 border border-gold-400/25 mx-auto mb-2 flex items-center justify-center backdrop-blur-sm">
          <div
            className="w-10 h-10 rounded-full opacity-70"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <p className="text-white/40 text-[10px] font-body">grain overlay</p>
      </div>
    </div>
  );
}

/* ── Glass / Treatment Previews ─────────────────────────────────────────── */
function GlassmorphismPreview() {
  return (
    <div className="w-full h-full relative bg-[oklch(0.13_0.016_58)] flex items-center justify-center overflow-hidden">
      {/* Blob layers */}
      <div className="absolute w-28 h-28 rounded-full bg-gold-500/35 blur-2xl -top-6 -left-6" />
      <div className="absolute w-24 h-24 rounded-full bg-gold-300/25 blur-2xl -bottom-4 right-0" />
      <div className="absolute w-16 h-16 rounded-full bg-gold-600/20 blur-xl top-1/2 right-1/4" />
      <div className="glass-card rounded-xl px-6 py-4 z-10 text-center">
        <div className="w-6 h-6 rounded-full border border-white/30 bg-white/10 mx-auto mb-2" />
        <p className="text-white font-sans font-semibold text-xs">glass-card</p>
        <p className="text-white/45 font-body text-[10px] mt-0.5">
          blur(12px) border
        </p>
      </div>
    </div>
  );
}

function GradientBorderPreview() {
  return (
    <div className="w-full h-full relative bg-background flex items-center justify-center">
      {/* Subtle bg tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/3 to-transparent" />
      <div className="gradient-border-card px-6 py-4 z-10 text-center">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-gold-400/30 to-gold-600/20 mx-auto mb-2" />
        <p className="text-foreground font-sans font-semibold text-xs">
          gradient-border
        </p>
        <p className="text-muted-foreground font-body text-[10px] mt-0.5">
          1.5px gradient stroke
        </p>
      </div>
    </div>
  );
}

function FrostedPanelPreview() {
  return (
    <div className="w-full h-full relative bg-[oklch(0.13_0.016_58)] flex items-center justify-center overflow-hidden">
      {/* Layered blobs for depth */}
      <div className="absolute w-32 h-32 rounded-full bg-gold-400/20 blur-3xl -top-8 left-1/4" />
      <div className="absolute w-20 h-20 rounded-full bg-gold-500/15 blur-2xl bottom-0 right-1/4" />
      <div className="frosted-panel rounded-xl px-6 py-4 z-10 text-center">
        <div className="w-6 h-0.5 bg-white/30 rounded-full mx-auto mb-3" />
        <p className="text-white font-sans font-semibold text-xs">
          frosted-panel
        </p>
        <p className="text-white/45 font-body text-[10px] mt-0.5">
          blur(24px) + saturate
        </p>
      </div>
    </div>
  );
}

function DarkOverlayPreview() {
  return (
    <div className="w-full h-full relative overflow-hidden img-overlay-dark">
      <img
        src="/assets/generated/about-visual.dim_600x500.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-end p-4 z-10">
        <div className="space-y-1">
          <div className="w-16 h-1 rounded-full bg-white/30" />
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

function GoldOverlayPreview() {
  return (
    <div className="w-full h-full relative overflow-hidden img-overlay-gold">
      <img
        src="/assets/generated/about-visual.dim_600x500.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-end p-4 z-10">
        <div className="space-y-1">
          <div className="w-16 h-1 rounded-full bg-gold-300/50" />
          <div className="w-10 h-1 rounded-full bg-gold-300/30" />
        </div>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────────── */
export default function BackgroundStyles() {
  return (
    <section id="backgrounds" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <SectionHeading
            variant="badge"
            eyebrow="Design System"
            title="Background &"
            highlight="Image Styles"
            subtitle="A complete library of CSS background patterns, glass effects, image overlays, and shadow utilities built on OKLCH color tokens."
            darkMode={false}
            align="center"
          />
        </div>

        {/* ── CSS Background Patterns ─────────────────────────────────────── */}
        <div className="mb-12">
          <SubLabel>CSS Background Patterns</SubLabel>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            <ShowcaseCard
              title="Mesh Gradient"
              description="Multi-stop OKLCH radial mesh"
              ocid="backgrounds.item.1"
            >
              <MeshGradientPreview />
            </ShowcaseCard>

            <ShowcaseCard
              title="Radial Spotlight"
              description="Centered gold glow on dark"
              ocid="backgrounds.item.2"
            >
              <RadialSpotlightPreview />
            </ShowcaseCard>

            <ShowcaseCard
              title="Dot Grid"
              description="Repeating gold dot matrix"
              ocid="backgrounds.item.3"
            >
              <DotGridPreview />
            </ShowcaseCard>

            <ShowcaseCard
              title="Diagonal Stripe"
              description="45° repeating stripe"
              ocid="backgrounds.item.4"
            >
              <DiagonalStripePreview />
            </ShowcaseCard>

            <ShowcaseCard
              title="Noise Texture"
              description="Grain texture over mesh"
              ocid="backgrounds.item.5"
            >
              <NoiseTexturePreview />
            </ShowcaseCard>
          </motion.div>
        </div>

        {/* ── Image & Glass Treatments ─────────────────────────────────────── */}
        <div className="mb-16">
          <SubLabel>Image &amp; Glass Treatments</SubLabel>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            <ShowcaseCard
              title="Glassmorphism"
              description="Blurred backdrop glass"
              ocid="backgrounds.item.6"
            >
              <GlassmorphismPreview />
            </ShowcaseCard>

            <ShowcaseCard
              title="Gradient Border"
              description="1.5px gradient mask border"
              ocid="backgrounds.item.7"
            >
              <GradientBorderPreview />
            </ShowcaseCard>

            <ShowcaseCard
              title="Frosted Panel"
              description="High-blur frosted glass"
              ocid="backgrounds.item.8"
            >
              <FrostedPanelPreview />
            </ShowcaseCard>

            <ShowcaseCard
              title="Dark Overlay"
              description="Dark gradient over image"
              ocid="backgrounds.item.9"
            >
              <DarkOverlayPreview />
            </ShowcaseCard>

            <ShowcaseCard
              title="Gold Overlay"
              description="Gold gradient over image"
              ocid="backgrounds.item.10"
            >
              <GoldOverlayPreview />
            </ShowcaseCard>
          </motion.div>
        </div>

        {/* ── Full-Bleed Showcase ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          data-ocid="backgrounds.panel"
          className="relative rounded-3xl overflow-hidden h-80 lg:h-[420px]"
        >
          {/* Background image */}
          <img
            src="/assets/generated/backgrounds-showcase.dim_1600x900.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Layered overlay — stronger and more refined */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/40" />
          {/* Dot grid texture — more visible */}
          <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
          {/* Diagonal stripe at low opacity in right half */}
          <div className="absolute inset-0 bg-stripe-diagonal opacity-10 pointer-events-none" />

          {/* Decorative pattern tiles — right side collage */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 opacity-60">
            <div className="flex gap-3">
              <div className="w-20 h-16 rounded-xl overflow-hidden pattern-tile-mesh" />
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-radial-spotlight" />
            </div>
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden pattern-tile-dot" />
              <div className="w-20 h-16 rounded-xl overflow-hidden pattern-tile-stripe" />
            </div>
          </div>

          {/* Gold accent line */}
          <div className="absolute left-12 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-gold-400/40 to-transparent hidden lg:block" />

          {/* Content — left aligned */}
          <div className="relative z-10 flex flex-col justify-center h-full px-10 lg:px-14 max-w-xl">
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-gold-400 text-xs font-semibold tracking-[0.14em] uppercase mb-4"
            >
              Full-Bleed Showcase
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              Background{" "}
              <span className="font-display italic text-gold-400">
                Design System
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="text-white/55 font-body text-base leading-relaxed mb-8 max-w-sm"
            >
              10 patterns and treatments, all OKLCH-native. Designed for
              dark-mode richness and consistent cross-browser rendering.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="flex items-center gap-3"
            >
              <button
                type="button"
                data-ocid="backgrounds.secondary_button"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-400/40 text-gold-300 text-xs font-semibold hover:border-gold-400/70 hover:text-gold-200 hover:bg-gold-500/8 transition-all duration-200"
              >
                View CSS Source
              </button>
              <div className="flex gap-1.5">
                {["mesh", "dot", "stripe"].map((t) => (
                  <div
                    key={t}
                    className="w-1.5 h-1.5 rounded-full bg-white/20"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
